# Firme Challenge Leaderboard

Ranking en vivo del Firme Challenge - Competencia de fitness.

## Tecnologías

- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.4
- **Styling**: Tailwind CSS 4
- **Lenguaje**: TypeScript
- **Data**: Google Sheets API

## Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal con metadata SEO
│   ├── page.tsx            # Página principal del leaderboard
│   ├── loading.tsx         # Componente de carga (skeleton)
│   ├── error.tsx           # Manejo de errores
│   ├── not-found.tsx       # Página 404
│   ├── sitemap.ts          # Sitemap dinámico
│   ├── robots.ts           # Robots.txt dinámico
│   └── manifest.ts         # PWA manifest
├── components/
│   ├── Header.tsx
│   ├── GroupTabs.tsx
│   ├── CategoryColumn.tsx
│   ├── LeaderboardCard.tsx
│   ├── ViewToggle.tsx
│   ├── LastUpdated.tsx
│   └── Footer.tsx
├── lib/
│   ├── data.ts             # Fetch de datos desde Google Sheets
│   └── seo.ts              # Utilidades SEO
└── types/
    └── index.ts            # TypeScript types
```

## Configuración

### Variables de Entorno

Copia `.env.example` a `.env` y configura las variables:

```bash
cp .env.example .env
```

Variables requeridas:
- `NEXT_PUBLIC_GOOGLE_SHEET_ID` - ID de tu Google Sheet
- `NEXT_PUBLIC_GOOGLE_API_KEY` - API Key de Google Cloud
- `NEXT_PUBLIC_SITE_URL` - URL de producción (para SEO)

## SEO Implementation

### Metadata y Open Graph

El sitio incluye metadata completa para SEO:

- **Título**: Optimizado para búsquedas en español
- **Descripción**: Keywords relevantes para fitness y competencia
- **Open Graph**: Compatible con Facebook, LinkedIn, WhatsApp
- **Twitter Cards**: Large image cards para mejor visualización
- **Keywords**: Términos relevantes para fitness en español

### Structured Data (JSON-LD)

Se implementaron múltiples schemas de Schema.org:

1. **WebSite**: Información general del sitio
2. **SportsOrganization**: Datos de la organización
3. **SportsEvent**: Información del evento deportivo
4. **BreadcrumbList**: Navegación jerárquica
5. **ItemList**: Lista de categorías del leaderboard

### Archivos SEO

- `/sitemap.xml` - Sitemap dinámico (se actualiza automáticamente)
- `/robots.txt` - Configuración de crawlers
- `/manifest.json` - PWA manifest para instalación
- `/browserconfig.xml` - Configuración para Windows tiles
- `/humans.txt` - Información del equipo
- `/.well-known/security.txt` - Información de seguridad

### Performance Optimizations

- **Font Loading**: `display: swap` para evitar FOIT
- **Preconnect**: Conexiones anticipadas a recursos externos
- **DNS Prefetch**: Resolución DNS anticipada
- **Security Headers**: HSTS, XSS Protection, Content Type Options
- **Caching**: Headers de cache optimizados para assets estáticos
- **Image Optimization**: Avif, WebP con responsive sizes

### Semantic HTML

- Uso correcto de `<main>`, `<header>`, `<nav>`, `<section>`, `<aside>`
- Atributos ARIA para accesibilidad
- Estructura jerárquica de headings
- Labels accesibles para formularios

## Desarrollo

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Build de producción
pnpm build

# Ejecutar build de producción
pnpm start

# Linting
pnpm lint
```

## Producción

### Checklist Pre-Deploy

- [ ] Configurar `NEXT_PUBLIC_SITE_URL` en variables de entorno
- [ ] Agregar imágenes OG y Twitter Card:
  - `/public/og-image.png` (1200x630)
  - `/public/og-image-sm.png` (600x315)
  - `/public/twitter-card.png` (1200x628)
- [ ] Configurar Google Search Console verification code
- [ ] Configurar Google Analytics (opcional)
- [ ] Agregar icons para PWA:
  - `/public/icon-192x192.png`
  - `/public/icon-512x512.png`
- [ ] Actualizar social media handles en `.env`

### Imágenes Requeridas

Para mejor visualización en redes sociales, crear estas imágenes:

1. **og-image.png** (1200x630px)
   - Logo del Firme Challenge
   - Texto: "Firme Challenge - Ranking en Vivo"
   - Colores: Dark background con accent #d8f200

2. **twitter-card.png** (1200x628px)
   - Similar al OG image pero optimizado para Twitter

3. **favicon.ico** (32x32px)
   - Logo simplificado

4. **Icons PWA**:
   - icon-192x192.png
   - icon-512x512.png

## Categorías

### Grupos
- **Hombres**: Competencia masculina
- **Mujeres**: Competencia femenina
- **Mixto**: Equipos mixtos

### Categorías
- **Categoría A**: L
- **Categoría B**: M
- **Categoría C**: P

## Monitoreo SEO

### Tools Recomendados

- Google Search Console
- Google Analytics 4
- Lighthouse (Performance, Accessibility, SEO)
- Screaming Frog SEO Spider
- Ahrefs / SEMrush

### Métricas a Monitorear

- Core Web Vitals (LCP, INP, CLS)
- Click-through rate (CTR)
- Posiciones en keywords objetivo
- Backlinks y referrer traffic
- Social shares

## Licencia

ISC

## Contacto

- Instagram: @firmechallenge
- Twitter: @firmechallenge
- Facebook: /firmechallenge
