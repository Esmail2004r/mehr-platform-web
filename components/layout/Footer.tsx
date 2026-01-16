export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
        <p>© {currentYear} MEHR. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:underline">
            Terms
          </a>
        </p>
      </div>
    </footer>
  );
};
