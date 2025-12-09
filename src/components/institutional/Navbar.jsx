import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';
import logo from '../../../img/logo.png.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Início', href: 'Home' },
    { label: 'Sobre', href: 'About' },
    { label: 'Serviços', href: 'Services' },
    { label: 'Blog', href: 'Blog' },
    { label: 'Contato', href: 'Contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-lg backdrop-blur' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to={createPageUrl('Home')} className="flex items-center gap-3">
            <img src={logo} alt="JK Soluções em TI" className="w-16 h-16 object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={createPageUrl(link.href)}
                className="text-slate-700 font-medium hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25">
                Fale Conosco
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden p-2 text-slate-700"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="px-6 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                to={createPageUrl(link.href)}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-slate-800 font-medium hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t">
              <Link to={createPageUrl('Contact')} onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Fale Conosco</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

