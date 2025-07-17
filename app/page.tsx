"use client"

import { useState, useMemo } from "react"
import { Search, Phone, MessageCircle, Sun, Moon, Car, Fuel, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"
import { useTheme } from "@/contexts/theme-context"

import { carsData as mockCars } from "@/lib/cars-data"

const brands = [
  "Toyota",
  "Honda",
  "Ford",
  "BMW",
  "Mercedes",
  "Tesla",
  "Audi",
  "Volkswagen",
  "Hyundai",
  "Nissan",
  "Chevrolet",
  "Jeep",
]
const fuelTypes = ["Gasolina", "Diesel", "Elétrico", "Híbrido"]

export default function AutoPrimeLanding() {
  const { isDark, toggleTheme } = useTheme()
  const [filters, setFilters] = useState({
    brand: "all",
    model: "",
    yearFrom: 2010,
    yearTo: 2025,
    priceRange: [0, 1000000],
    fuel: "all",
  })

  const filteredCars = useMemo(() => {
    return mockCars.filter((car) => {
      return (
        (filters.brand === "all" || car.brand === filters.brand) &&
        (!filters.model || car.model.toLowerCase().includes(filters.model.toLowerCase())) &&
        car.year >= filters.yearFrom &&
        car.year <= filters.yearTo &&
        car.price >= filters.priceRange[0] &&
        car.price <= filters.priceRange[1] &&
        (filters.fuel === "all" || car.fuel === filters.fuel)
      )
    })
  }, [filters])

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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-gray-900" : "bg-gray-50"}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">AutoPrime Veículos</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Estoque
            </a>
            <Link
              href="/contato"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contato
            </Link>
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Encontre o carro dos seus sonhos</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">Estoque atualizado, condições imperdíveis!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Ver Estoque
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Falar com Vendedor
            </Button>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Filtrar Veículos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Marca</label>
              <Select value={filters.brand} onValueChange={(value) => setFilters({ ...filters, brand: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas as marcas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as marcas</SelectItem>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Modelo</label>
              <Input
                placeholder="Digite o modelo"
                value={filters.model}
                onChange={(e) => setFilters({ ...filters, model: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Ano (De)</label>
              <Select
                value={filters.yearFrom.toString()}
                onValueChange={(value) => setFilters({ ...filters, yearFrom: Number.parseInt(value) })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 15 }, (_, i) => 2010 + i).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Ano (Até)</label>
              <Select
                value={filters.yearTo.toString()}
                onValueChange={(value) => setFilters({ ...filters, yearTo: Number.parseInt(value) })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 15 }, (_, i) => 2010 + i).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Combustível</label>
              <Select value={filters.fuel} onValueChange={(value) => setFilters({ ...filters, fuel: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Todos os tipos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os tipos</SelectItem>
                  {fuelTypes.map((fuel) => (
                    <SelectItem key={fuel} value={fuel}>
                      {fuel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Search className="h-4 w-4 mr-2" />
                Aplicar Filtros
              </Button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Faixa de Preço: {formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])}
            </label>
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
              max={500000}
              min={0}
              step={10000}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Nosso Estoque ({filteredCars.length} veículos)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCars.map((car) => (
              <Card
                key={car.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={car.image || "/placeholder.svg"}
                      alt={`${car.brand} ${car.model}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {car.year}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {car.brand} {car.model}
                    </h3>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {car.year}
                      </div>
                      <div className="flex items-center gap-1">
                        <Car className="h-4 w-4" />
                        {formatMileage(car.mileage)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Fuel className="h-4 w-4" />
                        {car.fuel}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-blue-600">{formatPrice(car.price)}</div>
                    </div>

                    <Link href={`/carros/${car.slug}`}>
                      <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Ver Detalhes</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-12">
              <Car className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Nenhum veículo encontrado</h3>
              <p className="text-gray-600 dark:text-gray-400">Tente ajustar os filtros para encontrar o carro ideal.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">AutoPrime Veículos</span>
              </div>
              <p className="text-gray-400">
                Sua concessionária de confiança com os melhores carros e condições do mercado.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>(11) 9999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-green-400" />
                  <span>WhatsApp: (11) 9999-9999</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p
                id="disclaimer"
                className="text-slate-400 text-xs md:text-sm mb-4 max-w-3xl mx-auto leading-relaxed"
              >
                Este site foi desenvolvido apenas para fins de portfólio.
              </p>
            <p>&copy; 2025 | Criado e codificado por{" "}
              <a
                  href="https://gustavoviniciusdev.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-500 underline underline-offset-2"
              >
                  Gustavo Vinicius
              </a>
              .</p>
          </div>
        </div>
      </footer>
    </div>
  )
}