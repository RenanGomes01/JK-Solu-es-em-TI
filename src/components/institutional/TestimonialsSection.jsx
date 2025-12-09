import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import Reveal from '@/components/common/Reveal';

const testimonials = [
  {
    name: 'Ana Santos',
    position: 'Diretora Financeira - Innova Ltda',
    text: 'Profissionalismo impecável e resultados excepcionais. A equipe da JK Soluções em TI demonstrou expertise em cada etapa do projeto. Recomendo sem hesitação.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&auto=format&fit=crop',
  },
  {
    name: 'Carlos Silva',
    position: 'CEO - Tech Solutions',
    text: 'A parceria com a JK Soluções em TI transformou nossa gestão financeira. Resultados acima das expectativas e suporte dedicado.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=120&q=80&auto=format&fit=crop',
  },
  {
    name: 'Mariana Costa',
    position: 'COO - Global Trade',
    text: 'Planejamento estratégico assertivo e execução ágil. Sentimos segurança em cada decisão tomada com a consultoria da JK Soluções em TI.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&q=80&auto=format&fit=crop',
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal delay={0.1}>
          <p className="text-blue-600 font-semibold uppercase mb-3 tracking-wide">Depoimentos</p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
            O que nossos <span className="text-blue-600">clientes dizem</span>
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="bg-white rounded-[32px] shadow-[0_35px_90px_-50px_rgba(0,0,0,0.35)] p-10 md:p-14 relative overflow-hidden text-left">
          <Quote className="w-16 h-16 text-blue-100 absolute left-8 top-10" />

          <p className="text-xl md:text-2xl text-slate-800 leading-relaxed mb-10 max-w-4xl pl-16 pt-2">
            "{testimonial.text}"
          </p>

          <div className="flex items-center gap-3">
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
              <p className="text-slate-600 text-sm">{testimonial.position}</p>
            </div>
          </div>

          <div className="flex items-center gap-1 absolute bottom-10 right-10">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <div className="flex gap-2 absolute bottom-10 left-10">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${i === index ? 'w-6 bg-blue-600' : 'bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

