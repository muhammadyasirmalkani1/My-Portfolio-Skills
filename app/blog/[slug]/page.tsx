import { notFound } from "next/navigation"
import Image from "next/image"
import { Calendar, Clock, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import BlogSidebar from "@/components/blog-sidebar"
import { blogPosts } from "@/lib/blog-data"
import Link from "next/link"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.categories.some((category) => post.categories.includes(category)))
    .slice(0, 3)

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {post.categories.map((category) => (
                  <Link href={`/blog?category=${category}`} key={category}>
                    <Badge className="bg-purple-500">{category}</Badge>
                  </Link>
                ))}
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">{post.title}</h1>
              <p className="text-gray-300 md:text-xl">{post.excerpt}</p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300 mt-4">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <article className="prose prose-lg dark:prose-invert max-w-none">
                <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
                  <Image src={post.coverImage || "/img/2.svg"} alt={post.title} fill className="object-cover" />
                </div>

                <div dangerouslySetInnerHTML={{ __html: post.content }} />

                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="flex items-center text-sm text-muted-foreground">
                    <Tag className="mr-1 h-4 w-4" /> Tags:
                  </span>
                  {post.categories.map((category) => (
                    <Link href={`/blog?category=${category}`} key={category}>
                      <Badge variant="outline">{category}</Badge>
                    </Link>
                  ))}
                </div>
              </article>

              {relatedPosts.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        key={relatedPost.slug}
                        className="group rounded-lg border p-4 transition-colors hover:bg-muted"
                      >
                        <div className="relative aspect-video overflow-hidden rounded-md mb-3">
                          <Image
                            src={relatedPost.coverImage || "/img/3.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <h3 className="line-clamp-2 font-medium group-hover:text-purple-500">{relatedPost.title}</h3>
                      </Link>
                    ))}
                  </div>
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
