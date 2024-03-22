import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { CartWidget } from './cart-widget'

export function Header() {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2 sm:gap-5">
        <Link
          href="/"
          className="hidden text-sm font-extrabold text-white sm:flex sm:text-2xl"
        >
          devstore
        </Link>

        <form className="flex w-WformMin items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700 sm:w-Wform">
          <Search className="h-5 w-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar produtos"
            className="w-full flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <CartWidget />
        <div className="hidden h-4 min-w-px bg-zinc-700 sm:flex"></div>
        <Link href="/" className="flex items-center gap-2 hover:underline ">
          <span className="hidden text-sm sm:flex">Account</span>
          <Image
            src="https://github.com/kayosilva19.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  )
}
