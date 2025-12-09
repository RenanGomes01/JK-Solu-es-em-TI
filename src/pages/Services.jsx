import React from 'react';
import Navbar from '@/components/institutional/Navbar';
import Footer from '@/components/institutional/Footer';
import Reveal from '@/components/common/Reveal';
import { Briefcase, LineChart, Scale, Target, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';

const allServices = [
  {
    icon: Briefcase,
    title: 'Consultoria Empresarial',
    description:
      'Análise completa do negócio com estratégias personalizadas para crescimento sustentável.',
    color: 'bg-blue-100 text-blue-700',
    details: [
      'Análise de processos e fluxos de trabalho',
      'Identificação de oportunidades de melhoria',
      'Planejamento estratégico de TI',
      'Otimização de recursos tecnológicos',
    ],
  },
  {
    icon: LineChart,
    title: 'Gestão Financeira',
    description: 'Controle financeiro, relatórios e planejamento para decisões seguras.',
    color: 'bg-green-100 text-green-700',
    details: [
      'Sistemas de gestão financeira',
      'Relatórios e dashboards personalizados',
      'Planejamento orçamentário',
      'Análise de indicadores financeiros',
    ],
  },
  {
    icon: Scale,
    title: 'Assessoria Jurídica',
    description: 'Proteção dos interesses empresariais com suporte jurídico especializado.',
    color: 'bg-purple-100 text-purple-700',
    details: [
      'Consultoria em contratos tecnológicos',
      'LGPD e compliance digital',
      'Proteção de dados',
      'Assessoria em licitações',
    ],
  },
  {
    icon: Target,
    title: 'Planejamento Estratégico',
    description: 'Metas claras e planos de ação para atingir objetivos de negócio.',
    color: 'bg-orange-100 text-orange-700',
    details: [
      'Definição de objetivos estratégicos',
      'Roadmap de implementação',
      'Gestão de projetos',
      'Acompanhamento de resultados',
    ],
  },
  {
    icon: Users,
    title: 'Gestão de Pessoas',
    description: 'RH estratégico para atrair, desenvolver e reter os melhores talentos.',
    color: 'bg-pink-100 text-pink-700',
    details: [
      'Sistemas de gestão de RH',
      'Recrutamento e seleção',
      'Treinamento e desenvolvimento',
      'Gestão de performance',
    ],
  },
  {
    icon: Award,
    title: 'Compliance',
    description: 'Conformidade com normas e regulamentos para segurança e credibilidade.',
    color: 'bg-indigo-100 text-indigo-700',
    details: [
      'Auditoria de processos',
      'Conformidade regulatória',
      'Certificações e normas',
      'Gestão de riscos',
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
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
            <div className="text-center">
              <p className="text-blue-400 font-semibold uppercase tracking-wide mb-4">NOSSOS SERVIÇOS</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Soluções completas para{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  impulsionar seu negócio
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Oferecemos uma gama completa de serviços especializados para atender todas as necessidades da sua empresa com excelência e profissionalismo.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <Reveal key={service.title} delay={0.1 + index * 0.1}>
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={createPageUrl('Contact')}
                    className="inline-flex items-center text-blue-600 font-semibold gap-2 hover:gap-3 transition-all mt-auto"
                  >
                    Saiba mais
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Pronto para transformar sua empresa?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
              Entre em contato e descubra como nossos serviços podem impulsionar o crescimento do seu negócio.
            </p>
            <a href={createPageUrl('Contact')}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
