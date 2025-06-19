import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import BlogCard from "@/components/blog-card"
import BlogSidebar from "@/components/blog-sidebar"
import { blogPosts } from "@/lib/blog-data"

export const metadata = {
  title: "Blog | Professional Portfolio",
  description: "Insights, tutorials, and thoughts on web development and design",
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string }
}) {
  const category = searchParams.category
  const searchQuery = searchParams.search?.toLowerCase()

  // Filter posts by category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = !category || post.categories.includes(category)
    const matchesSearch =
      !searchQuery || post.title.toLowerCase().includes(searchQuery) || post.excerpt.toLowerCase().includes(searchQuery)

    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Blog & Insights
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl">
                Thoughts, tutorials, and insights on web development, design, and technology.
              </p>
            </div>
            <div className="w-full max-w-md">
              <form className="relative" action="/blog">
                <Input
                  type="search"
                  name="search"
                  placeholder="Search articles..."
                  className="pr-10"
                  defaultValue={searchQuery || ""}
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="ghost"
                  className="absolute right-0 top-0 h-full px-3 text-muted-foreground"
                >
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {category && (
                <div className="mb-8 flex items-center gap-2">
                  <h2 className="text-xl font-bold">Category:</h2>
                  <Badge className="bg-purple-500">{category}</Badge>
                  <Button variant="link" asChild className="ml-auto">
                    <a href="/blog">Clear filter</a>
                  </Button>
                </div>
              )}

              {searchQuery && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold">
                    Search results for: <span className="text-purple-500">{searchQuery}</span>
                  </h2>
                  <Button variant="link" asChild className="px-0">
                    <a href="/blog">Clear search</a>
                  </Button>
                </div>
              )}

              {filteredPosts.length === 0 ? (
                <div className="rounded-lg border border-dashed p-10 text-center">
                  <h3 className="text-lg font-medium">No posts found</h3>
                  <p className="mt-2 text-muted-foreground">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                </div>
              ) : (
                <div className="grid gap-8 sm:grid-cols-2">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              )}
            </div>
            <div className="space-y-8">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
