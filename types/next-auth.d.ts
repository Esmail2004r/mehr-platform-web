import { Role } from '@prisma/client';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      role: Role;
      institutionId?: string | null;
    };
  }

  interface User {
    id: string;
    role: Role;
    institutionId?: string | null;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: Role;
    institutionId?: string | null;
  }
}
