import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    document.title = 'Compro Oro - Valutazione Gratuita e Pagamento Immediato'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Compro oro, argento, gioielli e orologi usati. Valutazione gratuita, quotazioni migliori e pagamento immediato in contanti.'
      )
    }

    // Load TradingView widget
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.onload = () => {
      if (typeof (window as any).TradingView !== 'undefined') {
        new (window as any).TradingView.widget({
          width: '100%',
          height: 200,
          symbol: 'TVC:GOLD',
          interval: '60',
          timezone: 'Europe/Rome',
          theme: 'dark',               // Tema scuro
          style: '3',                  // Linea
          locale: 'it',
          hide_top_toolbar: true,      // Nasconde toolbar superiore
          hide_legend: true,           // Nasconde legenda
          hide_side_toolbar: true,     // Nasconde strumenti laterali
          withdateranges: false,       // Nasconde selezione intervallo
          allow_symbol_change: false,  // Blocca cambio simbolo
          backgroundColor: '#000000',  // Sfondo nero
          gridColor: '#1a1a1a',        // Griglia scura
          lineColor: '#C5A466',        // Colore oro (accent-gold)
          enable_publishing: false,
          show_popup_button: false,
          container_id: 'tradingview_chart'
        });
      }
    };
    document.body.appendChild(script);


    return () => {
      // Cleanup: remove script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[600px] flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1600&q=80)',
        }}
      >
        <div className="container-custom text-white">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">
            Compro <span className="text-accent-gold">Oro</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-balance">
            Valutazione gratuita, quotazioni al miglior prezzo di mercato e pagamento immediato in contanti
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link to="/compro-oro" className="btn-primary text-center">
              Vendi Oro
            </Link>
            <Link to="/valutazione" className="btn-secondary text-center bg-transparent border-white text-white hover:bg-white hover:text-primary-dark">
              Valutazione Gratuita
            </Link>
          </div>
          
          {/* TradingView Widget - Hero */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="rounded-lg overflow-hidden shadow-2xl border-2 border-accent-gold/30">
              <div className="tradingview-widget-container">
                <div id="tradingview_chart"></div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-300 mt-3">
              📈 Quotazione oro in tempo reale
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">
            I Nostri <span className="text-accent-gold">Servizi</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Acquistiamo oro, argento, gioielli e orologi con valutazione professionale e pagamento immediato
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Compro Oro */}
            <Link to="/compro-oro" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-gold/20 transition-colors">
                  <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-accent-gold transition-colors">Compro Oro</h3>
                <p className="text-gray-600 text-sm">
                  Acquistiamo oro usato 18k, 14k, 9k. Valutazione accurata al grammo con bilancia certificata.
                </p>
              </div>
            </Link>

            {/* Compro Argento */}
            <Link to="/compro-argento" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-gold/20 transition-colors">
                  <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-accent-gold transition-colors">Compro Argento</h3>
                <p className="text-gray-600 text-sm">
                  Acquistiamo argento 925, 800 e argenteria. Valutazione basata sulle quotazioni di mercato.
                </p>
              </div>
            </Link>

            {/* Gioielli */}
            <Link to="/gioielli" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-gold/20 transition-colors">
                  <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-accent-gold transition-colors">Gioielli</h3>
                <p className="text-gray-600 text-sm">
                  Acquistiamo gioielli in oro, argento, con pietre preziose. Valutazione di esperti gemmologi.
                </p>
              </div>
            </Link>

            {/* Orologi */}
            <Link to="/orologi" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-gold/20 transition-colors">
                  <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-accent-gold transition-colors">Orologi Usati</h3>
                <p className="text-gray-600 text-sm">
                  Acquistiamo orologi di lusso Rolex, Omega, Cartier e altri marchi prestigiosi.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Perché Scegliere <span className="text-accent-gold">Noi</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Miglior Prezzo</h3>
              <p className="text-gray-600">
                Quotazioni basate sul prezzo di mercato aggiornato in tempo reale. Massima trasparenza nelle valutazioni.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Pagamento Immediato</h3>
              <p className="text-gray-600">
                Pagamento in contanti sul momento. Nessuna attesa, massima rapidità in tutte le operazioni.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Professionalità e Riservatezza</h3>
              <p className="text-gray-600">
                Oltre 30 anni di esperienza nel settore. Massima discrezione e professionalità in ogni transazione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">
            Come <span className="text-accent-gold">Funziona</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Vendere il tuo oro non è mai stato così semplice
          </p>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Porta il Tuo Oro</h3>
              <p className="text-gray-600 text-sm">
                Vieni nel nostro negozio con i tuoi oggetti in oro
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Valutazione Gratuita</h3>
              <p className="text-gray-600 text-sm">
                Pesiamo e valutiamo il tuo oro con bilancia certificata
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Quotazione Migliore</h3>
              <p className="text-gray-600 text-sm">
                Ti proponiamo il miglior prezzo di mercato aggiornato
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Pagamento Immediato</h3>
              <p className="text-gray-600 text-sm">
                Ricevi il pagamento in contanti sul momento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Hai Oro o Gioielli da <span className="text-accent-gold">Valutare</span>?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contattaci per una valutazione gratuita e senza impegno. Vieni nel nostro negozio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contatti" className="btn-primary inline-block">
              Contattaci Ora
            </Link>
            <a href="tel:+39XXXXXXXXX" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-dark inline-block">
              Chiamaci Ora
            </a>
          </div>
        </div>
      </section>

      {/* Carature Info */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl font-bold mb-4">
                Quotazioni <span className="text-accent-gold">per Caratura</span>
              </h3>
              <p className="text-gray-600">
                Valore indicativo per grammo in base alla purezza dell'oro
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="text-sm text-gray-500 mb-2 font-medium">Oro 18K</div>
                <div className="text-sm text-gray-400 mb-3">(750/1000)</div>
                <div className="text-3xl font-bold text-accent-gold mb-2">75%</div>
                <p className="text-xs text-gray-500">del valore dell'oro puro</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="text-sm text-gray-500 mb-2 font-medium">Oro 14K</div>
                <div className="text-sm text-gray-400 mb-3">(585/1000)</div>
                <div className="text-3xl font-bold text-accent-gold mb-2">58,5%</div>
                <p className="text-xs text-gray-500">del valore dell'oro puro</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="text-sm text-gray-500 mb-2 font-medium">Oro 9K</div>
                <div className="text-sm text-gray-400 mb-3">(375/1000)</div>
                <div className="text-3xl font-bold text-accent-gold mb-2">37,5%</div>
                <p className="text-xs text-gray-500">del valore dell'oro puro</p>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 mt-8 text-center max-w-3xl mx-auto">
              * Valori indicativi. La quotazione esatta dipende dal peso, dalla caratura verificata e dalle condizioni dell'oggetto. 
              Vieni nel nostro negozio per una valutazione precisa e gratuita.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
