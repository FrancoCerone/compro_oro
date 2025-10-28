# Guida Installazione - Fedoroff Gioielli

## 📦 Installazione Rapida

### Step 1: Prerequisiti
Assicurati di avere installato Node.js (v16+):
```bash
node --version
npm --version
```

Se non hai Node.js, scaricalo da: https://nodejs.org/

### Step 2: Installa le Dipendenze
Apri un terminale nella cartella del progetto ed esegui:

```bash
npm install
```

Questo installerà tutte le dipendenze necessarie:
- React 18
- React Router DOM
- TypeScript
- Vite
- Tailwind CSS
- E altre librerie di supporto

### Step 3: Avvia il Server di Sviluppo
```bash
npm run dev
```

Il sito sarà accessibile su `http://localhost:3000`

## 🔧 Configurazione Iniziale

### 1. Personalizza le Informazioni Aziendali

#### Header (`src/components/Header.tsx`)
- Linea 62-66: Numero di telefono
- Linea 67-73: Email
- Linea 78-82: Indirizzo

#### Footer (`src/components/Footer.tsx`)
- Linea 50-52: Numero di telefono
- Linea 58-60: Email
- Linea 67: Orari di apertura

### 2. Aggiungi Prodotti Reali

Modifica `src/data/products.json`:
```json
{
  "id": 1,
  "name": "Nome Orologio",
  "model": "Riferimento",
  "description": "Descrizione dettagliata",
  "price": "€ 12.500",
  "year": "2020",
  "condition": "Ottimo",
  "image": "/src/assets/images/products/orologio.jpg",
  "imageAlt": "Descrizione per accessibilità"
}
```

### 3. Aggiungi Logo

1. Crea il logo in formato SVG
2. Salvalo in `src/assets/images/logo.svg`
3. Modifica `src/components/Header.tsx` alla linea 96-99:

```tsx
<img src="/src/assets/images/logo.svg" alt="Fedoroff Gioielli" className="h-12" />
```

### 4. Immagini Prodotti

Posiziona le foto degli orologi in:
```
src/assets/images/products/
├── rolex-submariner-1.jpg
├── rolex-daytona-1.jpg
└── ...
```

Poi aggiorna i path in `products.json`:
```json
"image": "/src/assets/images/products/rolex-submariner-1.jpg"
```

## 🚀 Deploy in Produzione

### Opzione 1: Vercel (Consigliato)

1. Crea account su https://vercel.com
2. Installa Vercel CLI:
```bash
npm install -g vercel
```
3. Deploy:
```bash
npm run build
vercel
```

### Opzione 2: Netlify

1. Crea account su https://netlify.com
2. Connetti il repository GitHub
3. Impostazioni build:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Opzione 3: Hosting Tradizionale

1. Build del progetto:
```bash
npm run build
```

2. Carica il contenuto della cartella `dist/` sul server via FTP

3. Configura il server per servire `index.html` per tutte le route (per React Router)

**Esempio configurazione Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 📧 Form Contatti - Setup Backend

Il form contatti necessita di un backend. Opzioni consigliate:

### Opzione 1: Formspree (Più Semplice)

1. Registrati su https://formspree.io
2. Crea un nuovo form e ottieni l'endpoint
3. Modifica `src/pages/Contatti.tsx` linea 140:

```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
```

### Opzione 2: EmailJS

1. Registrati su https://emailjs.com
2. Configura template email
3. Installa la libreria:
```bash
npm install @emailjs/browser
```
4. Implementa l'invio nel form

### Opzione 3: Backend Custom

Crea un'API Node.js/PHP per gestire l'invio email.

## 🗺️ Google Maps

Per aggiungere la mappa in `src/pages/Contatti.tsx`:

1. Ottieni API Key da Google Cloud Console
2. Installa libreria:
```bash
npm install @react-google-maps/api
```
3. Implementa il componente mappa

**Oppure usa iframe:**
```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
></iframe>
```

## 🔍 SEO Avanzato

### 1. Sitemap
Crea `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tuodominio.com/</loc>
    <priority>1.0</priority>
  </url>
  <!-- aggiungi altre pagine -->
</urlset>
```

### 2. Robots.txt
Crea `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://tuodominio.com/sitemap.xml
```

### 3. Meta Tags Personalizzati
Ogni pagina già include meta description dinamici. Personalizzali secondo le tue esigenze.

## 📱 Test

### Test Browser
- Chrome DevTools (F12)
- Responsive mode per mobile/tablet
- Lighthouse audit per performance

### Test Accessibilità
- WAVE: https://wave.webaim.org/
- axe DevTools

## ⚠️ Risoluzione Problemi Comuni

### Errore: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Errore: Port 3000 già in uso
Modifica porta in `vite.config.ts`:
```ts
server: {
  port: 3001,
}
```

### Build fallisce
Controlla errori TypeScript:
```bash
npm run lint
```

### Immagini non si caricano
- Verifica il path sia corretto
- Usa path relativi o assoluti consistenti
- In produzione, carica immagini su CDN

## 📞 Supporto

Per problemi tecnici o domande:
- Email: info@fedoroffgioielli.com
- Telefono: +39 0584 123 456

---

Buon lavoro! 🚀

