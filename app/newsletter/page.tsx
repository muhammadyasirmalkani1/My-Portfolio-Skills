import type { Metadata } from "next"
import NewsletterForm from "@/components/newsletter-form"
import { CheckCircle, Mail, Zap, Bell, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Newsletter | Professional Portfolio",
  description: "Subscribe to my newsletter for the latest insights on web development and design",
}

export default function NewsletterPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Join My Newsletter
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl">
                Get the latest insights, tutorials, and updates on web development and design delivered straight to your
                inbox.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Subscribe?</h2>
                <p className="text-muted-foreground md:text-xl">
                  Stay ahead of the curve with exclusive content and insights that I don't share anywhere else.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-100 dark:bg-purple-900/20 p-3">
                    <Zap className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Cutting-Edge Techniques</h3>
                    <p className="text-muted-foreground">
                      Learn about the latest frameworks, tools, and methodologies in web development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-100 dark:bg-purple-900/20 p-3">
                    <CheckCircle className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Practical Tutorials</h3>
                    <p className="text-muted-foreground">
                      Step-by-step guides to help you implement advanced features and solve common problems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-100 dark:bg-purple-900/20 p-3">
                    <Bell className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Industry Updates</h3>
                    <p className="text-muted-foreground">
                      Stay informed about important changes and trends in the web development landscape.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-100 dark:bg-purple-900/20 p-3">
                    <Shield className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Exclusive Content</h3>
                    <p className="text-muted-foreground">
                      Get access to resources, code snippets, and insights that I only share with subscribers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-100 dark:bg-purple-900/20 p-3">
                    <Mail className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">What to Expect</h3>
                    <ul className="mt-2 space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Bi-weekly newsletter with valuable insights</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Early access to new tutorials and articles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Exclusive tips and tricks not published on the blog</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Special offers on services and products</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-lg border p-8">
                <h3 className="text-2xl font-bold mb-6">Subscribe Now</h3>
                <NewsletterForm />
              </div>

              <div className="mt-8 rounded-lg border p-6">
                <h4 className="font-medium mb-2">Privacy Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  I respect your privacy and will never share your information with third parties. You can unsubscribe
                  at any time with a single click.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-4">What Subscribers Say</h4>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <p className="italic text-muted-foreground mb-2">
                      "This newsletter has been invaluable for keeping up with the fast-paced world of web development.
                      The tutorials are clear and practical."
                    </p>
                    <p className="text-sm font-medium">— Sarah K., Frontend Developer</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="italic text-muted-foreground mb-2">
                      "I've implemented several techniques from the newsletter that have significantly improved my
                      workflow. Highly recommended!"
                    </p>
                    <p className="text-sm font-medium">— Michael T., Full Stack Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Join a Community of Like-Minded Professionals
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Over 5,000 developers and designers already subscribe to my newsletter. Be part of a growing community
                dedicated to excellence in web development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
