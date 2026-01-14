import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Clock, Lock } from 'lucide-react'
import Link from 'next/link'

export default function AreaDoClientePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-12 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center">
                    <Lock className="h-10 w-10 text-blue-600" />
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Área do Cliente
                </h1>
                
                <div className="mb-6 flex items-center justify-center gap-2 text-blue-600">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">Em Desenvolvimento</span>
                </div>
                
                <p className="text-lg text-gray-600 mb-8">
                  Estamos trabalhando para oferecer a melhor experiência na Área do Cliente. 
                  Em breve você poderá acessar seus boletos, documentos e muito mais.
                </p>
                
                <p className="text-gray-600 mb-8">
                  Enquanto isso, entre em contato conosco através dos nossos canais de atendimento 
                  para qualquer dúvida ou solicitação.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/contato">Fale Conosco</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Voltar ao Início
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}



