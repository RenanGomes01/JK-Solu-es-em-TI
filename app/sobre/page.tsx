import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import Image from 'next/image'
import { Target, Eye, Heart, Shield, Award, Users, TrendingUp } from 'lucide-react'

// Função para calcular anos de experiência desde a fundação
function getYearsOfExperience(foundationYear: number): number {
  const currentYear = new Date().getFullYear()
  return currentYear - foundationYear
}

const FOUNDATION_YEAR = 2017
const YEARS_EXPERIENCE = getYearsOfExperience(FOUNDATION_YEAR)

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl">
              <ScrollReveal delay={100}>
                <p className="text-blue-400 font-semibold mb-4 text-sm uppercase tracking-wider">SOBRE NÓS</p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Construindo o futuro das<br />
                  <span className="text-blue-400">empresas brasileiras</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-xl text-white max-w-2xl">
                  Fundada em 2017, somos especialistas em tecnologia da informação, oferecendo soluções para automatizar o dia a dia de empresas do mercado corporativo.
                </p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* História Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="right">
              <div className="relative bg-gray-200 rounded-2xl overflow-hidden h-[400px]">
                <Image
                  src="/img/sobre.jpeg"
                  alt="História e compromisso da JK SOLUÇÕES EM TI"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div>
                <ScrollReveal delay={100}>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Uma história de compromisso e resultados
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <p className="text-lg text-gray-600 mb-4">
                    Fundada em 16 de novembro de {FOUNDATION_YEAR}, a JK Soluções em TI atua no setor de tecnologia da informação, oferecendo soluções para automatizar o dia a dia de empresas do mercado corporativo.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <p className="text-lg text-gray-600 mb-8">
                    A empresa fornece serviços e projetos na área de tecnologia, incluindo CFTV e desenvolvimento de softwares. Nossa atividade principal é de suporte técnico, manutenção e outros serviços em tecnologia da informação, sempre focados em inovação e eficiência para nossos clientes.
                  </p>
                </ScrollReveal>

                {/* Stats */}
                <ScrollReveal delay={400}>
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                        <div className="text-sm text-gray-600">Clientes Atendidos</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">{YEARS_EXPERIENCE}+</div>
                        <div className="text-sm text-gray-600">Anos de Experiência</div>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Missão</h3>
                  <p className="text-gray-600">
                    Oferecer soluções em tecnologia da informação para automatizar o dia a dia de empresas, fornecendo serviços e projetos que incluem CFTV e desenvolvimento de softwares.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="h-16 w-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <Eye className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Visão</h3>
                  <p className="text-gray-600">
                    Ser referência em suporte técnico, manutenção e serviços em tecnologia da informação para o mercado corporativo.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Valores</h3>
                  <p className="text-gray-600">
                    Integridade, excelência, inovação, colaboração e compromisso com resultados guiam todas as nossas ações.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Nossos Valores Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <ScrollReveal delay={100}>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: 'Integridade',
                description: 'Atuamos com ética e transparência em todas as relações.',
                bgColor: 'bg-blue-100',
                iconColor: 'text-blue-600'
              },
              {
                icon: Award,
                title: 'Excelência',
                description: 'Buscamos a perfeição em cada projeto e entrega.',
                bgColor: 'bg-blue-100',
                iconColor: 'text-blue-600'
              },
              {
                icon: Users,
                title: 'Colaboração',
                description: 'Trabalhamos em parceria com nossos clientes.',
                bgColor: 'bg-blue-100',
                iconColor: 'text-blue-600'
              },
              {
                icon: TrendingUp,
                title: 'Inovação',
                description: 'Investimos constantemente em novas soluções.',
                bgColor: 'bg-blue-100',
                iconColor: 'text-blue-600'
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <ScrollReveal key={index} delay={index * 100 + 200}>
                  <div className="text-center">
                    <div className={`${value.bgColor} h-16 w-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`h-8 w-8 ${value.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <ScrollReveal delay={100}>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Trajetória</h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl text-gray-600">
                  Uma jornada de crescimento, aprendizado e conquistas ao lado de nossos clientes.
                </p>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  year: '2017',
                  title: 'Fundação',
                  description: 'Início das operações com foco em tecnologia da informação e automação empresarial.',
                  side: 'left'
                },
                {
                  year: '2019',
                  title: 'Expansão de Serviços',
                  description: 'Ampliação dos serviços para incluir CFTV e desenvolvimento de softwares.',
                  side: 'right'
                },
                {
                  year: '2021',
                  title: 'Consolidação',
                  description: 'Consolidação no mercado corporativo com soluções personalizadas.',
                  side: 'left'
                },
                {
                  year: '2023',
                  title: 'Inovação',
                  description: 'Foco em processos automatizados e software de gerenciamento.',
                  side: 'right'
                },
                {
                  year: '2025',
                  title: 'Crescimento Contínuo',
                  description: 'Referência em suporte técnico e serviços em tecnologia da informação.',
                  side: 'left'
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100 + 300}>
                  <div className={`relative flex items-center ${item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${item.side === 'left' ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                      <Card>
                        <CardContent className="p-6">
                          <div className={`text-blue-600 font-bold text-2xl mb-2 ${item.side === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                            {item.year}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                    {/* Spacer for mobile */}
                    <div className="md:w-5/12"></div>
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
