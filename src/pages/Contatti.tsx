import { useEffect } from 'react'

const Contatti = () => {
  useEffect(() => {
    document.title = 'Contatti - Compro Oro'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Contatta il nostro Compro Oro. Valutazione gratuita oro, argento, gioielli e orologi. Telefono, email, orari di apertura.'
      )
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-16">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent-gold">Contattaci</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Siamo a tua disposizione per rispondere a qualsiasi domanda
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">
                Informazioni di <span className="text-accent-gold">Contatto</span>
              </h2>
              
              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Indirizzo</h3>
                    <p className="text-gray-600">Via [Indirizzo da definire]</p>
                    <p className="text-gray-600">[Città, Provincia]</p>
                    <p className="text-gray-600">Italia</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefono</h3>
                    <a href="tel:+39XXXXXXXXX" className="text-gray-600 hover:text-accent-gold transition-colors">
                      +39 XXX XXX XXXX
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Lun-Ven: 9:00 - 19:00</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:info@example.com" className="text-gray-600 hover:text-accent-gold transition-colors">
                      info@example.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Risposta entro 24 ore</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                    <a href="https://wa.me/39XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent-gold transition-colors">
                      +39 XXX XXX XXXX
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Messaggia ora</p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-serif text-xl font-semibold mb-4">
                  Orari di <span className="text-accent-gold">Apertura</span>
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Lunedì - Venerdì:</span>
                    <span className="font-medium">9:00 - 13:00 / 15:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabato:</span>
                    <span className="font-medium">9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domenica:</span>
                    <span className="font-medium text-gray-500">Chiuso</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  * Si consiglia di chiamare per prendere appuntamento
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">
                Invia un <span className="text-accent-gold">Messaggio</span>
              </h2>
              
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                    placeholder="Il tuo nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                    placeholder="tua@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                    placeholder="+39 ..."
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Oggetto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                  >
                    <option value="">Seleziona un'opzione</option>
                    <option value="acquisto">Informazioni su acquisto</option>
                    <option value="vendita">Informazioni su vendita</option>
                    <option value="perizia">Richiesta perizia</option>
                    <option value="assistenza">Assistenza post-vendita</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent resize-none"
                    placeholder="Scrivi qui il tuo messaggio..."
                  ></textarea>
                </div>

                {/* Privacy */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 w-4 h-4 text-accent-gold border-gray-300 rounded focus:ring-accent-gold"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    Acconsento al trattamento dei miei dati personali secondo la normativa sulla privacy *
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Invia Messaggio
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Campi obbligatori
                </p>
              </form>

              {/* Note: Per implementare l'invio del form, sarà necessario configurare un backend o servizio come Formspree, EmailJS, etc. */}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-12">
        <div className="container-custom">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">
            Come <span className="text-accent-gold">Raggiungerci</span>
          </h2>
          {/* Placeholder per mappa - TODO: Integrare Google Maps o OpenStreetMap */}
            <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-lg font-medium">
                Via [Indirizzo da definire]
              </p>
              <p className="text-sm mt-2">
                TODO: Integrare Google Maps con le coordinate esatte
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <a
              href="#"
              className="btn-secondary inline-block opacity-50 cursor-not-allowed"
            >
              Apri in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contatti

