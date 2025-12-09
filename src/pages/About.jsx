import React from 'react';
import Navbar from '@/components/institutional/Navbar';
import Footer from '@/components/institutional/Footer';
import Reveal from '@/components/common/Reveal';
import { Target, Eye, Heart, HeartHandshake, Award, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Dark Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24 lg:py-32">
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal delay={0.1}>
            <p className="text-blue-400 font-semibold uppercase tracking-wide mb-4">SOBRE NÓS</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Construindo o futuro das{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                empresas brasileiras
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Há mais de 15 anos, somos parceiros estratégicos de empresas que buscam crescimento
              sustentável e resultados excepcionais.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story Section - Image Left, Text Right */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop"
                  alt="Equipe trabalhando"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                  Uma história de compromisso e resultados
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Fundada em 2008, a JK Soluções em TI nasceu com o propósito de oferecer soluções
                  empresariais de alta qualidade para empresas de todos os portes. Nossa jornada foi
                  construída sobre pilares sólidos de conhecimento, inovação e resultados.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Ao longo dos anos, expandimos nossas operações e consolidamos nossa posição como
                  referência no mercado. Hoje, contamos com uma equipe multidisciplinar de
                  especialistas dedicados a transformar desafios em oportunidades para nossos
                  clientes.
                </p>
                <div className="flex gap-8 pt-4">
                  <div className="bg-blue-50 rounded-2xl px-6 py-4">
                    <p className="text-4xl font-bold text-blue-600 mb-1">500+</p>
                    <p className="text-sm text-slate-600">Clientes Atendidos</p>
                  </div>
                  <div className="bg-blue-50 rounded-2xl px-6 py-4">
                    <p className="text-4xl font-bold text-blue-600 mb-1">15+</p>
                    <p className="text-sm text-slate-600">Anos de Experiência</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Missão</h3>
                <p className="text-slate-600 leading-relaxed">
                  Oferecer soluções empresariais inovadoras e personalizadas, contribuindo para o
                  crescimento sustentável dos nossos clientes.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Visão</h3>
                <p className="text-slate-600 leading-relaxed">
                  Ser reconhecida como a principal referência em consultoria empresarial, sinônimo
                  de excelência e resultados.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Valores</h3>
                <p className="text-slate-600 leading-relaxed">
                  Integridade, excelência, inovação, colaboração e compromisso com resultados guiam
                  todas as nossas ações.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-16">
              Nossos Valores
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: HeartHandshake,
                title: 'Integridade',
                description: 'Atuamos com ética e transparência em todas as relações.',
              },
              {
                icon: Award,
                title: 'Excelência',
                description: 'Buscamos a perfeição em cada projeto e entrega.',
              },
              {
                icon: Users,
                title: 'Colaboração',
                description: 'Trabalhamos em parceria com nossos clientes.',
              },
              {
                icon: TrendingUp,
                title: 'Inovação',
                description: 'Investimos constantemente em novas soluções.',
              },
            ].map((value, index) => (
              <Reveal key={value.title} delay={0.1 + index * 0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Nossa Trajetória
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Uma jornada de crescimento, aprendizado e conquistas ao lado de nossos clientes.
              </p>
            </div>
          </Reveal>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-16 md:space-y-20">
              {[
                {
                  year: '2008',
                  title: 'Fundação',
                  description: 'Início das operações com foco em consultoria financeira.',
                  side: 'left',
                },
                {
                  year: '2012',
                  title: 'Expansão',
                  description: 'Ampliação dos serviços para assessoria jurídica e compliance.',
                  side: 'right',
                },
                {
                  year: '2016',
                  title: 'Reconhecimento',
                  description: 'Prêmio de melhor consultoria empresarial da região.',
                  side: 'left',
                },
                {
                  year: '2020',
                  title: 'Digitalização',
                  description: 'Lançamento da plataforma digital para clientes.',
                  side: 'right',
                },
                {
                  year: '2024',
                  title: 'Liderança',
                  description: 'Mais de 500 empresas atendidas e em expansão nacional.',
                  side: 'left',
                },
              ].map((item, index) => (
                <Reveal key={item.year} delay={0.1 + index * 0.1}>
                  <div className="relative flex items-center">
                    {/* Left Side Card */}
                    {item.side === 'left' && (
                      <>
                        <div className="w-full md:w-[45%] bg-white rounded-2xl p-6 shadow-lg text-left md:text-right lg:text-left">
                          <p className="text-blue-600 font-bold text-lg mb-2">{item.year}</p>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                          <p className="text-slate-600">{item.description}</p>
                        </div>
                        {/* Spacer */}
                        <div className="hidden md:block w-[10%] flex-shrink-0" />
                        {/* Timeline Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 hidden md:block" />
                        {/* Right Side Empty */}
                        <div className="hidden md:block w-[45%] flex-shrink-0" />
                      </>
                    )}
                    {/* Right Side Card */}
                    {item.side === 'right' && (
                      <>
                        {/* Left Side Empty */}
                        <div className="hidden md:block w-[45%] flex-shrink-0" />
                        {/* Spacer */}
                        <div className="hidden md:block w-[10%] flex-shrink-0" />
                        {/* Timeline Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 hidden md:block" />
                        <div className="w-full md:w-[45%] bg-white rounded-2xl p-6 shadow-lg text-left">
                          <p className="text-blue-600 font-bold text-lg mb-2">{item.year}</p>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                          <p className="text-slate-600">{item.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
