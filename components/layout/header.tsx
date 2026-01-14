'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()

  return (
    <>
      {/* Main Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/img/logo_em_preto.png.png"
                alt="JK SOLUÇÕES EM TI"
                width={300}
                height={100}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                href="/" 
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  pathname === '/' ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                )}
              >
                Início
              </Link>
              <Link 
                href="/sobre" 
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  pathname === '/sobre' ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                )}
              >
                Sobre
              </Link>
              <Link 
                href="/servicos" 
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  pathname === '/servicos' ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                )}
              >
                Serviços
              </Link>
              <Link 
                href="/contato" 
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  pathname === '/contato' ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                )}
              >
                Contato
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <Button asChild>
                <Link href="/contato">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}


