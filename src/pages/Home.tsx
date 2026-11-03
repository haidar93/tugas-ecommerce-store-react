import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products' // Import data lokal

export default function Home() {
  const featured = products.slice(0, 3) // Ambil 3 produk pertama

  return (
    <div>
      {/* HERO SECTION (Biarkan sama seperti sebelumnya) */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* ... isi hero ... */}
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">Featured</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Produk Unggulan</h2>
          </div>
          <Link to="/products" className="hidden sm:flex items-center gap-1 text-sm font-medium text-neutral-700 hover:text-black">
            Lihat semua <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}