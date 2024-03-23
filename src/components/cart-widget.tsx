'use client'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/cart-context'
import Link from 'next/link'

export function CartWidget() {
  const { items } = useCart()
  const quantityProductsInCart = items.length
  return (
    <div className="flex items-center gap-3">
      <Link href="/cart" className="flex gap-2">
        <div className="relative">
          {quantityProductsInCart > 0 && (
            <span className="absolute -right-1 -top-1 flex h-2  w-2 ">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>
          )}
          <ShoppingBag className="h-4 w-4" />
        </div>
        <span className="hidden text-sm sm:flex">
          Cart ({quantityProductsInCart})
        </span>
      </Link>
    </div>
  )
}
