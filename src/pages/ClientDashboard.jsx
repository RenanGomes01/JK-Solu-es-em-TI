import React from 'react';
import Navbar from '@/components/institutional/Navbar';
import Footer from '@/components/institutional/Footer';
import Reveal from '@/components/common/Reveal';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-10 h-10 text-blue-600" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                Área do <span className="text-blue-600">Cliente</span>
              </h1>
              <p className="text-xl text-slate-600">
                Acesso exclusivo para clientes da JK Soluções em TI
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12 text-center">
              <p className="text-slate-700 mb-8 leading-relaxed">
                Esta área está em desenvolvimento. Em breve você terá acesso a relatórios, documentos
                e ferramentas exclusivas para gerenciar seus projetos conosco.
              </p>
              <p className="text-slate-600 mb-8">
                Para acessar sua área do cliente, entre em contato conosco através do e-mail ou telefone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <a href="/contact">Fale Conosco</a>
                </Button>
                <Button variant="outline" className="border-slate-300">
                  <a href="mailto:contato@jksolucoes.com.br">Enviar E-mail</a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}

