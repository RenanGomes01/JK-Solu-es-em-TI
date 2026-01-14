import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JK SOLUÇÕES EM TI - Consultoria de TI e Segurança Eletrônica | Cuiabá - MT',
  description: 'Consultoria de TI especializada em Segurança Eletrônica, Processos Automatizados e Software de Gerenciamento. Fundada em 2017, oferecemos soluções para automatizar o dia a dia da sua empresa. CFTV, desenvolvimento de softwares e suporte técnico em Cuiabá - MT.',
  keywords: 'consultoria de TI, segurança eletrônica, CFTV, desenvolvimento de software, automação empresarial, suporte técnico, tecnologia da informação, Cuiabá, Mato Grosso, processos automatizados, software de gerenciamento',
  authors: [{ name: 'JK SOLUÇÕES EM TI' }],
  creator: 'JK SOLUÇÕES EM TI',
  publisher: 'JK SOLUÇÕES EM TI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.jksolucoesemti.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'JK SOLUÇÕES EM TI - Consultoria de TI e Segurança Eletrônica',
    description: 'Consultoria de TI especializada em Segurança Eletrônica, Processos Automatizados e Software de Gerenciamento. Soluções para automatizar o dia a dia da sua empresa.',
    url: 'https://www.jksolucoesemti.com.br',
    siteName: 'JK SOLUÇÕES EM TI',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JK SOLUÇÕES EM TI - Consultoria de TI e Segurança Eletrônica',
    description: 'Consultoria de TI especializada em Segurança Eletrônica, Processos Automatizados e Software de Gerenciamento.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/img/logo_em_preto.png.png',
    shortcut: '/img/logo_em_preto.png.png',
    apple: '/img/logo_em_preto.png.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
