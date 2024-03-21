import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className="max-h-HomeProduct grid-rows-6 grid grid-cols-9 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-never-stop-learning.png"
          className="transition-transform duration-300 group-hover:scale-105"
          width={860}
          height={860}
          quality={100}
          alt=""
        />

        <div className="max-w-largeProductValue absolute bottom-28 right-28 flex h-12 items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">
            Moletom Moletom Never Stop Learning
          </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$299
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-ai-side.png"
          className="transition-transform duration-300 group-hover:scale-105"
          width={860}
          height={860}
          quality={100}
          alt=""
        />

        <div className="max-w-largeProductValue absolute bottom-10 right-10 flex h-12 items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">Moletom AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$179
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-ia-p-devs.png"
          className="transition-transform duration-300 group-hover:scale-105"
          width={860}
          height={860}
          quality={100}
          alt=""
        />

        <div className="max-w-largeProductValue absolute bottom-10 right-10 flex h-12 items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">Moletom IA P Devs</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$299
          </span>
        </div>
      </Link>
    </div>
  )
}
