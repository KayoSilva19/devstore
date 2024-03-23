import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/data/types/product'
import { api } from '@/data/api'
import { FormatCurrency } from '@/utils/formatCurrency'

interface SearchProps {
  searchParams: {
    q: string
  }
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: nameSearchParams } = searchParams

  async function searchProducts(query: string): Promise<Product[]> {
    const response = await api(`/products/search?q=${query}`, {
      next: {
        revalidate: 60 * 60, // 60 minutes
      },
    })
    const products = await response.json()
    return products
  }

  if (!nameSearchParams) {
    redirect('/')
  }

  const products = await searchProducts(nameSearchParams)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para:
        <span className="font-semibold"> {nameSearchParams}</span>
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
            >
              <Image
                src={product.image}
                className="transition-transform duration-500 group-hover:scale-105"
                width={480}
                height={480}
                quality={100}
                alt=""
              />

              <div className="absolute bottom-4 right-4 flex h-12 max-w-minMaxPoductValue items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 md:bottom-4 md:right-2 md:h-8 lg:right-4 lg:h-12 lg:max-w-largeProductValue">
                <span className="truncate text-sm">{product.title}</span>
                <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                  {FormatCurrency(product.price)}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
