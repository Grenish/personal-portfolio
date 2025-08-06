export default function BlogsLoading() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-3xl md:text-4xl font-light text-gray-100 mb-4">
            Blogs
          </h1>
          <p className="text-base text-gray-400 max-w-2xl">
            Exploring the intersection of code, design, and human experience through 
            technical articles and thoughtful reflections.
          </p>
        </header>

        {/* Loading skeleton */}
        <div className="space-y-12">
          <section>
            {/* Year Header Skeleton */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-3 bg-gray-900 rounded-md w-12 animate-pulse"></div>
              <div className="flex-1 h-px bg-gray-900"></div>
            </div>

            {/* Articles Skeleton */}
            <div className="space-y-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="py-6 border-b border-gray-900 animate-pulse">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1 space-y-2">
                      {/* Date and metadata skeleton */}
                      <div className="flex items-center gap-2">
                        <div className="h-3 bg-gray-900 rounded-md w-12"></div>
                        <div className="h-3 bg-gray-900 rounded-md w-1"></div>
                        <div className="h-3 bg-gray-900 rounded-md w-8"></div>
                      </div>

                      {/* Title skeleton */}
                      <div className="h-6 bg-gray-900 rounded-md w-3/4"></div>

                      {/* Description skeleton */}
                      <div className="space-y-1">
                        <div className="h-4 bg-gray-900 rounded-md w-full"></div>
                        <div className="h-4 bg-gray-900 rounded-md w-2/3"></div>
                      </div>

                      {/* Tag skeleton */}
                      <div className="h-3 bg-gray-900 rounded-md w-16"></div>
                    </div>

                    {/* Arrow indicator skeleton */}
                    <div className="w-8 h-8 bg-gray-900 rounded-full animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Pagination skeleton */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <div className="w-10 h-10 bg-gray-900 rounded-full animate-pulse"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-8 h-8 bg-gray-900 rounded-lg animate-pulse"></div>
          ))}
          <div className="w-10 h-10 bg-gray-900 rounded-full animate-pulse"></div>
        </div>

        {/* Footer skeleton */}
        <footer className="mt-16 pt-8 border-t border-gray-900">
          <div className="flex items-center justify-between">
            <div className="h-3 bg-gray-900 rounded-md w-48 animate-pulse"></div>
            <div className="h-3 bg-gray-900 rounded-md w-24 animate-pulse"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}