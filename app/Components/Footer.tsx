import Link from 'next/link';
import { Instagram, Twitter, Mail } from 'lucide-react';

// Custom TikTok icon since it's not in Lucide
const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 font-['Lexend']">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-cyan-600 mb-6 tracking-tight">SWIMVIBE</h2>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Sustainable swimwear designed for confidence and comfort. Made from recycled materials with love in California.
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mb-8">
            <Link href="#" className="text-cyan-600 hover:text-cyan-800 transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-cyan-600 hover:text-cyan-800 transition-colors">
              <TiktokIcon />
            </Link>
            <Link href="#" className="text-cyan-600 hover:text-cyan-800 transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="mailto:hello@swimvibe.com" className="text-cyan-600 hover:text-cyan-800 transition-colors">
              <Mail size={20} />
            </Link>
          </div>
        </div>

        {/* Shop Column */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Shop</h3>
          <ul className="space-y-3">
            <li><Link href="/shop" className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">All Swimwear</Link></li>
            <li><Link href="/bikinis" className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">Bikinis</Link></li>
            <li><Link href="/one-pieces" className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">One Pieces</Link></li>
            <li><Link href="/cover-ups" className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">Cover Ups</Link></li>
            <li><Link href="/accessories" className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">Accessories</Link></li>
            <li><Link href="/new-arrivals" className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        {/* About Column */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">About</h3>
          <ul className="space-y-3">
            <li><Link href="/our-story" className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">Our Story</Link></li>
            <li><Link href="/sustainability" className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">Sustainability</Link></li>
            <li><Link href="/blog" className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">Journal</Link></li>
            <li><Link href="/size-guide" className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">Size Guide</Link></li>
            <li><Link href="/care-guide" className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">Care Guide</Link></li>
            <li><Link href="/press" className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">Press</Link></li>
          </ul>
        </div>

        {/* Help Column */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Help</h3>
          <ul className="space-y-3">
            <li><Link href="/contact" className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">Contact Us</Link></li>
            <li><Link href="/faq" className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">FAQs</Link></li>
            <li><Link href="/shipping" className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">Shipping & Returns</Link></li>
            <li><Link href="/store-locator" className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">Store Locator</Link></li>
            <li><Link href="/wholesale" className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">Wholesale</Link></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="md:col-span-4">
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Join the Swim Club</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Get 10% off your first order and be the first to know about new drops and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent font-['Lexend']"
              />
              <button className="px-6 py-3 bg-cyan-600 text-white text-sm font-medium rounded-md hover:bg-cyan-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} SwimVibe. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-cyan-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-gray-500 hover:text-cyan-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-xs text-gray-500 hover:text-cyan-600 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;