import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-1 items-center justify-center md:justify-start">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
           <Link href="http://linkedin.com/in/muhammadyasirmalkani/" className="text-muted-foreground hover:text-foreground">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="http://linkedin.com/in/muhammadyasirmalkani" className="text-muted-foreground hover:text-foreground"
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          <Link href="http://linkedin.com/in/muhammadyasirmalkani" className="text-muted-foreground hover:text-foreground"</a>
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
         </Link>
        </div>
      </div>
    </footer>
  )
}
