export default function Loading() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-16 max-w-6xl mx-auto">
      {/* Header Skeleton */}
      <div className="pt-8 md:pt-12 animate-pulse">
        <div className="h-12 md:h-16 w-64 md:w-96 bg-surface-elevated rounded-lg mx-auto mb-4" />
        <div className="h-4 w-48 bg-surface-elevated rounded mx-auto" />
      </div>

      {/* View Toggle Skeleton */}
      <div className="flex justify-end pt-6 animate-pulse">
        <div className="h-10 w-32 bg-surface-elevated rounded-lg" />
      </div>

      {/* Tabs Skeleton */}
      <div className="flex justify-center gap-4 pt-8 animate-pulse">
        <div className="h-12 w-28 bg-surface-elevated rounded-lg" />
        <div className="h-12 w-28 bg-surface-elevated rounded-lg" />
        <div className="h-12 w-28 bg-surface-elevated rounded-lg" />
      </div>

      {/* Content Grid Skeleton */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 pt-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-1 animate-pulse">
            <div className="h-8 w-32 bg-surface-elevated rounded-lg mb-6" />
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((j) => (
                <div key={j} className="bg-surface-elevated rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-surface rounded-full" />
                    <div className="flex-1">
                      <div className="h-4 w-32 bg-surface rounded mb-2" />
                      <div className="h-3 w-20 bg-surface rounded" />
                    </div>
                    <div className="h-6 w-16 bg-surface rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Skeleton */}
      <div className="pt-12 pb-8 animate-pulse">
        <div className="h-4 w-48 bg-surface-elevated rounded mx-auto" />
      </div>
    </main>
  );
}
