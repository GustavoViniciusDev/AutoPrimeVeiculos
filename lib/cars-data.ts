export interface Car {
  id: number
  brand: string
  model: string
  year: number
  mileage: number
  price: number
  fuel: string
  image: string
  slug: string
  transmission: string
  color: string
  doors: number
  engine: string
  features: string[]
  description: string
  images: string[]
}

export type CarData = Car

export const carsData: Car[] = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    year: 2023,
    mileage: 31700,
    price: 150000,
    fuel: "Gasolina e álcool",
    image: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250714/toyota-corolla-2.0-vvtie-flex-grs-direct-shift-wmimagem11155765381.jpg?s=fill&w=1920&h=1440&q=75?height=300&width=400",
    slug: "toyota-corolla-2023",
    transmission: "Automático",
    color: "Preto",
    doors: 4,
    engine: "2.0 VVT-IE FLEX GR-S DIRECT SHIFT",
    features: [
      "Ar Condicionado",
      "Direção Elétrica",
      "Vidros Elétricos",
      "Trava Elétrica",
      "Airbag",
      "ABS",
      "Bluetooth",
    ],
    description:
      "Toyota Corolla 2023 em excelente estado de conservação. Veículo híbrido com baixo consumo e alta tecnologia.",
    images: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250714/toyota-corolla-2.0-vvtie-flex-grs-direct-shift-wmimagem11155849823.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250714/toyota-corolla-2.0-vvtie-flex-grs-direct-shift-wmimagem11160037232.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250714/toyota-corolla-2.0-vvtie-flex-grs-direct-shift-wmimagem11160205534.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250714/toyota-corolla-2.0-vvtie-flex-grs-direct-shift-wmimagem11161259910.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
    ],
  },
  {
    id: 2,
    brand: "Honda",
    model: "Civic",
    year: 2022,
    mileage: 115466,
    price: 124000,
    fuel: "Gasolina e álcool",
    image: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202506/20250624/honda-civic-2-0-16v-flexone-ex-4p-cvt-wmimagem13474847113.webp?s=fill&w=552&h=414&q=60?height=300&width=400",
    slug: "honda-civic-2022",
    transmission: "CVT",
    color: "Branco",
    doors: 4,
    engine: "2.0L",
    features: ["Ar Condicionado", "Direção Hidráulica", "Vidros Elétricos", "Trava Elétrica", "Airbag", "ABS"],
    description: "2.0 16V FLEXONE EX 4P CVT.",
    images: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202506/20250624/honda-civic-2-0-16v-flexone-ex-4p-cvt-wmimagem13474847113.webp?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202506/20250624/honda-civic-2-0-16v-flexone-ex-4p-cvt-wmimagem13475062322.webp?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202506/20250624/honda-civic-2-0-16v-flexone-ex-4p-cvt-wmimagem13475180927.webp?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202506/20250624/honda-civic-2-0-16v-flexone-ex-4p-cvt-wmimagem13475161429.webp?s=fill&w=552&h=414&q=60?height=400&width=600",
    ],
  },
  {
    id: 3,
    brand: "BMW",
    model: "X3",
    year: 2024,
    mileage: 20876,
    price: 399800,
    fuel: "Gasolina e elétrico",
    image: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250716/bmw-x3-2.0-16v-hibrido-m-sport-xdrive30e-steptronic-wmimagem16433213272.jpg?s=fill&w=1920&h=1440&q=75?height=300&width=400",
    slug: "bmw-x3-2024",
    transmission: "Automático",
    color: "Preto",
    doors: 4,
    engine: "2.0 16V HÍBRIDO M SPORT XDRIVE30E STEPTRONIC",
    features: [
      "Ar Condicionado",
      "Direção Elétrica",
      "Vidros Elétricos",
      "Trava Elétrica",
      "Airbag",
      "ABS",
      "Bluetooth",
      "GPS",
      "Teto Solar",
    ],
    description: "BMW X3 2024 - SUV premium com tecnologia de ponta e conforto incomparável.",
    images: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250716/bmw-x3-2.0-16v-hibrido-m-sport-xdrive30e-steptronic-wmimagem16433213272.jpg?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250716/bmw-x3-2.0-16v-hibrido-m-sport-xdrive30e-steptronic-wmimagem16433490485.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250716/bmw-x3-2.0-16v-hibrido-m-sport-xdrive30e-steptronic-wmimagem16433621352.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250716/bmw-x3-2.0-16v-hibrido-m-sport-xdrive30e-steptronic-wmimagem16434043239.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250716/bmw-x3-2.0-16v-hibrido-m-sport-xdrive30e-steptronic-wmimagem16434584921.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250716/bmw-x3-2.0-16v-hibrido-m-sport-xdrive30e-steptronic-wmimagem1643485428.jpg?s=fill&w=552&h=414&q=60?height=400&width=600",
    ],
  },
  {
    id: 4,
    brand: "Mercedes",
    model: "C 180",
    year: 2014,
    mileage: 93543,
    price: 68900,
    fuel: "Gasolina",
    image: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250717/mercedesbenz-c-180-1-6-cgi-sport-16v-turbo-gasolina-4p-automatico-wmimagem02425426229.webp?s=fill&w=552&h=414&q=60?height=300&width=400",
    slug: "mercedes-c-class-2023",
    transmission: "Automático",
    color: "Branco",
    doors: 4,
    engine: "1.6L Turbo",
    features: [
      "Ar Condicionado",
      "Direção Elétrica",
      "Vidros Elétricos",
      "Trava Elétrica",
      "Airbag",
      "ABS",
      "Bluetooth",
      "GPS",
    ],
    description: "1.6 CGI SPORT 16V TURBO GASOLINA 4P AUTOMÁTICO",
    images: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250717/mercedesbenz-c-180-1-6-cgi-sport-16v-turbo-gasolina-4p-automatico-wmimagem02425451028.webp?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250717/mercedesbenz-c-180-1-6-cgi-sport-16v-turbo-gasolina-4p-automatico-wmimagem02425480213.webp?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250717/mercedesbenz-c-180-1-6-cgi-sport-16v-turbo-gasolina-4p-automatico-wmimagem02425502715.webp?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250717/mercedesbenz-c-180-1-6-cgi-sport-16v-turbo-gasolina-4p-automatico-wmimagem02425523733.webp?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250717/mercedesbenz-c-180-1-6-cgi-sport-16v-turbo-gasolina-4p-automatico-wmimagem02425546721.webp?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250717/mercedesbenz-c-180-1-6-cgi-sport-16v-turbo-gasolina-4p-automatico-wmimagem02425588245.webp?s=fill&w=552&h=414&q=60?height=400&width=600",
    ],
  },
  {
    id: 5,
    brand: "Ford",
    model: "Mustang",
    year: 2022,
    mileage: 1945,
    price: 509777,
    fuel: "Gasolina",
    image: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250705/ford-mustang-5.0-v8-tivct-gasolina-mach-1-selectshift-wmimagem14355147756.jpg?s=fill&w=552&h=414&q=60?height=300&width=400",
    slug: "ford-mustang-2022",
    transmission: "Automático",
    color: "Preto",
    doors: 2,
    engine: "5.0L V8",
    features: [
      "Ar Condicionado",
      "Direção Elétrica",
      "Vidros Elétricos",
      "Trava Elétrica",
      "Airbag",
      "ABS",
      "Bluetooth",
    ],
    description: "5.0 V8 TI-VCT GASOLINA MACH 1 SELECTSHIFT",
    images: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250705/ford-mustang-5.0-v8-tivct-gasolina-mach-1-selectshift-wmimagem14355221029.jpg?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250705/ford-mustang-5.0-v8-tivct-gasolina-mach-1-selectshift-wmimagem1435528214.jpg?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250705/ford-mustang-5.0-v8-tivct-gasolina-mach-1-selectshift-wmimagem14355408490.jpg?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250705/ford-mustang-5.0-v8-tivct-gasolina-mach-1-selectshift-wmimagem14355731597.jpg?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250705/ford-mustang-5.0-v8-tivct-gasolina-mach-1-selectshift-wmimagem14355962769.jpg?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250705/ford-mustang-5.0-v8-tivct-gasolina-mach-1-selectshift-wmimagem14360437949.jpg?s=fill&w=552&h=414&q=60?height=400&width=600",
    ],
  },
  {
    id: 6,
    brand: "Tesla",
    model: "Model 3",
    year: 2021,
    mileage: 20500,
    price: 359000,
    fuel: "Elétrico",
    image: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250704/tesla-model-3-eletrico-awd-longe-range-performance-wmimagem15082061162.jpg?s=fill&w=552&h=414&q=60?height=300&width=400",
    slug: "tesla-model-3-2024",
    transmission: "Automático",
    color: "Cinza",
    doors: 4,
    engine: "Elétrico",
    features: [
      "Ar Condicionado",
      "Direção Elétrica",
      "Vidros Elétricos",
      "Trava Elétrica",
      "Airbag",
      "ABS",
      "Bluetooth",
      "GPS",
      "Piloto Automático",
    ],
    description: "ELÉTRICO AWD LONGE RANGE PERFORMANCE",
    images: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250704/tesla-model-3-eletrico-awd-longe-range-performance-wmimagem15082378860.jpg?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250704/tesla-model-3-eletrico-awd-longe-range-performance-wmimagem15082691625.jpg?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250704/tesla-model-3-eletrico-awd-longe-range-performance-wmimagem15083005566.jpg?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250704/tesla-model-3-eletrico-awd-longe-range-performance-wmimagem15083320756.jpg?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250704/tesla-model-3-eletrico-awd-longe-range-performance-wmimagem15083640192.jpg?s=fill&w=552&h=414&q=60?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250704/tesla-model-3-eletrico-awd-longe-range-performance-wmimagem15083966128.jpg?s=fill&w=552&h=414&q=60?height=400&width=600",
    ],
  },
  {
    id: 7,
    brand: "Audi",
    model: "A4",
    year: 2022,
    mileage: 17584,
    price: 179900,
    fuel: "Gasolina",
    image: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250716/audi-a4-2.0-tfsi-gasolina-prestige-s-tronic-wmimagem14493835328.jpg?s=fill&w=1920&h=1440&q=75?height=300&width=400",
    slug: "audi-a4-2023",
    transmission: "Automático",
    color: "Cinza",
    doors: 4,
    engine: "2.0L Turbo",
    features: [
      "Ar Condicionado",
      "Direção Elétrica",
      "Vidros Elétricos",
      "Trava Elétrica",
      "Airbag",
      "ABS",
      "Bluetooth",
      "GPS",
    ],
    description: "2.0 TFSI GASOLINA PRESTIGE S TRONIC",
    images: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250716/audi-a4-2.0-tfsi-gasolina-prestige-s-tronic-wmimagem14513034388.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250716/audi-a4-2.0-tfsi-gasolina-prestige-s-tronic-wmimagem15032898438.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250716/audi-a4-2.0-tfsi-gasolina-prestige-s-tronic-wmimagem15052946370.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250716/audi-a4-2.0-tfsi-gasolina-prestige-s-tronic-wmimagem15073133696.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250716/audi-a4-2.0-tfsi-gasolina-prestige-s-tronic-wmimagem15092909028.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250716/audi-a4-2.0-tfsi-gasolina-prestige-s-tronic-wmimagem15112864661.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250716/audi-a4-2.0-tfsi-gasolina-prestige-s-tronic-wmimagem15132857051.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
    ],
  },
  {
    id: 8,
    brand: "Volkswagen",
    model: "Golf",
    year: 2019,
    mileage: 50000,
    price: 222900,
    fuel: "Gasolina",
    image: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250707/volkswagen-golf-2-0-350-tsi-gasolina-gti-dsg-wmimagem12545453724.webp?s=fill&w=1920&h=1440&q=75?height=300&width=400",
    slug: "volkswagen-golf-2019",
    transmission: "Automática",
    color: "Preto",
    doors: 4,
    engine: "2.0 Turbo",
    features: ["Ar Condicionado", "Direção Elétrica", "Vidros Elétricos", "Trava Elétrica", "Airbag", "ABS"],
    description: "2.0 350 TSI GASOLINA GTI DSG",
    images: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250707/volkswagen-golf-2-0-350-tsi-gasolina-gti-dsg-wmimagem12545499283.webp?s=fill&w=1920&h=1440&q=75?height=400&width=600", 
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250707/volkswagen-golf-2-0-350-tsi-gasolina-gti-dsg-wmimagem12545528729.webp?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250707/volkswagen-golf-2-0-350-tsi-gasolina-gti-dsg-wmimagem12545547627.webp?s=fill&w=1920&h=1440&q=75?height=400&width=600", 
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250707/volkswagen-golf-2-0-350-tsi-gasolina-gti-dsg-wmimagem12545568234.webp?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250707/volkswagen-golf-2-0-350-tsi-gasolina-gti-dsg-wmimagem12545616111.webp?s=fill&w=1920&h=1440&q=75?height=400&width=600", 
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250707/volkswagen-golf-2-0-350-tsi-gasolina-gti-dsg-wmimagem12545629740.webp?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250707/volkswagen-golf-2-0-350-tsi-gasolina-gti-dsg-wmimagem12545714621.webp?s=fill&w=1920&h=1440&q=75?height=400&width=600",
    ],
  },
  {
    id: 9,
    brand: "Hyundai",
    model: "Tucson",
    year: 2022,
    mileage: 35120,
    price: 130490,
    fuel: "Gasolina",
    image: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250714/hyundai-tucson-1.6-16v-tgdi-gasolina-gls-ecoshift-wmimagem15275511231.jpg?s=fill&w=1920&h=1440&q=75?height=300&width=400",
    slug: "hyundai-tucson-2023",
    transmission: "Automático",
    color: "Preto",
    doors: 4,
    engine: "1.6L 16V T-GDI GASOLINA ",
    features: [
      "Ar Condicionado",
      "Direção Elétrica",
      "Vidros Elétricos",
      "Trava Elétrica",
      "Airbag",
      "ABS",
      "Bluetooth",
    ],
    description: "1.6 16V T-GDI GASOLINA GLS ECOSHIFT",
    images: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250714/hyundai-tucson-1.6-16v-tgdi-gasolina-gls-ecoshift-wmimagem15275616124.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250714/hyundai-tucson-1.6-16v-tgdi-gasolina-gls-ecoshift-wmimagem15275711836.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250714/hyundai-tucson-1.6-16v-tgdi-gasolina-gls-ecoshift-wmimagem15275827226.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250714/hyundai-tucson-1.6-16v-tgdi-gasolina-gls-ecoshift-wmimagem15280333482.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250714/hyundai-tucson-1.6-16v-tgdi-gasolina-gls-ecoshift-wmimagem15280440831.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250714/hyundai-tucson-1.6-16v-tgdi-gasolina-gls-ecoshift-wmimagem15280563532.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250714/hyundai-tucson-1.6-16v-tgdi-gasolina-gls-ecoshift-wmimagem15280978023.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250714/hyundai-tucson-1.6-16v-tgdi-gasolina-gls-ecoshift-wmimagem15281086140.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
    ],
  },
  {
    id: 10,
    brand: "Nissan",
    model: "Sentra",
    year: 2024,
    mileage: 0,
    price: 176990,
    fuel: "Gasolina",
    image: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202506/20250615/nissan-sentra-2.0-16v-gasolina-exclusive-xtronic-wmimagem00573732239.jpg?s=fill&w=1920&h=1440&q=75?height=300&width=400",
    slug: "nissan-sentra-2025",
    transmission: "Automático",
    color: "Branco",
    doors: 4,
    engine: "2.0L",
    features: ["Ar Condicionado", "Direção Elétrica", "Vidros Elétricos", "Trava Elétrica", "Airbag", "ABS"],
    description: "2.0 16V GASOLINA EXCLUSIVE XTRONIC",
    images: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202506/20250615/nissan-sentra-2.0-16v-gasolina-exclusive-xtronic-wmimagem00575459021.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600", 
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202506/20250615/nissan-sentra-2.0-16v-gasolina-exclusive-xtronic-wmimagem00581266329.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202506/20250615/nissan-sentra-2.0-16v-gasolina-exclusive-xtronic-wmimagem00583470379.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600", 
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202506/20250615/nissan-sentra-2.0-16v-gasolina-exclusive-xtronic-wmimagem00585837178.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202506/20250615/nissan-sentra-2.0-16v-gasolina-exclusive-xtronic-wmimagem00592296266.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600", 
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202506/20250615/nissan-sentra-2.0-16v-gasolina-exclusive-xtronic-wmimagem00593469265.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202506/20250615/nissan-sentra-2.0-16v-gasolina-exclusive-xtronic-wmimagem00594781096.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
    ],
  },
  {
    id: 11,
    brand: "Chevrolet",
    model: "Onix",
    year: 2024,
    mileage: 2.795,
    price: 109290,
    fuel: "Gasolina e álcool",
    image: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250711/chevrolet-onix-1.0-turbo-flex-plus-premier-automatico-wmimagem09364474858.jpg?s=fill&w=1920&h=1440&q=75?height=300&width=400",
    slug: "chevrolet-onix-2024",
    transmission: "Automática",
    color: "Vermelho",
    doors: 4,
    engine: "1.0L Turbo",
    features: ["Ar Condicionado", "Direção Elétrica", "Vidros Elétricos", "Trava Elétrica", "Airbag", "ABS"],
    description: "1.0 TURBO FLEX PLUS PREMIER AUTOMÁTICO",
    images: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250711/chevrolet-onix-1.0-turbo-flex-plus-premier-automatico-wmimagem09364574828.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600", 
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250711/chevrolet-onix-1.0-turbo-flex-plus-premier-automatico-wmimagem09364683927.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250711/chevrolet-onix-1.0-turbo-flex-plus-premier-automatico-wmimagem09365304830.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600", 
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250711/chevrolet-onix-1.0-turbo-flex-plus-premier-automatico-wmimagem09365409238.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250711/chevrolet-onix-1.0-turbo-flex-plus-premier-automatico-wmimagem09365666476.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600", 
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250711/chevrolet-onix-1.0-turbo-flex-plus-premier-automatico-wmimagem09370334910.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250711/chevrolet-onix-1.0-turbo-flex-plus-premier-automatico-wmimagem09370446630.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
    ],
  },
  {
    id: 12,
    brand: "Jeep",
    model: "Compass",
    year: 2024,
    mileage: 20987,
    price: 169490,
    fuel: "Gasolina e álcool",
    image: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250707/jeep-compass-1.3-t270-turbo-flex-longitude-at6-wmimagem09433868634.jpg?s=fill&w=1920&h=1440&q=75?height=300&width=400",
    slug: "jeep-compass-2024",
    transmission: "Automático",
    color: "Preto",
    doors: 4,
    engine: "1.3 T270 TURBO",
    features: [
      "Ar Condicionado",
      "Direção Elétrica",
      "Vidros Elétricos",
      "Trava Elétrica",
      "Airbag",
      "ABS",
      "Bluetooth",
      "4x4",
    ],
    description: "1.3 T270 TURBO FLEX LONGITUDE AT6",
    images: [
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250707/jeep-compass-1.3-t270-turbo-flex-longitude-at6-wmimagem09433970330.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250707/jeep-compass-1.3-t270-turbo-flex-longitude-at6-wmimagem09434071533.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250707/jeep-compass-1.3-t270-turbo-flex-longitude-at6-wmimagem09434165951.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250707/jeep-compass-1.3-t270-turbo-flex-longitude-at6-wmimagem09434693620.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250707/jeep-compass-1.3-t270-turbo-flex-longitude-at6-wmimagem09434786812.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250707/jeep-compass-1.3-t270-turbo-flex-longitude-at6-wmimagem09434885040.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250707/jeep-compass-1.3-t270-turbo-flex-longitude-at6-wmimagem09435289022.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250707/jeep-compass-1.3-t270-turbo-flex-longitude-at6-wmimagem09435387153.jpg?s=fill&w=1920&h=1440&q=75?height=400&width=600",
    ],
  },
]

export function getCarBySlug(slug: string): Car | undefined {
  return carsData.find((car) => car.slug === slug)
}

export function getRelatedCars(currentCarId: number, brand: string, limit = 3): Car[] {
  return carsData.filter((car) => car.id !== currentCarId && car.brand === brand).slice(0, limit)
}
