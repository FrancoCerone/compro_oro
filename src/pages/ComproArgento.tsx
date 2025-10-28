import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ComproArgento = () => {
  useEffect(() => {
    document.title = 'Compro Argento - Valutazione e Pagamento Immediato'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Compro argento 925, 800 e argenteria. Valutazione gratuita basata sulle quotazioni di mercato. Pagamento immediato in contanti.'
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
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1600&q=80)',
        }}
      >
        <div className="container-custom text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Compro <span className="text-accent-gold">Argento</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Acquistiamo argento 925, 800 e argenteria con valutazione professionale
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
                Acquistiamo <span className="text-accent-gold">Ogni Tipo di Argento</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Argento da gioielleria, posate, vassoi, monete e oggetti d'arte
              </p>
            </div>

            {/* What We Buy */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-serif text-xl font-semibold mb-4 text-accent-gold">Argenteria e Gioielli</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Posate in argento (cucchiai, forchette, coltelli)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vassoi, teiere e caffettiere</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cornici, portafoto e oggetti decorativi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Anelli, bracciali e collane in argento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Servizi da tè e da tavola completi</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-serif text-xl font-semibold mb-4 text-accent-gold">Monete e Lingotti</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Monete d'argento da investimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Lingotti d'argento certificati</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Monete commemorative in argento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Argento industriale e rottami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Argento da gioielleria e oreficeria</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Silver Grades */}
            <div className="bg-primary-dark text-white rounded-lg p-8 mb-12">
              <h3 className="font-serif text-2xl font-bold mb-6 text-center">
                Titoli di <span className="text-accent-gold">Argento</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-gold mb-2">925</div>
                  <div className="text-sm text-gray-300">Sterling Silver</div>
                  <p className="text-xs text-gray-400 mt-2">92,5% argento puro - standard internazionale</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-gold mb-2">800</div>
                  <div className="text-sm text-gray-300">Argento 800</div>
                  <p className="text-xs text-gray-400 mt-2">80% argento puro - comune in argenteria antica</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-gold mb-2">999</div>
                  <div className="text-sm text-gray-300">Argento Puro</div>
                  <p className="text-xs text-gray-400 mt-2">99,9% argento - lingotti da investimento</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h3 className="font-serif text-2xl font-bold mb-6 text-center">
                Perché Vendere l'Argento <span className="text-accent-gold">da Noi</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Valutazione Professionale</h4>
                    <p className="text-gray-600 text-sm">
                      Verifichiamo il titolo dell'argento con test specifici per determinare la purezza esatta.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quotazioni Aggiornate</h4>
                    <p className="text-gray-600 text-sm">
                      Prezzi basati sulle quotazioni internazionali dell'argento aggiornate in tempo reale.
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
                    <h4 className="font-semibold mb-2">Pagamento Immediato</h4>
                    <p className="text-gray-600 text-sm">
                      Transazione completata sul momento con pagamento in contanti o bonifico immediato.
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
                    <h4 className="font-semibold mb-2">Nessun Obbligo</h4>
                    <p className="text-gray-600 text-sm">
                      Valutazione completamente gratuita e senza alcun impegno di vendita.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gray-50 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold mb-4">
                Hai Argento da Valutare?
              </h3>
              <p className="mb-6 text-gray-600">
                Porta il tuo argento nel nostro negozio per una valutazione gratuita
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/valutazione" className="btn-primary">
                  Richiedi Valutazione
                </Link>
                <Link to="/contatti" className="btn-secondary">
                  Dove Siamo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-bold mb-6 text-center">
              Informazioni <span className="text-accent-gold">Utili</span>
            </h3>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold mb-4">Come Riconoscere l'Argento Vero</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent-gold">•</span>
                  <span>Cerca i marchi di punzonatura: 925, 800, 999 o "Sterling"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-gold">•</span>
                  <span>L'argento vero non è magnetico (non si attacca ai magneti)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-gold">•</span>
                  <span>Ha un suono caratteristico quando viene percosso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-gold">•</span>
                  <span>Tende a ossidarsi nel tempo formando una patina scura</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 italic">
                Non sei sicuro se il tuo oggetto è in argento? Portalo da noi per una verifica gratuita!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComproArgento

