import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../images/LogoMiri.png'

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos de nous' },
    { id: 'treatments', label: 'Soins' },
    // { id: 'packages', label: 'Forfaits' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 text-2xl font-serif text-amber-900"
          >
            <a className="Logo">
              <img src={Logo} alt="Logo" />
            </a>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`font-medium transition-colors ${currentPage === item.id
                  ? 'text-amber-800 border-b-2 border-amber-800'
                  : 'text-gray-700 hover:text-amber-800'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => handleNavigate('contact')}
            className="bg-amber-800 text-white px-6 py-2 rounded-md hover:bg-amber-900 transition-colors font-medium hidden sm:block"
          >
            Réserver maintenant
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-amber-800 hover:text-amber-900 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-4 pb-4 border-t border-stone-200 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-left font-medium transition-colors py-2 ${currentPage === item.id ? 'text-amber-800' : 'text-gray-700 hover:text-amber-800'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('contact')}
              className="bg-amber-800 text-white px-6 py-2 rounded-md hover:bg-amber-900 transition-colors font-medium w-full mt-2"
            >
              Book Now
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
