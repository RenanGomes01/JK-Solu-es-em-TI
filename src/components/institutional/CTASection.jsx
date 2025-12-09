import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';
import Reveal from '@/components/common/Reveal';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-700 py-20">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pronto para transformar sua empresa?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-blue-100 mb-10">
            Entre em contato hoje mesmo e descubra como podemos ajudar seu negócio a alcançar novos
            patamares de sucesso.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to={createPageUrl('Contact')}>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-7 py-3 font-bold text-base transition-all">
              Fale com a JK Soluções em TI
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <a href="tel:+5511999999999" className="inline-flex">
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-7 py-3 font-bold text-base transition-all">
              <Phone className="w-5 h-5 mr-2" />
              (11) 99999-9999
            </Button>
          </a>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

