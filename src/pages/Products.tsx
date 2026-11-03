import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">Shop</p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">All Products</h1>
        <p className="mt-2 text-neutral-600">{products.length} produk tersedia</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}