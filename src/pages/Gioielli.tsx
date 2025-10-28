import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Gioielli = () => {
  useEffect(() => {
    document.title = 'Compro Gioielli - Valutazione Professionale'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Compriamo gioielli in oro, argento, con pietre preziose. Valutazione da esperti gemmologi, quotazioni migliori e pagamento immediato.'
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
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80)',
        }}
      >
        <div className="container-custom text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Compro <span className="text-accent-gold">Gioielli</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Acquistiamo gioielli di pregio con valutazione da esperti gemmologi
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
                Acquistiamo <span className="text-accent-gold">Ogni Tipo di Gioiello</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Gioielli in oro, argento, platino e con pietre preziose
              </p>
            </div>

            {/* What We Buy */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-serif text-xl font-semibold mb-4 text-accent-gold">Gioielleria Classica</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Anelli con diamanti e pietre preziose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Collane e ciondoli in oro e platino</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bracciali e tennis di diamanti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Orecchini e parure complete</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fedi nuziali e anelli di fidanzamento</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-serif text-xl font-semibold mb-4 text-accent-gold">Gioielli di Marca</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cartier, Bulgari, Tiffany & Co.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Chopard, Van Cleef & Arpels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Damiani, Pomellato, Chaumet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Gioielli firmati e di design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Gioielli vintage e d'epoca</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Precious Stones */}
            <div className="bg-primary-dark text-white rounded-lg p-8 mb-12">
              <h3 className="font-serif text-2xl font-bold mb-6 text-center">
                Pietre <span className="text-accent-gold">Preziose</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-gold mb-1">💎</div>
                  <div className="text-sm text-gray-300">Diamanti</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-gold mb-1">💚</div>
                  <div className="text-sm text-gray-300">Smeraldi</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-gold mb-1">🔴</div>
                  <div className="text-sm text-gray-300">Rubini</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-gold mb-1">🔵</div>
                  <div className="text-sm text-gray-300">Zaffiri</div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-400 mt-6">
                Acquistiamo anche: perle, acquamarina, topazio, ametista e altre gemme
              </p>
            </div>

            {/* Evaluation Process */}
            <div className="mb-12">
              <h3 className="font-serif text-2xl font-bold mb-6 text-center">
                Processo di <span className="text-accent-gold">Valutazione</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Esame Visivo</h4>
                    <p className="text-gray-600 text-sm">
                      Ispezione delle caratteristiche del gioiello: marchi, lavorazione, condizioni generali e stile.
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
                    <h4 className="font-semibold mb-2">Test del Metallo</h4>
                    <p className="text-gray-600 text-sm">
                      Verifica della caratura dell'oro, dell'argento o del platino con test specifici.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Analisi Pietre</h4>
                    <p className="text-gray-600 text-sm">
                      Valutazione gemme: caratura, purezza, colore, taglio. Certificazione diamanti se disponibile.
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
                    <h4 className="font-semibold mb-2">Quotazione Finale</h4>
                    <p className="text-gray-600 text-sm">
                      Offerta basata su materiali, pietre, marca, stato conservazione e valore di mercato.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Sell Jewelry */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="font-serif text-2xl font-bold mb-6 text-center">
                Vantaggi di Vendere <span className="text-accent-gold">da Noi</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Esperti Gemmologi</h4>
                  <p className="text-gray-600 text-sm">
                    Valutazione da professionisti certificati con esperienza in gemmologia
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Quotazioni Competitive</h4>
                  <p className="text-gray-600 text-sm">
                    Offriamo prezzi equi basati sul valore reale dei gioielli
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Massima Riservatezza</h4>
                  <p className="text-gray-600 text-sm">
                    Ogni transazione è trattata con la massima discrezione
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">
                Hai Gioielli da Valutare?
              </h3>
              <p className="mb-6 text-gray-600">
                Porta i tuoi gioielli nel nostro negozio per una valutazione professionale e gratuita
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/valutazione" className="btn-primary">
                  Richiedi Valutazione
                </Link>
                <Link to="/contatti" className="btn-secondary">
                  Contattaci
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gioielli

