"use client"

import { use, useState } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  Sun,
  Moon,
  CarIcon,
  Fuel,
  Calendar,
  Settings,
  Palette,
  DoorOpen,
  Check,
  Calculator,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getCarBySlug, getRelatedCars } from "@/lib/cars-data"
import { useTheme } from "@/contexts/theme-context"

interface CarDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function CarDetailPage({ params }: CarDetailPageProps) {
  const resolvedParams = use(params)
  const { isDark, toggleTheme } = useTheme()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [financingData, setFinancingData] = useState({
    downPayment: 20000,
    installments: 48,
    interestRate: 1.2,
  })

  const car = getCarBySlug(resolvedParams.slug)

  if (!car) {
    notFound()
  }

  const relatedCars = getRelatedCars(car.id, car.brand)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat("pt-BR").format(mileage) + " km"
  }

  const calculateFinancing = () => {
    const principal = car.price - financingData.downPayment
    const monthlyRate = financingData.interestRate / 100
    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, financingData.installments)) /
      (Math.pow(1 + monthlyRate, financingData.installments) - 1)
    const totalAmount = monthlyPayment * financingData.installments + financingData.downPayment

    return {
      monthlyPayment,
      totalAmount,
      totalInterest: totalAmount - car.price,
    }
  }

  const financing = calculateFinancing()

  const generateWhatsAppMessage = () => {
    const message = `Olá! Tenho interesse no ${car.brand} ${car.model} ${car.year} por ${formatPrice(car.price)}. Gostaria de mais informações!`
    return `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
  }

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

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/" className="hover:text-blue-600">
            Estoque
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white">
            {car.brand} {car.model}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
              <img
                src={car.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {car.year}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {car.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative overflow-hidden rounded-lg ${
                    currentImageIndex === index ? "ring-2 ring-blue-600" : ""
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${car.brand} ${car.model} - ${index + 1}`}
                    className="w-full h-20 object-cover hover:opacity-80 transition-opacity"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Car Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {car.brand} {car.model}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{car.description}</p>
              <div className="text-4xl font-bold text-blue-600 mb-6">{formatPrice(car.price)}</div>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Calendar className="h-5 w-5" />
                <span>{car.year}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <CarIcon className="h-5 w-5" />
                <span>{formatMileage(car.mileage)}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Fuel className="h-5 w-5" />
                <span>{car.fuel}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Settings className="h-5 w-5" />
                <span>{car.transmission}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Palette className="h-5 w-5" />
                <span>{car.color}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <DoorOpen className="h-5 w-5" />
                <span>{car.doors} portas</span>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 sm:flex-1 min-h-[48px] py-3 px-6"
                onClick={() => window.open(generateWhatsAppMessage(), "_blank")}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="sm:flex-1 bg-transparent min-h-[48px] py-3 px-6">
                <Phone className="h-5 w-5 mr-2" />
                (11) 9999-9999
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Specifications */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Especificações Técnicas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-600 dark:text-gray-400">Motor</Label>
                    <p className="font-semibold text-gray-900 dark:text-white">{car.engine}</p>
                  </div>
                  <div>
                    <Label className="text-gray-600 dark:text-gray-400">Transmissão</Label>
                    <p className="font-semibold text-gray-900 dark:text-white">{car.transmission}</p>
                  </div>
                  <div>
                    <Label className="text-gray-600 dark:text-gray-400">Combustível</Label>
                    <p className="font-semibold text-gray-900 dark:text-white">{car.fuel}</p>
                  </div>
                  <div>
                    <Label className="text-gray-600 dark:text-gray-400">Cor</Label>
                    <p className="font-semibold text-gray-900 dark:text-white">{car.color}</p>
                  </div>
                  <div>
                    <Label className="text-gray-600 dark:text-gray-400">Portas</Label>
                    <p className="font-semibold text-gray-900 dark:text-white">{car.doors}</p>
                  </div>
                  <div>
                    <Label className="text-gray-600 dark:text-gray-400">Quilometragem</Label>
                    <p className="font-semibold text-gray-900 dark:text-white">{formatMileage(car.mileage)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Equipamentos e Opcionais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-gray-900 dark:text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Financing Simulator */}
          <div>
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-8">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Simulador de Financiamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="downPayment" className="text-gray-600 dark:text-gray-400">
                    Entrada
                  </Label>
                  <Input
                    id="downPayment"
                    type="number"
                    value={financingData.downPayment}
                    onChange={(e) => setFinancingData({ ...financingData, downPayment: Number(e.target.value) })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="installments" className="text-gray-600 dark:text-gray-400">
                    Parcelas
                  </Label>
                  <Select
                    value={financingData.installments.toString()}
                    onValueChange={(value) => setFinancingData({ ...financingData, installments: Number(value) })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">12x</SelectItem>
                      <SelectItem value="24">24x</SelectItem>
                      <SelectItem value="36">36x</SelectItem>
                      <SelectItem value="48">48x</SelectItem>
                      <SelectItem value="60">60x</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="interestRate" className="text-gray-600 dark:text-gray-400">
                    Taxa de Juros (% a.m.)
                  </Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.1"
                    value={financingData.interestRate}
                    onChange={(e) => setFinancingData({ ...financingData, interestRate: Number(e.target.value) })}
                    className="mt-1"
                  />
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Valor financiado:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {formatPrice(car.price - financingData.downPayment)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Parcela mensal:</span>
                    <span className="font-semibold text-blue-600 text-lg">{formatPrice(financing.monthlyPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Total a pagar:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {formatPrice(financing.totalAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Total de juros:</span>
                    <span className="font-semibold text-red-600">{formatPrice(financing.totalInterest)}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open(generateWhatsAppMessage(), "_blank")}
                >
                  Solicitar Proposta
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Outros veículos da {car.brand}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCars.map((relatedCar) => (
                <Card
                  key={relatedCar.id}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={relatedCar.image || "/placeholder.svg"}
                        alt={`${relatedCar.brand} ${relatedCar.model}`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {relatedCar.year}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {relatedCar.brand} {relatedCar.model}
                      </h3>

                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {relatedCar.year}
                        </div>
                        <div className="flex items-center gap-1">
                          <CarIcon className="h-4 w-4" />
                          {formatMileage(relatedCar.mileage)}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-blue-600">{formatPrice(relatedCar.price)}</div>
                      </div>

                      <Link href={`/carros/${relatedCar.slug}`}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Ver Detalhes</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
