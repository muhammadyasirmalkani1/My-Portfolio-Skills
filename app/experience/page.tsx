import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm">
                Professional Experience
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl">
                A timeline of my professional journey and the projects that have
                shaped my career.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="relative border-l border-gray-200 dark:border-gray-800 pl-8 pb-10">
              <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full -translate-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h2 className="text-2xl font-bold">
                    Senior Frontend Developer
                  </h2>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">2021 - Present</Badge>
                    <Badge className="bg-purple-500">Full-time</Badge>
                  </div>
                </div>
                <h3 className="text-xl font-medium">TechInnovate Solutions</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="text-xl font-medium">
                    Lead the frontend development team in creating responsive,
                    accessible web applications for enterprise clients.
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Architected and implemented a component library used
                      across multiple projects
                    </li>
                    <li>
                      Improved site performance by 40% through optimization
                      techniques
                    </li>
                    <li>
                      Mentored junior developers and conducted code reviews
                    </li>
                    <li>
                      Collaborated with designers to ensure pixel-perfect
                      implementation
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">GraphQL</Badge>
                </div>
              </div>
            </div>

            <div className="relative border-l border-gray-200 dark:border-gray-800 pl-8 pb-10">
              <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full -translate-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h2 className="text-2xl font-bold">
                    UI/UX Designer & Developer
                  </h2>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">2019 - 2021</Badge>
                    <Badge className="bg-purple-500">Full-time</Badge>
                  </div>
                </div>
                <h3 className="text-xl font-medium">Creative Digital Agency</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="text-xl font-medium">
                    {" "}
                    Designed and developed user interfaces for clients across
                    various industries, focusing on creating intuitive and
                    engaging user experiences.
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Created wireframes, prototypes, and high-fidelity designs
                    </li>
                    <li>
                      Implemented responsive designs using modern CSS techniques
                    </li>
                    <li>
                      Conducted user testing and incorporated feedback into
                      designs
                    </li>
                    <li>
                      Collaborated with marketing teams to ensure brand
                      consistency
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">HTML/CSS</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">User Testing</Badge>
                </div>
              </div>
            </div>

            <div className="relative border-l border-gray-200 dark:border-gray-800 pl-8">
              <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full -translate-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h2 className="text-2xl font-bold">Web Developer Intern</h2>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">2018 - 2019</Badge>
                    <Badge className="bg-purple-500">Internship</Badge>
                  </div>
                </div>
                <h3 className="text-xl font-medium">StartUp Tech</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="text-xl font-medium">
                    Assisted in the development of web applications and gained
                    hands-on experience with modern web technologies.
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Developed and maintained client websites</li>
                    <li>Assisted senior developers with complex projects</li>
                    <li>Participated in code reviews and team meetings</li>
                    <li>Learned industry best practices and workflows</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HTML/CSS</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">jQuery</Badge>
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">WordPress</Badge>
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
                Featured Projects
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                A selection of my most impactful work throughout my career.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                E-Commerce Platform Redesign
              </h3>
              <p className="text-muted-foreground">
                Completely redesigned and rebuilt the user interface for a major
                e-commerce platform, resulting in a 25% increase in conversion
                rates.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Stripe</Badge>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">Financial Dashboard</h3>
              <p className="text-muted-foreground">
                Developed an interactive dashboard for financial data
                visualization, allowing users to track investments and analyze
                market trends.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">D3.js</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Redux</Badge>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">Healthcare Patient Portal</h3>
              <p className="text-muted-foreground">
                Created an accessible patient portal for a healthcare provider,
                enabling patients to schedule appointments and access medical
                records.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">HIPAA Compliance</Badge>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">Mobile Fitness App</h3>
              <p className="text-muted-foreground">
                Designed and developed a cross-platform fitness application that
                tracks workouts, nutrition, and provides personalized
                recommendations.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React Native</Badge>
                <Badge variant="secondary">Firebase</Badge>
                <Badge variant="secondary">Redux</Badge>
                <Badge variant="secondary">Health APIs</Badge>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
