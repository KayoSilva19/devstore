import { FormatCurrency } from '@/utils/formatCurrency'
import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import Image from 'next/image'
import { Metadata } from 'next'

interface ProductProps {
  params: {
    slug: string
  }
}

async function getSlugProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`)

  const product = await response.json()
  return product
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getSlugProduct(params.slug)
  return {
    title: product.title,
  }
}

export async function generateStaticParams() {
  const response = await api(`/products/featured`)
  const products: Product[] = await response.json()

  return products.map((product) => {
    return { slug: product.slug }
  })
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getSlugProduct(params.slug)

  return (
    <div className="relative grid max-h-HomeProduct grid-cols-3">
      <div className="col-span-full overflow-hidden md:col-span-2">
        <Image
          src={product.image}
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="col-span-full flex w-full flex-col justify-center pt-8 md:col-span-1 md:pt-0 xl:px-12">
        <h1 className="text-xl font-bold leading-tight md:text-2xl lg:text-3xl">
          {product.title}
        </h1>

        <p className="md:text-md mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {FormatCurrency(product.price)}
          </span>
          <span className="w-full text-sm text-zinc-400 sm:flex">
            Em até 12x s/ juros de {FormatCurrency(product.price / 12, true)}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              GG
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white "
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
