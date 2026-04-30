import { useEffect } from 'react'

const Orologi = () => {
  useEffect(() => {
    document.title = 'Banco Valori - Compro Orologi Usati Rolex | Valutazione e Pagamento'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Banco Valori acquista orologi usati Rolex, Omega e Cartier. Valutazione professionale, quotazioni competitive e pagamento immediato in contanti.'
      )
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section
        className="relative text-white py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1649357585015-179ed98f513d?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="container-custom relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Compro Orologi <span className="text-accent-gold">di Lusso</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
            Acquistiamo orologi di lusso usati: Rolex, Omega, Cartier, Patek Philippe e altri marchi prestigiosi. 
            Valutazione professionale e pagamento immediato.
          </p>
        </div>
      </section>

      {/* Store Description */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Acquistiamo Orologi <span className="text-accent-gold">Usati di Pregio</span>
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Nel nostro negozio acquistiamo orologi usati e vintage delle principali marche, anche con segni di usura,
              purché autentici e in condizioni idonee alla valutazione.
            </p>
            <p className="text-gray-600">
              Porta il tuo orologio in sede: controlliamo autenticità, stato, referenza e quotazione di mercato, poi ti
              facciamo una proposta chiara e senza impegno.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Showcase */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-md bg-white">
              <img
                src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1400&auto=format&fit=crop"
                alt="Valutazione professionale di orologio in negozio"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  Valutazione professionale in negozio, con verifica di originalità e condizioni.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md bg-white">
              <img
                src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1400&auto=format&fit=crop"
                alt="Orologi di lusso usati pronti per la valutazione"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  Acquistiamo orologi di lusso usati di diversi marchi e fasce di valore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">
              Perché Vendere il Tuo <span className="text-accent-gold">Orologio a Banco Valori</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-accent-gold">Valutazione Professionale</h3>
                <p className="text-gray-600">
                  Esperti certificati valutano il tuo orologio verificando autenticità, modello, anno, condizioni e quotazioni di mercato.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-accent-gold">Quotazioni Competitive</h3>
                <p className="text-gray-600">
                  Offriamo prezzi equi e competitivi basati sulle quotazioni reali del mercato degli orologi di lusso.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-accent-gold">Pagamento Immediato</h3>
                <p className="text-gray-600">
                  Transazione completata sul momento con pagamento in contanti o bonifico. Nessuna attesa.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-accent-gold">Tutti i Marchi</h3>
                <p className="text-gray-600">
                  Acquistiamo Rolex, Omega, Cartier, Patek Philippe, Audemars Piguet, IWC e tutti i marchi di prestigio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Orologi

