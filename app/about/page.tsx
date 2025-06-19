import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm">
                  About Me
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Journey & Passion</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A dedicated professional with a passion for creating exceptional digital experiences.
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hello! I'm a creative developer and designer with over 5 years of experience in building beautiful,
                  functional websites and applications. My journey in the digital world began with a fascination for how
                  technology and design intersect to create meaningful user experiences.
                </p>
                <p>
                  I specialize in front-end development, UI/UX design, and creating responsive, accessible web
                  applications. My approach combines technical expertise with creative problem-solving to deliver
                  solutions that not only look great but also perform exceptionally well.
                </p>
                <p>
                  When I'm not coding or designing, you can find me exploring new technologies, contributing to
                  open-source projects, or sharing my knowledge through writing and mentoring.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Get in Touch
                  </Button>
                </Link>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/img/Installation.png?height=800&width=600"
                  alt="Professional portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">My Values</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                The principles that guide my work and professional relationships.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/20 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-purple-500"
                >
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="text-center text-muted-foreground">
                Striving for the highest quality in every project, paying attention to every detail.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/20 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-purple-500"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Integrity</h3>
              <p className="text-center text-muted-foreground">
                Maintaining honesty and transparency in all client relationships and business practices.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/20 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-purple-500"
                >
                  <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                  <path d="M12 13v8" />
                  <path d="M12 3v3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-center text-muted-foreground">
                Embracing new technologies and creative approaches to solve complex problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Education & Certifications</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                My academic background and professional qualifications.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-3xl gap-6 py-12">
            <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
                <div className="text-sm text-muted-foreground">2015 - 2019</div>
              </div>
              <p className="text-muted-foreground">University of Technology</p>
            </div>
            <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">UI/UX Design Certification</h3>
                <div className="text-sm text-muted-foreground">2020</div>
              </div>
              <p className="text-muted-foreground">Design Institute</p>
            </div>
            <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Advanced Web Development</h3>
                <div className="text-sm text-muted-foreground">2021</div>
              </div>
              <p className="text-muted-foreground">Tech Academy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
