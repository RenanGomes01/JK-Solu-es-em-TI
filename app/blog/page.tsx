import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollReveal } from '@/components/animations/scroll-reveal'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-700 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal delay={100}>
                <p className="text-blue-200 font-semibold mb-4 text-sm uppercase tracking-wider">BLOG</p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Artigos e Conteúdos
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Fique por dentro das últimas novidades e tendências do mercado empresarial.
                </p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <Card>
                <CardContent className="p-8">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Em Breve</h2>
                    <p className="text-gray-600">
                      Estamos preparando conteúdos exclusivos para você. Em breve você encontrará artigos, dicas e novidades aqui.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

