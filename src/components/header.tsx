import Link from 'next/link'
import Image from 'next/image'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'

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

        <SearchForm />
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
