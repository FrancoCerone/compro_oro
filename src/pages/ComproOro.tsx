import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ComproOro = () => {
  useEffect(() => {
    document.title = 'Compro Oro - Quotazioni Migliori e Pagamento Immediato'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Compro oro usato. Valutazione gratuita con bilancia certificata, quotazioni al miglior prezzo di mercato. Pagamento immediato in contanti.'
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
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1600&q=80)',
        }}
      >
        <div className="container-custom text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Compro <span className="text-accent-gold">Oro</span> Usato
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Valutazione professionale e quotazioni ai massimi livelli di mercato
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
                Acquistiamo <span className="text-accent-gold">Ogni Tipo di Oro</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Valutiamo e acquistiamo oro di qualsiasi caratura con precisione e trasparenza
              </p>
            </div>

            {/* What We Buy */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-serif text-xl font-semibold mb-4 text-accent-gold">Oro da Gioielleria</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Anelli, collane, bracciali in oro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Orecchini e ciondoli</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fedi nuziali e anelli di fidanzamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Catenine e pendenti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Gioielli spaiati o rotti</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-serif text-xl font-semibold mb-4 text-accent-gold">Oro da Investimento</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Lingotti d'oro certificati</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Monete d'oro da investimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sterline e marengo d'oro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Oro da fusione e rottami d'oro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Oro dentale e industriale</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Caratages */}
            <div className="bg-primary-dark text-white rounded-lg p-8 mb-12">
              <h3 className="font-serif text-2xl font-bold mb-6 text-center">
                Carature che <span className="text-accent-gold">Acquistiamo</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-gold mb-2">18K</div>
                  <div className="text-sm text-gray-300">750/1000 - Oro 18 carati</div>
                  <p className="text-xs text-gray-400 mt-2">Il più comune in gioielleria italiana</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-gold mb-2">14K</div>
                  <div className="text-sm text-gray-300">585/1000 - Oro 14 carati</div>
                  <p className="text-xs text-gray-400 mt-2">Molto diffuso in gioielleria estera</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-gold mb-2">9K</div>
                  <div className="text-sm text-gray-300">375/1000 - Oro 9 carati</div>
                  <p className="text-xs text-gray-400 mt-2">Comune in UK e gioielleria economica</p>
                </div>
              </div>
              <p className="text-center text-sm text-gray-400 mt-6">
                Acquistiamo anche altre carature: 22K, 21K, 12K, 10K, 8K
              </p>
            </div>

            {/* Why Sell Gold */}
            <div className="mb-12">
              <h3 className="font-serif text-2xl font-bold mb-6 text-center">
                Perché Vendere l'Oro <span className="text-accent-gold">da Noi</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Bilancia Certificata</h4>
                    <p className="text-gray-600 text-sm">
                      Utilizziamo bilance di precisione certificate dalla Camera di Commercio per pesature accurate al milligrammo.
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
                    <h4 className="font-semibold mb-2">Quotazioni in Tempo Reale</h4>
                    <p className="text-gray-600 text-sm">
                      Prezzi aggiornati costantemente in base alla quotazione internazionale dell'oro sui mercati finanziari.
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
                      Ricevi il pagamento in contanti nell'immediato, senza attese o complicazioni burocratiche.
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
                      Trattiamo ogni transazione con la massima discrezione nel pieno rispetto della privacy del cliente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gray-50 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold mb-4">
                Pronto a Vendere il Tuo Oro?
              </h3>
              <p className="mb-6 text-gray-600">
                Vieni nel nostro negozio per una valutazione gratuita e senza impegno
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

      {/* FAQ Section */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-bold mb-8 text-center">
              Domande <span className="text-accent-gold">Frequenti</span>
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-2">Cosa serve per vendere oro?</h4>
                <p className="text-gray-600 text-sm">
                  È necessario presentare un documento di identità valido. Per importi superiori a 1.000€ è richiesto anche il codice fiscale.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-2">Come si calcola il prezzo dell'oro?</h4>
                <p className="text-gray-600 text-sm">
                  Il prezzo si calcola in base al peso in grammi, alla caratura (purezza) e alla quotazione internazionale dell'oro del giorno.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-2">Acquisite anche oro rotto o danneggiato?</h4>
                <p className="text-gray-600 text-sm">
                  Sì, acquistiamo qualsiasi tipo di oro, anche rotto, danneggiato o fuori moda. Ciò che conta è il peso e la caratura.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-2">Come verificate l'autenticità dell'oro?</h4>
                <p className="text-gray-600 text-sm">
                  Utilizziamo test chimici e strumenti professionali per verificare la caratura effettiva dell'oro prima della valutazione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComproOro

