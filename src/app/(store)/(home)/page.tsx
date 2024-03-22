import { FormatCurrency } from '@/utils/formatCurrency'
import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 60 minutes
    },
  })
  const products = await response.json()
  return products
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="md:max-h-MidHomeProduct grid grid-cols-9 grid-rows-6 gap-6 xl:max-h-HomeProduct">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-full row-span-full flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900 md:col-span-6 lg:row-span-6"
      >
        <Image
          src={highlightedProduct.image}
          className="transition-transform duration-300 group-hover:scale-105"
          width={860}
          height={860}
          quality={100}
          alt=""
        />

        <div className="max-w-minMaxPoductValue absolute bottom-4 right-4 flex h-10 items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 sm:max-w-largeProductValue  md:bottom-10 md:right-8 md:h-12 lg:bottom-12 lg:right-8 xl:h-16">
          <span className="truncate text-sm">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {FormatCurrency(highlightedProduct.price)}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            href={`/product/${product.slug}`}
            className="group relative col-span-full flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900 sm:col-span-3 sm:row-span-3"
            key={product.id}
          >
            <Image
              src={product.image}
              className="transition-transform duration-300 group-hover:scale-105"
              width={860}
              height={860}
              quality={100}
              alt=""
            />

            <div className="max-w-minMaxPoductValue absolute bottom-4 right-4 flex h-10 items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 md:bottom-4 md:right-2 md:h-8 lg:right-4 lg:h-12 lg:max-w-largeProductValue">
              <span className="truncate text-sm">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {FormatCurrency(product.price)}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
