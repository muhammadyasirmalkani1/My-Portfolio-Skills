import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/blog-data"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article
      className={`group rounded-lg border overflow-hidden transition-colors hover:bg-muted ${featured ? "sm:col-span-2" : ""}`}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.coverImage || "/img/2.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.slice(0, 2).map((category) => (
              <Badge key={category} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
            {post.categories.length > 2 && (
              <Badge variant="secondary" className="text-xs">
                +{post.categories.length - 2}
              </Badge>
            )}
          </div>
          <h3
            className={`${featured ? "text-2xl" : "text-xl"} font-bold line-clamp-2 group-hover:text-purple-500 mb-2`}
          >
            {post.title}
          </h3>
          <p className="line-clamp-3 text-muted-foreground mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
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
      </Link>
    </article>
  )
}
