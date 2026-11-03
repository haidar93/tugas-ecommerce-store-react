import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatRupiah } from '@/components/ProductCard'
import { products } from '@/data/products'
import { useCart } from '@/contexts/CartContext'

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const { addToCart } = useCart()

  // Cari produk berdasarkan ID dari URL
  const product = products.find((p) => p.id === Number(id))

  // Jika produk tidak ditemukan
  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-2xl font-bold">Produk tidak ditemukan</h1>
        <p className="mt-2 text-neutral-600">
          Produk dengan ID <span className="font-mono">{id}</span> tidak tersedia.
        </p>
        <Link to="/products" className="inline-block mt-6">
          <Button variant="outline">Kembali ke Products</Button>
        </Link>
      </div>
    )
  }

  // Jika produk ditemukan, tampilkan UI Detail
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-black mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Products
      </Link>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Gambar Produk */}
        <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Produk */}
        <div className="lg:pt-4">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            {product.category}
          </p>
          <h1 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold">
            {formatRupiah(product.price)}
          </p>

          <div className="mt-8 border-t border-neutral-200 pt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-2">
              Deskripsi
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <Button
            size="lg"
            className="mt-8 rounded-full w-full sm:w-auto px-8"
            onClick={() => addToCart(product)}
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Tambah ke Cart
          </Button>
        </div>
      </div>
    </div>
  )
}