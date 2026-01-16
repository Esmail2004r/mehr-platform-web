import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { Role } from '@prisma/client';

const SECRET = process.env.NEXTAUTH_SECRET!;

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: SECRET });
  const path = req.nextUrl.pathname;

  // Public routes
  if (
    path.startsWith('/signin') ||
    path.startsWith('/signup') ||
    path.startsWith('/api/auth')
  ) {
    return NextResponse.next();
  }

  // Dashboard requires auth
  if (path.startsWith('/dashboard')) {
    if (!token) {
      const url = new URL('/signin', req.url);
      url.searchParams.set('callbackUrl', req.url);
      return NextResponse.redirect(url);
    }

    const role = token.role as Role;

    if (path.startsWith('/dashboard/admin') && role !== Role.ADMIN) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }

    if (
      path.startsWith('/dashboard/institution') &&
      role !== Role.INSTITUTION &&
      role !== Role.ADMIN
    ) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }

    if (path.startsWith('/dashboard/user') && !role) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
