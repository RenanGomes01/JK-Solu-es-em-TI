import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'
import { 
  CheckCircle, 
  Award, 
  Shield, 
  TrendingUp, 
  Users, 
  BarChart3,
  FileText,
  Play,
  ArrowRight,
  Star,
  Phone
} from 'lucide-react'
import Link from 'next/link'

// Função para calcular anos de experiência desde a fundação
function getYearsOfExperience(foundationYear: number): number {
  const currentYear = new Date().getFullYear()
  return currentYear - foundationYear
}

const FOUNDATION_YEAR = 2017
const YEARS_EXPERIENCE = getYearsOfExperience(FOUNDATION_YEAR)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <ScrollReveal direction="right">
              <div>
                <ScrollReveal delay={100}>
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    Excelência em Soluções em TI
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={200}>
                  <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Transformamos <span className="text-blue-600">desafios</span> em <span className="text-blue-600">resultados</span>
                  </h1>
                </ScrollReveal>
                
                    <ScrollReveal delay={300}>
                      <p className="text-xl text-gray-600 mb-8">
                        Fundada em 2017, oferecemos soluções em tecnologia da informação para automatizar o dia a dia de empresas do mercado corporativo, incluindo CFTV e desenvolvimento de softwares.
                      </p>
                    </ScrollReveal>
                
                <ScrollReveal delay={400}>
                  <div className="flex flex-wrap gap-4 mb-12">
                    <Button size="lg" asChild>
                      <Link href="/contato">
                        Solicitar Orçamento
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/sobre">
                        <Play className="mr-2 h-5 w-5" />
                        Conheça Nossa História
                      </Link>
                    </Button>
                  </div>
                </ScrollReveal>

                {/* Features */}
                <ScrollReveal delay={500}>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="flex items-center gap-3 h-full">
                      <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">Atendimento Personalizado</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 h-full">
                      <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">Resultados Comprovados</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 h-full">
                      <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
                        <Shield className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">Suporte 24/7</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            {/* Right Image with Stats */}
            <ScrollReveal direction="left" delay={200}>
              <div className="relative">
                <div className="relative bg-gray-200 rounded-2xl overflow-visible h-[500px]">
                  {/* Imagem principal */}
                  <Image
                    src={getImagePath("/img/principal.jpeg")}
                    alt="Equipe JK SOLUÇÕES EM TI"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                  
                  {/* Stats Overlay - Top Right (overlapping and going outside) */}
                  <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-6 py-4 rounded-xl shadow-lg z-10">
                    <div className="text-3xl font-bold">{YEARS_EXPERIENCE}+</div>
                    <div className="text-sm leading-tight">Anos de<br />Mercado</div>
                  </div>

                  {/* Bottom Stats - Single white card with 3 sections overlapping bottom left */}
                  <div className="absolute -bottom-4 -left-4 z-10">
                    <Card className="shadow-lg">
                      <CardContent className="p-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <Users className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                            <div className="text-xl font-bold">500+</div>
                            <div className="text-[10px] text-gray-600 leading-tight">Clientes<br />Atendidos</div>
                          </div>
                          <div className="text-center">
                            <Award className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                            <div className="text-xl font-bold">{YEARS_EXPERIENCE}+</div>
                            <div className="text-[10px] text-gray-600 leading-tight">Anos de<br />Experiência</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <ScrollReveal delay={100}>
                <p className="text-blue-600 font-semibold mb-4">NOSSOS SERVIÇOS</p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <h2 className="text-4xl font-bold mb-4">
                  Soluções completas para <span className="text-blue-600">impulsionar seu</span><br /><span className="text-blue-600">negócio</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Confira o que há de melhor em soluções de tecnologia da informação (TI).
                </p>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Segurança Eletrônica', desc: 'Desenvolvimento, instalações e manutenções em projetos em CFTV.' },
              { icon: BarChart3, title: 'Processos Automatizados', desc: 'Em breve mais informações sobre esta modalidade.' },
              { icon: FileText, title: 'Software de Gerenciamento', desc: 'Em breve mais informações sobre esta modalidade.' },
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 flex-1">{service.desc}</p>
                    <Link href="/servicos" className="text-blue-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                      Saiba mais
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild>
                <Link href="/servicos">
                  Ver Todos os Serviços
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal direction="right">
              <div>
                <ScrollReveal delay={100}>
                  <p className="text-blue-400 font-semibold mb-4">POR QUE NOS ESCOLHER</p>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    A escolha certa para o <span className="text-blue-400">sucesso do seu negócio</span>
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <p className="text-xl text-white mb-8">
                    Visamos o desenvolvimento de tecnologias para automatizar o dia a dia da sua empresa.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className="space-y-4">
                    {[
                      'Desenvolvimento de tecnologias inovadoras',
                      'Automação de processos empresariais',
                      'Soluções personalizadas para sua empresa',
                      'Suporte técnico especializado',
                    ].map((item, index) => (
                      <ScrollReveal key={index} delay={500 + index * 100}>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                          <p className="text-white">{item}</p>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Award, title: 'Excelência Comprovada', desc: `Mais de ${YEARS_EXPERIENCE} anos de experiência em tecnologia da informação com resultados reconhecidos no mercado.` },
                  { icon: Users, title: 'Equipe Especializada', desc: 'Profissionais altamente qualificados e em constante atualização.' },
                  { icon: Shield, title: 'Segurança Total', desc: 'Seus dados protegidos com as mais avançadas tecnologias de segurança.' },
                  { icon: TrendingUp, title: 'Agilidade', desc: 'Processos otimizados para entregar resultados no menor tempo possível.' },
                  { icon: CheckCircle, title: 'Suporte Dedicado', desc: 'Atendimento personalizado e disponível quando você precisar.' },
                  { icon: BarChart3, title: 'Resultados Mensuráveis', desc: 'Métricas claras e relatórios detalhados do seu progresso.' },
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <Card className="bg-gray-800 border-gray-700 h-full flex flex-col">
                      <CardContent className="p-6 flex flex-col flex-1">
                        <div className="h-10 w-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 border border-blue-400/30 flex-shrink-0">
                          <item.icon className="h-5 w-5 text-blue-400" />
                        </div>
                        <h3 className="font-bold mb-2 text-white">{item.title}</h3>
                        <p className="text-sm text-gray-300 flex-1">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <ScrollReveal delay={100}>
                <p className="text-blue-600 font-semibold mb-4">DEPOIMENTOS</p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <h2 className="text-4xl font-bold text-gray-900">O que nossos clientes dizem</h2>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xl text-gray-700 mb-6 italic">
                      &quot;A parceria com a Empresa transformou completamente nossa gestão financeira. Os resultados superaram todas as expectativas.&quot;
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-lg">Carlos Silva</p>
                        <p className="text-gray-600">CEO - Tech Solutions</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal delay={100}>
                <h2 className="text-4xl font-bold mb-4">Pronto para transformar sua empresa?</h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl mb-8 text-blue-100">
                  Entre em contato hoje mesmo e descubra como podemos ajudar seu negócio a alcançar novos patamares de sucesso.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contato">
                      Fale com um Especialista
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600" asChild>
                    <a href="https://wa.me/5565999514408" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="flex items-center justify-center gap-2 text-blue-100">
                  <Phone className="h-5 w-5" />
                  <span>Ou ligue agora:</span>
                  <a href="tel:+5565999514408" className="font-semibold hover:text-white transition-colors">
                    (65) 99951-4408
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
