import { useEffect } from 'react'
import ProductGrid from '../components/ProductGrid'
import productsData from '../data/products.json'

const Orologi = () => {
  useEffect(() => {
    document.title = 'Compro Orologi Usati Rolex - Valutazione e Pagamento'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Acquistiamo orologi usati Rolex, Omega, Cartier. Valutazione professionale, quotazioni competitive e pagamento immediato in contanti.'
      )
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-primary-dark text-white py-16">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Compro Orologi <span className="text-accent-gold">di Lusso</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
            Acquistiamo orologi di lusso usati: Rolex, Omega, Cartier, Patek Philippe e altri marchi prestigiosi. 
            Valutazione professionale e pagamento immediato.
          </p>
        </div>
      </section>

      {/* Filters Section - TODO: Implementare filtri funzionali */}
      <section className="bg-white border-b py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="font-medium">{productsData.length} Orologi Disponibili</span>
            </div>
            {/* TODO: Aggiungere filtri per modello, anno, prezzo, etc. */}
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold">
                <option>Ordina per: Più Recenti</option>
                <option>Prezzo: Crescente</option>
                <option>Prezzo: Decrescente</option>
                <option>Anno: Più Recenti</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container-custom">
          <ProductGrid products={productsData} />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">
              Perché Vendere il Tuo <span className="text-accent-gold">Orologio da Noi</span>
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

