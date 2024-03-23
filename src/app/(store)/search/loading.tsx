'use client'
import { Skeleton } from '@/components/skeleton'
import { useSearchParams } from 'next/navigation'

export default function SearchLoading() {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <Skeleton className="h-largeOneSkeleton" />
        <Skeleton className="h-largeOneSkeleton" />
        <Skeleton className="h-largeOneSkeleton" />
        <Skeleton className="h-largeOneSkeleton" />
        <Skeleton className="h-largeOneSkeleton" />
        <Skeleton className="h-largeOneSkeleton" />
      </div>
    </div>
  )
}
