import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, LineChart, Scale, Target, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';
import Reveal from '@/components/common/Reveal';

const services = [
  {
    icon: Briefcase,
    title: 'Consultoria Empresarial',
    description: 'Análise completa do negócio com estratégias personalizadas para crescimento sustentável.',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: LineChart,
    title: 'Gestão Financeira',
    description: 'Controle financeiro, relatórios e planejamento para decisões seguras.',
    color: 'bg-green-100 text-green-700',
  },
  {
    icon: Scale,
    title: 'Assessoria Jurídica',
    description: 'Proteção dos interesses empresariais com suporte jurídico especializado.',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    icon: Target,
    title: 'Planejamento Estratégico',
    description: 'Metas claras e planos de ação para atingir objetivos de negócio.',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    icon: Users,
    title: 'Gestão de Pessoas',
    description: 'RH estratégico para atrair, desenvolver e reter os melhores talentos.',
    color: 'bg-pink-100 text-pink-700',
  },
  {
    icon: Award,
    title: 'Compliance',
    description: 'Conformidade com normas e regulamentos para segurança e credibilidade.',
    color: 'bg-indigo-100 text-indigo-700',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal delay={0.1}>
          <div className="text-center mb-16 space-y-4">
            <p className="text-blue-600 font-semibold uppercase tracking-wide">Nossos Serviços</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Soluções completas para{' '}
              <span className="text-blue-600">impulsionar seu negócio</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Oferecemos uma gama completa de serviços especializados para atender todas as necessidades da sua
              empresa com excelência e profissionalismo.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={0.1 + index * 0.1}>
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to={createPageUrl('Services')}
                  className="inline-flex items-center text-blue-600 font-semibold gap-2 hover:gap-3 transition-all"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <Link to={createPageUrl('Services')}>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Ver Todos os Serviços
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

