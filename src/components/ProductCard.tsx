import { useState } from 'react'

interface Product {
  id: number
  name: string
  model: string
  description: string
  price: string
  year: string
  condition: string
  image: string
  imageAlt: string
}

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        {/* Overlay on Hover */}
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            className="btn-primary"
            aria-label={`Zoom su ${product.name}`}
          >
            <svg
              className="w-5 h-5 inline-block mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
            Zoom
          </button>
        </div>
        {/* Condition Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-accent-gold text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {product.condition}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold text-primary-dark mb-1 group-hover:text-accent-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3">
          Ref. {product.model} • Anno {product.year}
        </p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-accent-gold">
            {product.price}
          </span>
          <button
            className="btn-secondary text-sm px-4 py-2"
            aria-label={`Maggiori informazioni su ${product.name}`}
          >
            Dettagli
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

