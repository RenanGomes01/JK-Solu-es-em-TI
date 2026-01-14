import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { BarChart3, FileText, ArrowRight, CheckCircle, Shield } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Shield,
    title: 'Segurança Eletrônica',
    description: 'Desenvolvimento, instalações e manutenções em projetos em CFTV.',
    features: [
      'Desenvolvimento de projetos em CFTV',
      'Instalações profissionais',
      'Manutenção preventiva e corretiva',
      'Consultoria em segurança eletrônica'
    ]
  },
  {
    icon: BarChart3,
    title: 'Processos Automatizados',
    description: 'Em breve mais informações sobre esta modalidade.',
    features: [
      'Automação de processos',
      'Otimização de rotinas',
      'Integração de sistemas',
      'Em breve mais informações'
    ]
  },
  {
    icon: FileText,
    title: 'Software de Gerenciamento',
    description: 'Em breve mais informações sobre esta modalidade.',
    features: [
      'Sistemas de gerenciamento',
      'Soluções personalizadas',
      'Desenvolvimento sob medida',
      'Em breve mais informações'
    ]
  },
]

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl">
              <ScrollReveal delay={100}>
                <p className="text-blue-400 font-semibold mb-4 text-sm uppercase tracking-wider">NOSSOS SERVIÇOS</p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Soluções completas para<br />
                  <span className="text-blue-400">impulsionar seu negócio</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-xl text-white max-w-2xl">
                  Confira o que há de melhor em soluções de tecnologia da informação (TI).
                </p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <ScrollReveal key={index} delay={index * 100 + 400}>
                  <Card className="transition-all duration-300 hover:shadow-lg h-full">
                    <CardContent className="p-8">
                      <div className="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <Icon className="h-7 w-7 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/contato">
                          Mais informações
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal delay={700}>
            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/contato">
                  Entre em Contato
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <ScrollReveal delay={100}>
                <p className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wider">COMO TRABALHAMOS</p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Nosso processo de trabalho</h2>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Uma metodologia comprovada que garante resultados exclusivos para nossos clientes.
                </p>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                {
                  number: '01',
                  title: 'Diagnóstico',
                  description: 'Análise completa da situação atual da sua empresa.'
                },
                {
                  number: '02',
                  title: 'Planejamento',
                  description: 'Desenvolvimento de estratégias personalizadas.'
                },
                {
                  number: '03',
                  title: 'Execução',
                  description: 'Implementação das soluções com acompanhamento.'
                },
                {
                  number: '04',
                  title: 'Monitoramento',
                  description: 'Mensuração e otimização contínua dos resultados.'
                }
              ].map((step, index) => (
                <ScrollReveal key={index} delay={400 + index * 100}>
                  <div className="relative">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-blue-400 mb-4">{step.number}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2 -translate-y-1/2">
                        <ArrowRight className="h-8 w-8 text-blue-600" />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
