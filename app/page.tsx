import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Briefcase, Zap, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                  Creative Developer & Designer
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Transforming ideas into exceptional digital experiences with cutting-edge technology and creative
                  design.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full border-4 border-purple-500 glow-purple">
                <Image
                  src="/img/placeholder.svg?height=400&width=400"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm">
                Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What I Can Do For You?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Read Specialized services tailored to meet your digital needs with precision and creativity.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/20 p-4">
                <Code className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold">Web Development</h3>
              <p className="text-center text-muted-foreground">
                Custom element websites and applications built with modern technologies and best practices.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/20 p-4">
                <Briefcase className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold">UI/UX Design</h3>
              <p className="text-center text-muted-foreground">
                Intuitive and engaging user interfaces designed for optimal user experience.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/20 p-4">
                <Zap className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold">Performance Optimization</h3>
              <p className="text-center text-muted-foreground">
                Speed up your digital products for better user engagement and conversion rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center space-y-2 border-r border-gray-200 dark:border-gray-800 px-4 py-6">
              <div className="text-4xl font-bold text-red-500">5+</div>
              <div className="text-sm font-medium text-muted-foreground">Years Experience</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 border-r border-gray-200 dark:border-gray-800 px-4 py-6">
              <div className="text-4xl font-bold text-golden-500">100+</div>
              <div className="text-sm font-medium text-muted-foreground">Projects Completed</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 border-r border-gray-200 dark:border-gray-800 px-4 py-6">
              <div className="text-4xl font-bold text-purple-500">50+</div>
              <div className="text-sm font-medium text-muted-foreground">Happy Clients</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 px-4 py-6">
              <div className="text-4xl font-bold text-yellow-500">15+</div>
              <div className="text-sm font-medium text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Clients Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Hear from satisfied clients about their experience working with me.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-0.5">
                  <Star className="h-5 w-5 fill-purple-500 text-purple-500" />
                  <Star className="h-5 w-5 fill-purple-500 text-purple-500" />
                  <Star className="h-5 w-5 fill-purple-500 text-purple-500" />
                  <Star className="h-5 w-5 fill-purple-500 text-purple-500" />
                  <Star className="h-5 w-5 fill-purple-500 text-purple-500" />
                </div>
                <p className="text-muted-foreground">
                  "Working with this developer was an absolute pleasure. They delivered a stunning website that
                  perfectly captured our brand identity."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-muted p-1">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800" />
                </div>
                <div>
                  <p className="text-sm font-medium">Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">CEO, TechStart</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-0.5">
                  <Star className="h-5 w-5 fill-purple-500 text-purple-500" />
                  <Star className="h-5 w-5 fill-purple-500 text-purple-500" />
                  <Star className="h-5 w-5 fill-purple-500 text-purple-500" />
                  <Star className="h-5 w-5 fill-purple-500 text-purple-500" />
                  <Star className="h-5 w-5 fill-purple-500 text-purple-500" />
                </div>
                <p className="text-muted-foreground">
                  "Exceptional work! The attention to detail and creative solutions provided exceeded our expectations.
                  Highly recommended!"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-muted p-1">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800" />
                </div>
                <div>
                  <p className="text-sm font-medium">Michael Chen</p>
                  <p className="text-xs text-muted-foreground">Marketing Director, Innovate Inc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                Ready to Start Your Project?
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Let's collaborate to bring your vision to life with cutting-edge technology and creative design.
              </p>
            </div>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
