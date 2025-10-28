import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Valutazione = () => {
  useEffect(() => {
    document.title = 'Valutazione Gratuita - Compro Oro'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Valutazione gratuita e senza impegno per oro, argento, gioielli e orologi. Esperti professionisti, quotazioni competitive, pagamento immediato.'
      )
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1600&q=80)',
        }}
      >
        <div className="container-custom text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Valutazione <span className="text-accent-gold">Gratuita</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Valutazione professionale senza impegno per tutti i tuoi oggetti preziosi
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold mb-4">
                Servizio di <span className="text-accent-gold">Valutazione Professionale</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Offriamo valutazioni accurate e gratuite per oro, argento, gioielli e orologi di lusso
              </p>
            </div>

            {/* What We Value */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Oro</h3>
                <p className="text-gray-600 text-sm">
                  Ogni caratura: 18k, 14k, 9k, lingotti e monete
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Argento</h3>
                <p className="text-gray-600 text-sm">
                  925, 800, argenteria e oggetti d'arte
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Gioielli</h3>
                <p className="text-gray-600 text-sm">
                  Con diamanti e pietre preziose, firmati e vintage
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Orologi</h3>
                <p className="text-gray-600 text-sm">
                  Rolex, Omega, Cartier e altri marchi di lusso
                </p>
              </div>
            </div>

            {/* Process */}
            <div className="bg-primary-dark text-white rounded-lg p-8 mb-12">
              <h3 className="font-serif text-2xl font-bold mb-8 text-center">
                Come Funziona la <span className="text-accent-gold">Valutazione</span>
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-gold text-primary-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    1
                  </div>
                  <h4 className="font-semibold mb-2">Porta i Tuoi Oggetti</h4>
                  <p className="text-sm text-gray-300">
                    Vieni nel nostro negozio con gli oggetti da valutare
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-gold text-primary-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    2
                  </div>
                  <h4 className="font-semibold mb-2">Analisi Professionale</h4>
                  <p className="text-sm text-gray-300">
                    I nostri esperti esaminano e testano gli oggetti
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-gold text-primary-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    3
                  </div>
                  <h4 className="font-semibold mb-2">Quotazione</h4>
                  <p className="text-sm text-gray-300">
                    Ricevi la nostra offerta basata sul valore di mercato
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-gold text-primary-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    4
                  </div>
                  <h4 className="font-semibold mb-2">Decidi Tu</h4>
                  <p className="text-sm text-gray-300">
                    Nessun obbligo di vendita, la scelta è sempre tua
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h3 className="font-serif text-2xl font-bold mb-6 text-center">
                Perché Scegliere la Nostra <span className="text-accent-gold">Valutazione</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Completamente Gratuita</h4>
                    <p className="text-gray-600 text-sm">
                      La valutazione è sempre gratuita, senza alcun costo nascosto o commissione.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Esperti Certificati</h4>
                    <p className="text-gray-600 text-sm">
                      Valutazione effettuata da professionisti con oltre 30 anni di esperienza nel settore.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Senza Impegno</h4>
                    <p className="text-gray-600 text-sm">
                      Nessun obbligo di vendita dopo la valutazione. La decisione è sempre e solo tua.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Valutazione Rapida</h4>
                    <p className="text-gray-600 text-sm">
                      Processo veloce: nella maggior parte dei casi la valutazione richiede pochi minuti.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Strumenti Professionali</h4>
                    <p className="text-gray-600 text-sm">
                      Bilance certificate, test chimici e strumenti gemmologici di precisione.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Massima Riservatezza</h4>
                    <p className="text-gray-600 text-sm">
                      Trattiamo ogni valutazione con la massima discrezione e rispetto della privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Bring */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="font-serif text-2xl font-bold mb-6 text-center">
                Cosa <span className="text-accent-gold">Portare</span>
              </h3>
              <div className="max-w-2xl mx-auto">
                <p className="text-gray-700 mb-4">
                  Per una valutazione completa, ti consigliamo di portare:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold">•</span>
                    <span><strong>Documento d'identità</strong> valido (obbligatorio)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold">•</span>
                    <span><strong>Gli oggetti da valutare</strong> (oro, argento, gioielli, orologi)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold">•</span>
                    <span><strong>Certificati e documenti</strong> originali se disponibili (per gioielli e orologi)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold">•</span>
                    <span><strong>Scatole originali</strong> per orologi di lusso (aumentano il valore)</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-4 italic">
                  Nota: anche senza certificati o scatole possiamo comunque valutare i tuoi oggetti.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">
                Richiedi la Tua <span className="text-accent-gold">Valutazione Gratuita</span>
              </h3>
              <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
                Siamo aperti dal lunedì al venerdì dalle 9:00 alle 19:00 e il sabato dalle 9:00 alle 13:00.
                Vieni a trovarci nel nostro negozio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contatti" className="btn-primary">
                  Dove Siamo
                </Link>
                <a href="tel:+39XXXXXXXXX" className="btn-secondary">
                  Chiamaci Ora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Valutazione

