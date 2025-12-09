import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { createPageUrl } from '@/utils';
import logoWhite from '../../../img/logo_em_branco.png.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logoWhite} alt="JK Soluções em TI" className="w-20 h-20 object-contain" />
            </div>
            <p className="text-slate-300 leading-relaxed max-w-sm">
              Há mais de 15 anos oferecendo soluções de TI com alta qualidade, compromisso,
              transparência e excelência em cada projeto.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon) => (
                <a
                  key={Icon.displayName}
                  href="#"
                  className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-blue-600/80 transition-colors"
                >
                  <Icon className="w-5 h-5 text-blue-400" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Links Rápidos</h3>
            <ul className="space-y-3 text-slate-300">
              {[
                { label: 'Início', href: 'Home' },
                { label: 'Sobre Nós', href: 'About' },
                { label: 'Serviços', href: 'Services' },
                { label: 'Blog', href: 'Blog' },
                { label: 'Contato', href: 'Contact' },
                { label: 'Área do Cliente', href: 'ClientDashboard' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={createPageUrl(item.href)}
                    className="hover:text-blue-400 transition-colors inline-flex items-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Nossos Serviços</h3>
            <ul className="space-y-3 text-slate-300">
              {[
                'Consultoria Empresarial',
                'Gestão Financeira',
                'Assessoria Jurídica',
                'Planejamento Estratégico',
                'Auditoria',
                'Compliance',
              ].map((service) => (
                <li key={service} className="inline-flex items-center">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Contato</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <span>
                  Av. Paulista, 1000 - 10º andar
                  <br />
                  São Paulo - SP, 01310-100
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+5511999999999" className="hover:text-blue-400 transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:contato@jksolucoes.com.br" className="hover:text-blue-400 transition-colors">
                  contato@jksolucoes.com.br
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Seg - Sex: 08:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <p>© {currentYear} JK Soluções em TI. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

