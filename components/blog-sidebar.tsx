import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

// Get all unique categories from blog posts
const allCategories = Array.from(new Set(blogPosts.flatMap((post) => post.categories))).sort()

// Get recent posts (last 4)
const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4)

export default function BlogSidebar() {
  return (
    <aside className="space-y-8">
      <div className="rounded-lg border p-6">
        <h3 className="text-lg font-bold mb-4">Search</h3>
        <form action="/blog" className="relative">
          <Input type="search" name="search" placeholder="Search articles..." className="pr-10" />
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

      <div className="rounded-lg border p-6">
        <h3 className="text-lg font-bold mb-4">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {allCategories.map((category) => (
            <Link href={`/blog?category=${category}`} key={category}>
              <Badge variant="outline" className="hover:bg-secondary">
                {category}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="flex gap-3 group">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                <Image src={post.coverImage || "/img/3.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div>
                <h4 className="line-clamp-2 text-sm font-medium group-hover:text-purple-500">{post.title}</h4>
                <p className="text-xs text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-gradient-to-br from-purple-900 to-pink-900 p-6 text-white">
        <h3 className="text-lg font-bold mb-2">Subscribe to Newsletter</h3>
        <p className="text-sm mb-4">
          Get the latest articles and resources sent straight to your inbox. Never miss an update!
        </p>
        <Link href="/newsletter">
          <Button className="w-full bg-white text-purple-900 hover:bg-white/90">Join 5,000+ Subscribers</Button>
        </Link>
      </div>
    </aside>
  )
}
