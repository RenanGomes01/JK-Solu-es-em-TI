import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Clock, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/img/logo_em_branco.png.png"
                alt="JK SOLUÇÕES EM TI"
                width={350}
                height={150}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-sm mb-4">
              Fundada em 2017, oferecemos soluções em tecnologia da informação para automatizar o dia a dia de empresas, incluindo CFTV e desenvolvimento de softwares.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-blue-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm hover:text-blue-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-sm hover:text-blue-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm hover:text-blue-400 transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/area-do-cliente" className="text-sm hover:text-blue-400 transition-colors">
                  Área do Cliente
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos" className="text-sm hover:text-blue-400 transition-colors">
                  Segurança Eletrônica
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-sm hover:text-blue-400 transition-colors">
                  Processos Automatizados
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-sm hover:text-blue-400 transition-colors">
                  Software de Gerenciamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Rua A, 68 - Porto<br />Cuiabá - MT, 78.025-569</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+5565999514408" className="text-sm hover:text-blue-400 transition-colors">
                  (65) 99951-4408
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+5565996297106" className="text-sm hover:text-blue-400 transition-colors">
                  (65) 99629-7106
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:jksolucoesemti@gmail.com.br" className="text-sm hover:text-blue-400 transition-colors">
                  jksolucoesemti@gmail.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Seg - Sex: 07:30 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2025 JK SOLUÇÕES EM TI. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


