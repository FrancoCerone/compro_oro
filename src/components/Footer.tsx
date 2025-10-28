const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-8 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-3">
              <span className="text-accent-gold">Compro</span> Oro
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              Compriamo oro, argento, gioielli e orologi usati. Valutazione gratuita e pagamento immediato.
            </p>
            <p className="text-gray-300 text-sm">
              Via [Indirizzo da definire]
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-accent-gold">Link Rapidi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/compro-oro" className="text-gray-300 hover:text-accent-gold transition-colors">
                  Compro Oro
                </a>
              </li>
              <li>
                <a href="/compro-argento" className="text-gray-300 hover:text-accent-gold transition-colors">
                  Compro Argento
                </a>
              </li>
              <li>
                <a href="/gioielli" className="text-gray-300 hover:text-accent-gold transition-colors">
                  Gioielli
                </a>
              </li>
              <li>
                <a href="/orologi" className="text-gray-300 hover:text-accent-gold transition-colors">
                  Orologi Usati
                </a>
              </li>
              <li>
                <a href="/valutazione" className="text-gray-300 hover:text-accent-gold transition-colors">
                  Valutazione Gratuita
                </a>
              </li>
              <li>
                <a href="/contatti" className="text-gray-300 hover:text-accent-gold transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 text-accent-gold">Contatti</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+39XXXXXXXXX" className="hover:text-accent-gold transition-colors">
                  +39 XXX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@example.com" className="hover:text-accent-gold transition-colors">
                  info@example.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Lun-Ven: 9:00 - 19:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Compro Oro – Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

