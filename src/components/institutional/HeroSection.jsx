import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';
import Reveal from '@/components/common/Reveal';
import logo from '../../../img/logo.png.png';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-14 items-center">
          <div className="space-y-8">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold shadow-sm">
                <img src={logo} alt="JK Soluções em TI" className="w-6 h-6 object-contain rounded" />
                Excelência em Soluções de TI
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Transformamos <span className="text-blue-600">desafios</span> em{' '}
                  <span className="text-blue-600">resultados</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                  Há mais de 15 anos ajudando empresas a alcançarem seu máximo potencial com soluções
                  personalizadas, tecnologia de ponta e uma equipe dedicada ao seu sucesso.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl('Contact')}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 px-6 py-3 text-base">
                    Solicitar Orçamento
                  </Button>
                </Link>
                <Link to={createPageUrl('About')}>
                  <Button
                    variant="outline"
                    className="px-6 py-3 text-base border-slate-200 text-slate-800 hover:border-blue-600 hover:text-blue-600"
                  >
                    Conheça Nossa História
                  </Button>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Atendimento Personalizado
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Resultados Comprovados
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl lg:ml-6">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop"
                  alt="Equipe comemorando"
                  className="w-full h-full object-cover min-h-[360px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <Reveal delay={0.5}>
                <div className="absolute -top-12 right-0 lg:right-4 bg-blue-600 text-white px-6 py-5 rounded-3xl shadow-2xl shadow-blue-500/30 text-center min-w-[150px]">
                  <p className="text-3xl font-bold leading-none">15+</p>
                  <p className="text-sm font-semibold opacity-95 mt-1">Anos de Mercado</p>
                </div>
              </Reveal>
              <Reveal delay={0.6}>
                <div className="absolute -bottom-16 left-0 right-0 lg:-left-8 lg:right-auto">
                  <div className="bg-white rounded-2xl shadow-[0_25px_80px_-40px_rgba(0,0,0,0.45)] px-6 sm:px-8 py-5 grid grid-cols-3 gap-0 max-w-2xl">
                    {[
                      { icon: Users, value: '500+', label: 'Clientes Atendidos' },
                      { icon: Award, value: '15+', label: 'Anos de Experiência' },
                      { icon: Shield, value: '99%', label: 'Satisfação' },
                    ].map((item, idx) => (
                      <div
                        key={item.label}
                        className={`flex flex-col items-center text-center ${idx < 2 ? 'border-r border-slate-200' : ''}`}
                      >
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2 text-blue-600">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <p className="text-3xl font-bold text-slate-900 leading-tight">{item.value}</p>
                        <p className="text-sm text-slate-500">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


