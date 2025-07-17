"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  Sun,
  Moon,
  CarIcon,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTheme } from "@/contexts/theme-context"

export default function ContatoPage() {
  const { isDark, toggleTheme } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "geral",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        interest: "geral",
      })
    }, 3000)
  }

  const generateWhatsAppMessage = () => {
    const message = `Olá! Meu nome é ${formData.name}. ${formData.message || "Gostaria de mais informações sobre os veículos disponíveis."}`
    return `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 9999-9999",
      action: "tel:+5511999999999",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(11) 9999-9999",
      action: "https://wa.me/5511999999999",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@autoprime.com.br",
      action: "mailto:contato@autoprime.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
      action: "https://maps.google.com",
    },
  ]

  const businessHours = [
    { day: "Segunda a Sexta", hours: "08:00 - 18:00" },
    { day: "Sábado", hours: "08:00 - 16:00" },
    { day: "Domingo", hours: "Fechado" },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-gray-900" : "bg-gray-50"}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <CarIcon className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">AutoPrime Veículos</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Estoque
            </Link>
            <span className="text-blue-600 dark:text-blue-400 font-medium">Contato</span>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300"
            aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Estamos aqui para ajudar você a encontrar o carro dos seus sonhos. Fale conosco!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Envie sua Mensagem</CardTitle>
                <p className="text-gray-600 dark:text-gray-400">
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Mensagem Enviada com Sucesso!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">Obrigado pelo contato. Retornaremos em breve!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                          Nome Completo *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                          E-mail *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
                          Telefone *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <Label htmlFor="interest" className="text-gray-700 dark:text-gray-300">
                          Interesse
                        </Label>
                        <Select
                          value={formData.interest}
                          onValueChange={(value) => handleSelectChange("interest", value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="geral">Informações Gerais</SelectItem>
                            <SelectItem value="compra">Compra de Veículo</SelectItem>
                            <SelectItem value="venda">Venda de Veículo</SelectItem>
                            <SelectItem value="financiamento">Financiamento</SelectItem>
                            <SelectItem value="test-drive">Agendamento Test Drive</SelectItem>
                            <SelectItem value="manutencao">Manutenção</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">
                        Assunto
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Assunto da sua mensagem"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                        Mensagem *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1 min-h-[120px]"
                        placeholder="Descreva como podemos ajudá-lo..."
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-600 hover:bg-blue-700 sm:flex-1 min-h-[48px] py-3 px-6"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Enviar Mensagem
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="sm:flex-1 bg-green-600 hover:bg-green-700 text-white border-green-600 min-h-[48px] py-3 px-6"
                        onClick={() => window.open(generateWhatsAppMessage(), "_blank")}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                      <info.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{info.title}</h3>
                      <a
                        href={info.action}
                        target={info.action.startsWith("http") ? "_blank" : undefined}
                        rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">{schedule.day}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 min-h-[48px] py-3"
                  onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Falar no WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent min-h-[48px] py-3"
                  onClick={() => window.open("tel:+5511999999999")}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar Agora
                </Button>
                <Link href="/">
                  <Button variant="outline" className="w-full bg-transparent min-h-[48px] py-3">
                    <CarIcon className="h-4 w-4 mr-2" />
                    Ver Estoque
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Nossa Localização
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-400">
                Venha nos visitar! Estamos localizados no coração de São Paulo.
              </p>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 dark:text-gray-400">Mapa Interativo</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Av. Paulista, 1000 - Bela Vista, São Paulo - SP
                  </p>
                  <Button className="mt-4" onClick={() => window.open("https://maps.google.com", "_blank")}>
                    Abrir no Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
