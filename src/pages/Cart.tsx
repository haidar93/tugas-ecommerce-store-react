import { Link } from 'react-router-dom'
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatRupiah } from '@/components/ProductCard'
import { useCart } from '@/contexts/CartContext'

export default function Cart() {
  const { items, removeFromCart, totalItems, totalPrice } = useCart()

  // Empty state
  if (items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 mb-6">
          <ShoppingBag className="w-7 h-7 text-neutral-400" />
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
          Cart kamu masih kosong
        </h1>
        <p className="mt-3 text-neutral-600 max-w-md mx-auto">
          Belum ada produk yang ditambahkan. Yuk mulai belanja koleksi terbaru
          kami.
        </p>
        <Link to="/products" className="inline-block mt-8">
          <Button size="lg" className="rounded-full px-8">
            Mulai Belanja
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
          Cart
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
          Shopping Cart
        </h1>
        <p className="mt-2 text-neutral-600">
          {totalItems} item di cart kamu
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-10">
        {/* List item */}
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border-b border-neutral-200 pb-6"
            >
              <Link
                to={`/products/${item.id}`}
                className="w-24 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </Link>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-400">
                      {item.category}
                    </p>
                    <Link
                      to={`/products/${item.id}`}
                      className="mt-1 block text-sm font-medium hover:underline"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 text-sm text-neutral-600">
                      {formatRupiah(item.price)}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="self-start text-neutral-400 hover:text-red-500 transition-colors p-1"
                    aria-label="Hapus item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-neutral-500">
                    Jumlah: <span className="font-medium text-neutral-900">{item.quantity}</span>
                  </p>
                  <p className="text-sm font-semibold">
                    {formatRupiah(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <aside className="lg:sticky lg:top-24 h-fit rounded-2xl bg-neutral-50 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Ringkasan
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-neutral-600">
              <span>Subtotal ({totalItems} item)</span>
              <span>{formatRupiah(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-neutral-600">
              <span>Pengiriman</span>
              <span className="text-green-600">Gratis</span>
            </div>
            <div className="border-t border-neutral-200 pt-3 flex justify-between font-semibold text-base">
              <span>Total</span>
              <span>{formatRupiah(totalPrice)}</span>
            </div>
          </div>

          <Button
            size="lg"
            className="mt-6 w-full rounded-full"
            onClick={() => alert('Checkout belum tersedia di demo ini.')}
          >
            Checkout
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Link
            to="/products"
            className="mt-3 block text-center text-sm text-neutral-600 hover:text-black underline underline-offset-4"
          >
            Lanjut belanja
          </Link>
        </aside>
      </div>
    </div>
  )
}