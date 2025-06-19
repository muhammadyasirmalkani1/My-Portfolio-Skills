import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function SkillsPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Skills & Expertise
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl">
                A comprehensive overview of my technical skills, tools, and areas of expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="technical" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="design">Design Skills</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="technical" className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Frontend Development</h3>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <Progress value={95} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">React & Next.js</h3>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">TypeScript</h3>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">CSS & Tailwind</h3>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <Progress value={95} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Backend Development</h3>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Database Management</h3>
                    <span className="text-sm text-muted-foreground">70%</span>
                  </div>
                  <Progress value={70} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Technologies & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>HTML5</Badge>
                  <Badge>CSS3</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Redux</Badge>
                  <Badge>GraphQL</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>Git</Badge>
                  <Badge>GitHub</Badge>
                  <Badge>CI/CD</Badge>
                  <Badge>Jest</Badge>
                  <Badge>React Testing Library</Badge>
                  <Badge>Webpack</Badge>
                  <Badge>Vite</Badge>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="design" className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">UI Design</h3>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">UX Design</h3>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Wireframing & Prototyping</h3>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <Progress value={95} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Responsive Design</h3>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <Progress value={95} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Graphic Design</h3>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <Progress value={80} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Animation</h3>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Design Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Figma</Badge>
                  <Badge>Adobe XD</Badge>
                  <Badge>Sketch</Badge>
                  <Badge>Photoshop</Badge>
                  <Badge>Illustrator</Badge>
                  <Badge>InVision</Badge>
                  <Badge>Framer</Badge>
                  <Badge>Zeplin</Badge>
                  <Badge>Principle</Badge>
                  <Badge>After Effects</Badge>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="soft" className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Communication</h3>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <Progress value={95} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Problem Solving</h3>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Teamwork</h3>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <Progress value={95} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Time Management</h3>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Adaptability</h3>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Leadership</h3>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2 bg-gray-200 dark:bg-gray-800" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Professional Attributes</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col space-y-2 rounded-lg border p-4">
                    <h4 className="font-medium">Critical Thinking</h4>
                    <p className="text-sm text-muted-foreground">
                      Analyzing situations from multiple perspectives to find optimal solutions.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2 rounded-lg border p-4">
                    <h4 className="font-medium">Client Communication</h4>
                    <p className="text-sm text-muted-foreground">
                      Effectively translating technical concepts for non-technical stakeholders.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2 rounded-lg border p-4">
                    <h4 className="font-medium">Project Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Planning, executing, and closing projects efficiently and on schedule.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2 rounded-lg border p-4">
                    <h4 className="font-medium">Continuous Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Staying updated with the latest technologies and industry trends.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Continuous Learning</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                I'm committed to expanding my knowledge and staying current with industry trends.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-3">
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">Current Focus</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-purple-500">Web3 Development</Badge>
                <Badge className="bg-purple-500">AI Integration</Badge>
                <Badge className="bg-purple-500">Performance Optimization</Badge>
              </div>
              <p className="text-muted-foreground">
                Exploring emerging technologies to create innovative solutions for complex problems.
              </p>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">Recent Courses</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Advanced React Patterns</li>
                <li>Serverless Architecture</li>
                <li>Accessibility in Web Design</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">Community Involvement</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Open Source Contributor</li>
                <li>Tech Meetup Organizer</li>
                <li>Mentor for Junior Developers</li>
                <li>Technical Blog Writer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Work Together?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Let's combine my skills with your vision to create something amazing.
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
