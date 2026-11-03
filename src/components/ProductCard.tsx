import { Link } from 'react-router-dom'
import type { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value)
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-3">
        <p className="text-xs uppercase tracking-wider text-neutral-400">
          {product.category}
        </p>
        <h3 className="mt-1 text-sm font-medium text-neutral-900 group-hover:underline">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-semibold text-neutral-900">
          {formatRupiah(product.price)}
        </p>
      </div>
    </Link>
  )
}