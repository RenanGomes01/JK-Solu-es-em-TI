'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { Phone, Clock, Send, MapPin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })

  const [errors, setErrors] = useState({
    email: '',
    telefone: ''
  })

  // Função para validar email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Função para validar telefone brasileiro
  const validatePhone = (phone: string): boolean => {
    // Remove caracteres não numéricos
    const cleanPhone = phone.replace(/\D/g, '')
    // Aceita telefone com DDD (10 ou 11 dígitos)
    return cleanPhone.length >= 10 && cleanPhone.length <= 11
  }

  // Função para formatar telefone
  const formatPhone = (value: string): string => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '')
    
    // Aplica a máscara
    if (numbers.length <= 2) {
      return numbers
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validação
    const newErrors = {
      email: '',
      telefone: ''
    }

    let hasErrors = false

    // Valida email
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório'
      hasErrors = true
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido'
      hasErrors = true
    }

    // Valida telefone (se preenchido)
    if (formData.telefone && !validatePhone(formData.telefone)) {
      newErrors.telefone = 'Telefone inválido. Use o formato (XX) XXXXX-XXXX'
      hasErrors = true
    }

    setErrors(newErrors)

    if (hasErrors) {
      return
    }
    
    // Prepara o email com os dados do formulário
    const subject = encodeURIComponent(`Contato do Site - ${formData.assunto || 'Sem assunto'}`)
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.telefone || 'Não informado'}\n` +
      `Assunto: ${formData.assunto || 'Não informado'}\n\n` +
      `Mensagem:\n${formData.mensagem}`
    )
    
    // Abre o cliente de email padrão com os dados preenchidos
    window.location.href = `mailto:jksolucoesemti@gmail.com.br?subject=${subject}&body=${body}`
    
    // Limpa o formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    })
    
    // Limpa os erros
    setErrors({
      email: '',
      telefone: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    // Formata telefone enquanto digita
    if (name === 'telefone') {
      const formatted = formatPhone(value)
      setFormData({
        ...formData,
        [name]: formatted
      })
      
      // Limpa erro se telefone estiver válido
      if (formatted && validatePhone(formatted)) {
        setErrors({
          ...errors,
          telefone: ''
        })
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
      
      // Valida email em tempo real
      if (name === 'email') {
        if (value && !validateEmail(value)) {
          setErrors({
            ...errors,
            email: 'Email inválido'
          })
        } else {
          setErrors({
            ...errors,
            email: ''
          })
        }
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl">
              <ScrollReveal delay={100}>
                <p className="text-blue-400 font-semibold mb-4 text-sm uppercase tracking-wider">CONTATO</p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Vamos conversar sobre seu <span className="text-blue-400">projeto</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-xl text-white max-w-2xl">
                  Entre em contato conosco. Estamos prontos para ajudar sua empresa a alcançar novos patamares de sucesso.
                </p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                  
                  <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Endereço</h3>
                  <p className="text-gray-600">
                    Rua A, 68 - Porto<br />
                    Cuiabá - MT, 78.025-569
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefone</h3>
                  <a href="tel:+5565999514408" className="text-blue-600 hover:underline block">
                    (65) 99951-4408
                  </a>
                  <a href="tel:+5565996297106" className="text-blue-600 hover:underline block">
                    (65) 99629-7106
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">E-mail</h3>
                  <a href="mailto:jksolucoesemti@gmail.com.br" className="text-blue-600 hover:underline">
                    jksolucoesemti@gmail.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Horário de Atendimento</h3>
                  <p className="text-gray-600">Segunda à Sexta: 07:30 - 18:00</p>
                </div>
              </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium mb-2">
                      Nome *
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'border-red-500' : ''}
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium mb-2">
                      Telefone
                    </label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={handleChange}
                      className={errors.telefone ? 'border-red-500' : ''}
                      placeholder="(65) 99999-9999"
                      maxLength={15}
                    />
                    {errors.telefone && (
                      <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium mb-2">
                      Assunto *
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      required
                      value={formData.assunto}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="consultoria">Consultoria</option>
                      <option value="orcamento">Solicitar Orçamento</option>
                      <option value="duvidas">Dúvidas</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows={5}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}


