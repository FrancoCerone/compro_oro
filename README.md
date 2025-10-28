# Compro Oro - Sito Web

Un'applicazione web moderna e responsiva per un compro oro che acquista oro, argento, gioielli e orologi usati, realizzata con React 18, TypeScript, Vite e Tailwind CSS.

## 🚀 Caratteristiche

- **React 18+** con TypeScript per type safety
- **Vite** per build ultra-veloce e hot module replacement
- **Tailwind CSS** per styling moderno e responsivo
- **React Router** per navigazione SPA
- **Layout Responsivo** ottimizzato per mobile, tablet e desktop
- **Componenti funzionali** con React Hooks
- **Design elegante** con palette colori oro/nero personalizzata
- **SEO-friendly** con meta tags dinamici
- **Accessibilità** con ARIA labels e alt text

## 📋 Prerequisiti

Assicurati di avere installato:
- **Node.js** (versione 16 o superiore)
- **npm** o **yarn**

## 🛠️ Installazione

1. **Installa le dipendenze**
```bash
npm install
```

## 🎯 Comandi Disponibili

### Avvia il server di sviluppo
```bash
npm run dev
```
Il sito sarà disponibile su `http://localhost:3000`

### Build per produzione
```bash
npm run build
```

### Anteprima build di produzione
```bash
npm run preview
```

## 📁 Struttura del Progetto

```
sito_orologi/
├── src/
│   ├── components/     # Componenti React riutilizzabili
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   └── ProductGrid.tsx
│   ├── data/           # Dati JSON
│   │   └── products.json  # Prodotti (orologi)
│   ├── pages/          # Pagine dell'applicazione
│   │   ├── Home.tsx           # Homepage con focus su compro oro
│   │   ├── ComproOro.tsx      # Servizio compro oro
│   │   ├── ComproArgento.tsx  # Servizio compro argento
│   │   ├── Gioielli.tsx       # Compro gioielli
│   │   ├── Orologi.tsx        # Compro orologi usati
│   │   ├── Valutazione.tsx    # Valutazione gratuita
│   │   └── Contatti.tsx       # Contatti
│   ├── App.tsx         # Componente principale con routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Stili globali e Tailwind
├── index.html
├── package.json
└── README.md
```

## 🎨 Palette Colori

- **Primary Dark**: `#1A1A1A` - Testo principale
- **Accent Gold**: `#C5A466` - Elementi di accento
- **White**: `#FFFFFF` - Sfondo principale
- **Gray Scale**: Varie tonalità di grigio

## 📱 Pagine Implementate

1. **Home** (`/`) - Pagina principale con focus su compro oro
2. **Compro Oro** (`/compro-oro`) - Servizio principale di acquisto oro
3. **Compro Argento** (`/compro-argento`) - Servizio acquisto argento
4. **Gioielli** (`/gioielli`) - Acquisto gioielli e pietre preziose
5. **Orologi** (`/orologi`) - Acquisto orologi di lusso usati
6. **Valutazione** (`/valutazione`) - Valutazione gratuita
7. **Contatti** (`/contatti`) - Form contatti e informazioni

## 🎯 Focus del Sito

L'attività principale è il **COMPRO ORO** con servizi complementari:
1. **Compro Oro** (servizio principale) - Acquisto oro 18k, 14k, 9k
2. **Compro Argento** - Acquisto argento 925, 800, argenteria
3. **Gioielli** - Acquisto gioielli con pietre preziose
4. **Orologi** (servizio secondario) - Acquisto orologi di lusso usati

## ✅ TODO - Implementazioni Future

### Priorità Alta
- [ ] **Immagini**: Sostituire le immagini placeholder con foto reali
- [ ] **Logo**: Aggiungere il logo aziendale
- [ ] **Form Backend**: Implementare backend per form contatti
- [ ] **Mappa**: Integrare Google Maps nella pagina contatti
- [ ] **Quotazioni Oro**: Integrare API per quotazioni oro in tempo reale

### Priorità Media
- [ ] **Calcolatore Oro**: Widget per calcolare valore oro in base al peso
- [ ] **Testimonianze**: Sezione con recensioni clienti
- [ ] **FAQ**: Sezione domande frequenti espansa
- [ ] **Blog**: Sezione news/articoli sul mercato oro
- [ ] **WhatsApp Widget**: Chat diretta via WhatsApp

## 🔧 Personalizzazione

### Modificare i Contatti
- **Header**: `src/components/Header.tsx` (telefono, email, indirizzo)
- **Footer**: `src/components/Footer.tsx`
- **Pagina Contatti**: `src/pages/Contatti.tsx`

### Cambiare i Colori
Modifica `tailwind.config.js` nella sezione `theme.extend.colors`.

### Aggiornare Prodotti (Orologi)
Edita il file `src/data/products.json`.

## 🌐 Deploy

### Vercel (Consigliato)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connetti il repository GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`

## 📝 Note Importanti

- **Immagini**: Attualmente usa immagini da Unsplash (da sostituire)
- **Form Contatti**: Solo frontend, necessita backend per invio email
- **Quotazioni Oro**: Valori placeholder, integrare API per quotazioni real-time
- **Privacy**: Aggiungere Privacy Policy e Cookie Consent
- **SEO**: Configurare meta tags per ogni pagina

## 📞 Informazioni

- **Indirizzo**: Via [Indirizzo da definire]
- **Telefono**: +39 XXX XXX XXXX
- **Email**: info@example.com

## 📄 Licenza

© 2025 Compro Oro - Tutti i diritti riservati

---

**Sviluppato con React 18, TypeScript e Tailwind CSS**
