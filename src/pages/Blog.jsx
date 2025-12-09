import React from 'react';
import Navbar from '@/components/institutional/Navbar';
import Footer from '@/components/institutional/Footer';
import Reveal from '@/components/common/Reveal';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: 'Como a Transformação Digital Impacta Pequenas Empresas',
    excerpt:
      'Descubra como pequenas empresas podem se beneficiar da transformação digital e quais são os primeiros passos para começar.',
    date: '15 de Janeiro, 2025',
    readTime: '5 min de leitura',
    category: 'Transformação Digital',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'LGPD: Tudo o que sua empresa precisa saber',
    excerpt:
      'Guia completo sobre a Lei Geral de Proteção de Dados e como garantir a conformidade da sua empresa.',
    date: '10 de Janeiro, 2025',
    readTime: '8 min de leitura',
    category: 'Compliance',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: '5 Tendências de TI para 2025',
    excerpt:
      'As principais tendências tecnológicas que vão moldar o mercado empresarial neste ano.',
    date: '5 de Janeiro, 2025',
    readTime: '6 min de leitura',
    category: 'Tendências',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Gestão Financeira: Dicas para Otimizar seus Processos',
    excerpt:
      'Aprenda estratégias práticas para melhorar a gestão financeira da sua empresa e aumentar a lucratividade.',
    date: '28 de Dezembro, 2024',
    readTime: '7 min de leitura',
    category: 'Gestão',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Cloud Computing: Benefícios para Empresas',
    excerpt:
      'Entenda como a computação em nuvem pode reduzir custos e aumentar a eficiência operacional da sua empresa.',
    date: '20 de Dezembro, 2024',
    readTime: '6 min de leitura',
    category: 'Tecnologia',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Segurança da Informação: Proteja seus Dados',
    excerpt:
      'Conheça as melhores práticas para proteger os dados da sua empresa contra ameaças cibernéticas.',
    date: '15 de Dezembro, 2024',
    readTime: '9 min de leitura',
    category: 'Segurança',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80&auto=format&fit=crop',
  },
];

export default function Blog() {
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
              <p className="text-blue-400 font-semibold uppercase tracking-wide mb-4">BLOG</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Artigos e{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Insights
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Conteúdo exclusivo sobre tecnologia, gestão e inovação empresarial para impulsionar seu negócio.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Reveal key={post.title} delay={0.1 + index * 0.1}>
                <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white text-blue-700 text-xs font-semibold rounded-full shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <button className="inline-flex items-center text-blue-600 font-semibold gap-2 hover:gap-3 transition-all">
                      Ler mais
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Receba nossos conteúdos exclusivos
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Cadastre-se para receber artigos, dicas e novidades diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-6 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                Inscrever-se
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
