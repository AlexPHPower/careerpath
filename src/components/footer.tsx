import Link from "next/link";

export default function Footer() {
  return (
    <footer className="from-homepagegradient1 to-homepagegradient2 bg-gradient-to-r py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="mb-6 w-full md:mb-0 md:w-1/3">
            <h2 className="mb-2 text-lg font-semibold">Career Path</h2>
            <p className="text-sm">Get the best job in your field.</p>
          </div>
          <div className="mb-6 w-full md:mb-0 md:w-1/3">
            <h3 className="mb-2 text-lg font-semibold">Quick Links</h3>
            <div className="flex space-x-4">
              <Link href="/" className="transition-colors">
                Home
              </Link>
              <Link href="/about" className="transition-colors">
                About
              </Link>
              <Link href="/services" className="transition-colors">
                Services
              </Link>
              <Link href="/contact" className="transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="mb-2 text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
              >
                <span>Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
              >
                <span>Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
              >
                <span>Instagram</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
              >
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
