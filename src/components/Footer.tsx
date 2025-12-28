import { Flower2, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'packages', label: 'Packages' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-2xl font-serif text-amber-200 mb-4">
              <Flower2 className="w-8 h-8 text-amber-400" />
              <span>Serenity Spa</span>
            </div>
            <p className="text-sm leading-relaxed">
              Experience tranquility and renewal through our carefully curated wellness treatments.
              Your journey to relaxation begins here.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-serif text-amber-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif text-amber-200 mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 text-center text-sm">
          <p>&copy; 2024 Serenity Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
