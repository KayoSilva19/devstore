import { FormatCurrency } from '@/app/utils/formatCurrency'
import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 60 minutes
    },
  })
  const products = await response.json()
  return products
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="max-h-HomeProduct grid-rows-6 grid grid-cols-9 gap-6">
      <Link
        href={`/products/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src={highlightedProduct.image}
          className="transition-transform duration-300 group-hover:scale-105"
          width={860}
          height={860}
          quality={100}
          alt=""
        />

        <div className="max-w-largeProductValue absolute bottom-28 right-28 flex h-12 items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {FormatCurrency(highlightedProduct.price)}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            href={`/products/${product.slug}`}
            className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
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

            <div className="max-w-largeProductValue absolute bottom-10 right-10 flex h-12 items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
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
