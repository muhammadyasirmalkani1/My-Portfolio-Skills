"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import Link from "next/link"

export default function NewsletterError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Newsletter error:", error)
  }, [error])

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Newsletter Subscription Error
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl">
                We encountered a problem while processing your subscription.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-3xl">
          <div className="rounded-lg border border-red-200 bg-red-50 p-8 dark:border-red-900/50 dark:bg-red-900/20">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-full bg-red-100 p-4 dark:bg-red-900/30">
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
                  className="h-8 w-8 text-red-600 dark:text-red-400"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-red-800 dark:text-red-300 mb-2">Subscription Failed</h2>
              <p className="text-red-700 dark:text-red-400 mb-6 max-w-md">
                {error.message ||
                  "We couldn't process your newsletter subscription at this time. Please try again later."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={reset}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
                <Link href="/contact">
                  <Button variant="outline">Contact Support</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">Common Issues & Solutions</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border p-6">
                <h4 className="font-bold mb-2">Connection Issues</h4>
                <p className="text-muted-foreground mb-4">
                  If you're experiencing connection problems, please check your internet connection and try again.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h4 className="font-bold mb-2">Already Subscribed</h4>
                <p className="text-muted-foreground mb-4">
                  If you're already subscribed to our newsletter, you'll receive an email to update your preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
