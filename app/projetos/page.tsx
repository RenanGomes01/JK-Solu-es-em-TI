import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { BarChart3, FileText, Camera, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    icon: BarChart3,
    title: 'CONVERSOR A 20º',
    subtitle: 'Software de Conversão',
    description: 'Rotina de conversão de temperatura para 20º. Utilizado na distribuição em armazenamento de combustíveis.',
    status: 'disponivel'
  },
  {
    icon: FileText,
    title: 'SERVER REPORT',
    subtitle: 'Software de Relatório',
    description: 'Desenvolva, Crie e Modele relatório com facilidades para o seus usuários.',
    status: 'disponivel'
  },
  {
    icon: Camera,
    title: 'PROJETO DE CFTV',
    subtitle: 'Consultoria e Desenvolvimento',
    description: 'Um projeto voltado para a segurança eletrônica. Consultoria e desenvolvimento de projetos em CFTV.',
    status: 'em-breve'
  },
]

export default function ProjetosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl">
              <ScrollReveal delay={100}>
                <p className="text-blue-400 font-semibold mb-4 text-sm uppercase tracking-wider">NOSSOS PROJETOS</p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Desenvolvemos projetos para gerenciar e transformar ideias em resultados
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-xl text-white max-w-2xl">
                  Confira nossos projetos desenvolvidos para automatizar e otimizar processos empresariais.
                </p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <ScrollReveal key={index} delay={index * 100 + 400}>
                  <Card className="transition-all duration-300 hover:shadow-lg h-full">
                    <CardContent className="p-8">
                      <div className="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <Icon className="h-7 w-7 text-blue-600" />
                      </div>
                      <div className="mb-2">
                        {project.status === 'em-breve' && (
                          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                            Em Breve
                          </span>
                        )}
                        {project.status === 'disponivel' && (
                          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                            Disponível
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-blue-600 font-semibold mb-4">{project.subtitle}</p>
                      <p className="text-gray-600 mb-6">{project.description}</p>
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
      
      <Footer />
    </div>
  )
}

