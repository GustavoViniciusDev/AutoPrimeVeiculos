# 🚗 AutoPrime Veículos

Uma landing page moderna e responsiva para uma concessionária de veículos, desenvolvida com Next.js 15 e tecnologias de ponta.

## ✨ Funcionalidades

### 🏠 **Página Principal**
- **Header fixo** com navegação suave e toggle dark/light mode
- **Hero section** impactante com call-to-actions
- **Sistema de filtros avançado** com busca por:
  - Marca (Toyota, Honda, BMW, Mercedes, etc.)
  - Modelo (busca por texto)
  - Faixa de anos (2010-2024)
  - Preço (slider interativo)
  - Tipo de combustível (Gasolina, Diesel, Elétrico, Híbrido)
- **Grid responsivo** com 12+ carros mockados
- **Cards elegantes** com informações detalhadas
- **Rodapé completo** com contatos WhatsApp

### 🔍 **Página de Detalhes**
- **Galeria de imagens** com navegação por thumbnails
- **Especificações técnicas completas**
- **Lista de equipamentos e opcionais**
- **Simulador de financiamento** em tempo real
- **Botões de contato** integrados com WhatsApp
- **Carros relacionados** da mesma marca
- **Breadcrumb** para navegação

### 🎨 **Design e UX**
- **Tema dark/light** com transições suaves
- **Totalmente responsivo** (desktop, tablet, mobile)
- **Animações elegantes** em hover e transições
- **Tipografia moderna** e hierarquia visual clara
- **Cores neutras e elegantes**

## 🛠️ Tecnologias Utilizadas

- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[React 18](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI modernos
- **[Lucide React](https://lucide.dev/)** - Ícones SVG otimizados

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm, yarn ou pnpm

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/GustavoViniciusDev/AutoPrimeVeiculos.git
cd autoprime-veiculos
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Acesse no navegador**
Abra [http://localhost:3000](http://localhost:3000) para ver o resultado.

## 📁 Estrutura do Projeto

```
autoprime-veiculos/
├── app/
│   ├── carros/
│   │   └── [slug]/
│   │       └── page.tsx          # Página de detalhes do carro
│   ├── globals.css               # Estilos globais
│   ├── layout.tsx               # Layout raiz
│   └── page.tsx                 # Página principal
├── components/
│   └── ui/                      # Componentes shadcn/ui
├── lib/
│   ├── cars-data.ts            # Dados mockados dos carros
│   └── utils.ts                # Utilitários
├── public/                     # Arquivos estáticos
├── README.md
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Funcionalidades Detalhadas

### Sistema de Filtros
- **Filtro por marca**: Dropdown com todas as marcas disponíveis
- **Busca por modelo**: Campo de texto com busca em tempo real
- **Seleção de anos**: Campos "De" e "Até" para faixa de anos
- **Slider de preço**: Controle visual para faixa de preços
- **Tipo de combustível**: Filtro por categoria de combustível
- **Aplicação em tempo real**: Resultados atualizados instantaneamente

### Simulador de Financiamento
- **Entrada personalizável**: Campo editável para valor de entrada
- **Número de parcelas**: Seleção de 12x a 60x
- **Taxa de juros**: Campo editável para taxa mensal
- **Cálculos automáticos**:
  - Valor financiado
  - Parcela mensal
  - Total a pagar
  - Total de juros

### Integração WhatsApp
- **Mensagens pré-formatadas** com dados do veículo
- **Links diretos** para conversa no WhatsApp
- **Botões estratégicos** na página de detalhes e simulador

## 📱 Responsividade

O projeto foi desenvolvido com **mobile-first** e é totalmente responsivo:

- **Desktop**: Layout completo com sidebar de filtros
- **Tablet**: Grid adaptativo com 2-3 colunas
- **Mobile**: Layout em coluna única com navegação otimizada

## 🎨 Personalização

### Cores
As cores podem ser personalizadas no arquivo `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "hsl(var(--primary))",
      secondary: "hsl(var(--secondary))",
      // ... outras cores
    }
  }
}
```

### Dados dos Carros
Os dados mockados estão em `lib/cars-data.ts` e podem ser facilmente substituídos por uma API real:

```typescript
export const carsData: Car[] = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    // ... outros dados
  }
]
```

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 👨‍💻 Autor
**Gustavo Vinicius**  
🔗 [Portfólio](https://gustavoviniciusdev.vercel.app/)  
📸 [LinkedIn](https://www.linkedin.com/in/gustavoviniciusdev/)  

---

### ✅ Licença
Este projeto é para fins educacionais e de portfólio.  
Não é um serviço real, nem deve ser utilizado como substituto para atendimento psicológico.
