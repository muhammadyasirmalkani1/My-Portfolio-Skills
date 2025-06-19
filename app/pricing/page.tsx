import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Transparent Pricing
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl">
                Flexible options tailored to your project needs with no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="monthly" className="w-full max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly (Save 20%)</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="monthly" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>Basic</CardTitle>
                    <CardDescription>Perfect for small projects and startups</CardDescription>
                    <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                      $999
                      <span className="ml-1 text-xl font-normal text-muted-foreground">/project</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>5-page responsive website</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Basic SEO optimization</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Contact form integration</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Mobile responsive design</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>2 rounds of revisions</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full">Get Started</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col border-purple-500">
                  <CardHeader>
                    <div className="py-1 px-3 text-xs bg-purple-500 text-white rounded-full w-fit mb-2">
                      Most Popular
                    </div>
                    <CardTitle>Professional</CardTitle>
                    <CardDescription>For businesses needing a complete online presence</CardDescription>
                    <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                      $2,499
                      <span className="ml-1 text-xl font-normal text-muted-foreground">/project</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>10-page responsive website</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Advanced SEO optimization</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>E-commerce functionality</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Content management system</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Social media integration</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>4 rounds of revisions</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>1 month of support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                        Get Started
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <CardDescription>Custom solutions for large businesses</CardDescription>
                    <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                      Custom
                      <span className="ml-1 text-xl font-normal text-muted-foreground">/project</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Custom web application</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Advanced functionality</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Database integration</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>User authentication</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>API development</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Unlimited revisions</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>3 months of support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full">Contact for Quote</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="yearly" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>Basic</CardTitle>
                    <CardDescription>Perfect for small projects and startups</CardDescription>
                    <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                      $9,590
                      <span className="ml-1 text-xl font-normal text-muted-foreground">/year</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Save $2,398 with annual billing</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>5-page responsive website</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Basic SEO optimization</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Contact form integration</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Mobile responsive design</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>2 rounds of revisions</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Quarterly maintenance</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full">Get Started</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col border-purple-500">
                  <CardHeader>
                    <div className="py-1 px-3 text-xs bg-purple-500 text-white rounded-full w-fit mb-2">
                      Most Popular
                    </div>
                    <CardTitle>Professional</CardTitle>
                    <CardDescription>For businesses needing a complete online presence</CardDescription>
                    <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                      $23,990
                      <span className="ml-1 text-xl font-normal text-muted-foreground">/year</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Save $5,998 with annual billing</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>10-page responsive website</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Advanced SEO optimization</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>E-commerce functionality</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Content management system</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Social media integration</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>4 rounds of revisions</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Monthly maintenance</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                        Get Started
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <CardDescription>Custom solutions for large businesses</CardDescription>
                    <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                      Custom
                      <span className="ml-1 text-xl font-normal text-muted-foreground">/year</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Custom web application</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Advanced functionality</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Database integration</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>User authentication</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>API development</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Unlimited revisions</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Priority support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full">Contact for Quote</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Additional Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Enhance your project with these specialized services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col space-y-2 rounded-lg border p-6">
              <h3 className="text-xl font-bold">SEO Optimization</h3>
              <p className="text-muted-foreground">From $499</p>
              <p className="text-sm text-muted-foreground">
                Improve your search engine rankings and drive more organic traffic to your website.
              </p>
            </div>
            <div className="flex flex-col space-y-2 rounded-lg border p-6">
              <h3 className="text-xl font-bold">Content Creation</h3>
              <p className="text-muted-foreground">From $299</p>
              <p className="text-sm text-muted-foreground">
                Professional copywriting services to engage your audience and convey your message effectively.
              </p>
            </div>
            <div className="flex flex-col space-y-2 rounded-lg border p-6">
              <h3 className="text-xl font-bold">Logo Design</h3>
              <p className="text-muted-foreground">From $399</p>
              <p className="text-sm text-muted-foreground">
                Create a memorable brand identity with a custom-designed logo.
              </p>
            </div>
            <div className="flex flex-col space-y-2 rounded-lg border p-6">
              <h3 className="text-xl font-bold">Performance Optimization</h3>
              <p className="text-muted-foreground">From $349</p>
              <p className="text-sm text-muted-foreground">
                Speed up your website for better user experience and improved search rankings.
              </p>
            </div>
            <div className="flex flex-col space-y-2 rounded-lg border p-6">
              <h3 className="text-xl font-bold">Maintenance Plan</h3>
              <p className="text-muted-foreground">From $199/month</p>
              <p className="text-sm text-muted-foreground">
                Keep your website secure, updated, and running smoothly with regular maintenance.
              </p>
            </div>
            <div className="flex flex-col space-y-2 rounded-lg border p-6">
              <h3 className="text-xl font-bold">Analytics Setup</h3>
              <p className="text-muted-foreground">From $249</p>
              <p className="text-sm text-muted-foreground">
                Track your website's performance with detailed analytics and reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Answers to common questions about my services and pricing.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl py-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is your payment schedule?</AccordionTrigger>
                <AccordionContent>
                  I typically require a 50% deposit to begin work, with the remaining 50% due upon project completion.
                  For larger projects, we can arrange milestone payments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How long does a typical project take?</AccordionTrigger>
                <AccordionContent>
                  Project timelines vary based on complexity and scope. A basic website might take 2-4 weeks, while more
                  complex projects can take 2-3 months. I'll provide a detailed timeline during our initial
                  consultation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you offer rush services?</AccordionTrigger>
                <AccordionContent>
                  Yes, I can accommodate rush projects for an additional fee, depending on my current workload and the
                  project requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What if I need changes after the project is complete?</AccordionTrigger>
                <AccordionContent>
                  Minor changes are included within the revision rounds specified in your package. Additional revisions
                  or changes after project completion are billed at my hourly rate or can be covered by a maintenance
                  plan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you provide hosting services?</AccordionTrigger>
                <AccordionContent>
                  I don't provide hosting directly, but I can recommend reliable hosting providers and help you set up
                  your hosting environment. I can also manage your hosting as part of a maintenance plan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Can you work with my existing website?</AccordionTrigger>
                <AccordionContent>
                  Yes, I can work with your existing website to make improvements, add features, or completely redesign
                  it while preserving your content and SEO value.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Have More Questions? Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
