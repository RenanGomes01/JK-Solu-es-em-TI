import React from 'react';
import { Shield, Users, Zap, Trophy, CheckCircle } from 'lucide-react';
import Reveal from '@/components/common/Reveal';

const cards = [
  {
    icon: Trophy,
    title: 'Excelência Comprovada',
    description: 'Mais de 15 anos de experiência com resultados reconhecidos.',
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Profissionais altamente qualificados e em constante atualização.',
  },
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'Dados protegidos com tecnologias avançadas de segurança.',
  },
  {
    icon: Zap,
    title: 'Agilidade',
    description: 'Processos otimizados para entregar resultados no menor tempo.',
  },
];

const bullets = [
  'Metodologia própria desenvolvida ao longo de 15 anos',
  'Mais de 500 empresas atendidas com sucesso',
  'Taxa de satisfação superior a 99%',
  'Certificações e prêmios de excelência',
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 py-24">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div className="space-y-5">
            <Reveal delay={0.1}>
              <p className="text-blue-300 font-semibold uppercase tracking-wide">Por que nos escolher</p>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                A escolha certa para o sucesso do seu negócio
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg text-slate-300 leading-relaxed">
                Combinamos experiência, tecnologia e dedicação para oferecer soluções que realmente fazem a
                diferença nos resultados da sua empresa.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {bullets.map((item, index) => (
                  <Reveal key={item} delay={0.5 + index * 0.1}>
                    <div className="flex items-start gap-3 text-slate-200">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <Reveal key={card.title} delay={0.2 + index * 0.1}>
                <div className="rounded-2xl bg-white/8 backdrop-blur border border-white/10 p-6 text-white shadow-[0_20px_60px_-24px_rgba(0,0,0,0.45)]">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-4">
                    <card.icon className="w-6 h-6 text-blue-200" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-slate-200 text-sm leading-relaxed">{card.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

