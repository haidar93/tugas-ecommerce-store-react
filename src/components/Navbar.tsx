import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

export default function Navbar() {
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/" className="text-xl font-bold tracking-tight">
          HAIDAR FAJAR<span className="text-neutral-400">.</span>
        </Link>

        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? 'text-black' : 'text-neutral-500 hover:text-black'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? 'text-black' : 'text-neutral-500 hover:text-black'
              }`
            }
          >
            Products
          </NavLink>
        </div>

        <Link
          to="/cart"
          className="relative p-2 hover:bg-neutral-100 rounded-full transition-colors"
          aria-label="Cart"
        >
          <ShoppingBag className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold min-w-5 h-5 px-1 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </nav>
    </header>
  )
}