const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function HomeSkeleton() {
    return (
      <>
        <div
          className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        </div>
      </>
    );
  }

export function CardQuoteSkeleton() {
  return (
    <>
      <div className="animate-pulse h-32 w-full rounded-md bg-color-fourth"></div>
      <div className="animate-pulse h-8 w-full mt-3 rounded-md bg-color-fourth"></div>
    </>
  )
}