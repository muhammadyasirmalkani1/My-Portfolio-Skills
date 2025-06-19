"use client"

import { AlertCircle, RefreshCw, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export type ErrorType = "api" | "validation" | "network" | "server" | "unknown"

interface ErrorDisplayProps {
  type: ErrorType
  title?: string
  message?: string
  onRetry?: () => void
  showHomeLink?: boolean
}

export default function ErrorDisplay({ type, title, message, onRetry, showHomeLink = true }: ErrorDisplayProps) {
  // Default error messages based on type
  const defaultTitles: Record<ErrorType, string> = {
    api: "Service Connection Error",
    validation: "Form Validation Error",
    network: "Network Connection Error",
    server: "Server Error",
    unknown: "Something Went Wrong",
  }

  const defaultMessages: Record<ErrorType, string> = {
    api: "We couldn't connect to our email service. Please try again later or contact support if the problem persists.",
    validation: "There was an issue with the information you provided. Please check your inputs and try again.",
    network: "Please check your internet connection and try again.",
    server: "Our server encountered an error. Our team has been notified and is working on a fix.",
    unknown: "An unexpected error occurred. Please try again or contact support if the problem persists.",
  }

  const errorTitle = title || defaultTitles[type]
  const errorMessage = message || defaultMessages[type]

  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-900/50 dark:bg-red-900/20">
      <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">
        <div className="mb-4 rounded-full bg-red-100 p-3 dark:bg-red-900/30 sm:mb-0 sm:mr-4">
          <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium text-red-800 dark:text-red-300">{errorTitle}</h3>
          <p className="mt-1 text-sm text-red-700 dark:text-red-400">{errorMessage}</p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            {onRetry && (
              <Button
                variant="outline"
                size="sm"
                onClick={onRetry}
                className="border-red-300 bg-white text-red-700 hover:bg-red-50 dark:border-red-800 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
            )}
            {showHomeLink && (
              <Link href="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-300 bg-white text-red-700 hover:bg-red-50 dark:border-red-800 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return Home
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
