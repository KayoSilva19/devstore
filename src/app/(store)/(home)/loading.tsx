import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid h-full grid-cols-9 grid-rows-6 gap-6">
      <Skeleton className="col-span-full h-minSkeleton sm:col-span-6 sm:row-span-6 md:h-midSkeleton lg:h-largeSkeleton xl:h-XlargeSkeleton" />
      <Skeleton className="col-span-full sm:col-span-3 sm:row-span-3" />
      <Skeleton className="col-span-full sm:col-span-3 sm:row-span-3" />
    </div>
  )
}
