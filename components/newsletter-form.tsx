"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { subscribeToNewsletter } from "@/lib/newsletter-actions"
import { Loader2 } from "lucide-react"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import ErrorDisplay, { type ErrorType } from "@/components/error-display"

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  interests: z.array(z.string()).min(1, { message: "Please select at least one interest." }),
  frequency: z.enum(["weekly", "monthly", "Years"], {
    required_error: "Please select a frequency.",
  }),
  agreeToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms and conditions." }),
  }),
})

type FormValues = z.infer<typeof formSchema>

interface ErrorState {
  type: ErrorType
  message: string
}

export default function NewsletterForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<ErrorState | null>(null)

  const form = useForm<FormValues, any, FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      interests: [],
      frequency: "weekly",
      agreeToTerms: true,
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    setError(null)

    try {
      // Call the server action to subscribe the user
      await subscribeToNewsletter(data)

      setIsSuccess(true)
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      })
    } catch (error) {
      console.error("Subscription error:", error)

      // Determine error type based on error message
      let errorType: ErrorType = "unknown"
      let errorMessage = "There was an error subscribing to the newsletter. Please try again."

      if (error instanceof Error) {
        errorMessage = error.message

        if (errorMessage.includes("network") || errorMessage.includes("fetch")) {
          errorType = "network"
        } else if (errorMessage.includes("validation") || errorMessage.includes("valid")) {
          errorType = "validation"
        } else if (errorMessage.includes("API") || errorMessage.includes("service")) {
          errorType = "api"
        } else if (errorMessage.includes("server")) {
          errorType = "server"
        }
      }

      setError({ type: errorType, message: errorMessage })

      toast({
        title: "Subscription failed",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRetry = () => {
    setError(null)
    form.reset()
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
        <div className="rounded-full bg-green-100 dark:bg-green-900/20 p-3 mb-2">
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
            className="h-6 w-6 text-green-600"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="text-xl font-bold">You're subscribed!</h3>
        <p className="text-muted-foreground">
          Thank you for subscribing to my newsletter. You'll receive a confirmation email shortly.
        </p>
        <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-4">
          Subscribe another email
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {error && (
          <div className="mb-6">
            <ErrorDisplay type={error.type} message={error.message} onRetry={handleRetry} showHomeLink={false} />
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john.doe@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="interests"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel>Interests</FormLabel>
                <FormDescription>Select the topics you're interested in.</FormDescription>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes("web-development")}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, "web-development"])
                              : field.onChange(field.value?.filter((value) => value !== "web-development"))
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">Web Development</FormLabel>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes("ui-ux-design")}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, "ui-ux-design"])
                              : field.onChange(field.value?.filter((value) => value !== "ui-ux-design"))
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">UI/UX Design</FormLabel>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes("javascript-frameworks")}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, "javascript-frameworks"])
                              : field.onChange(field.value?.filter((value) => value !== "javascript-frameworks"))
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">JavaScript Frameworks</FormLabel>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes("performance-optimization")}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, "performance-optimization"])
                              : field.onChange(field.value?.filter((value) => value !== "performance-optimization"))
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">Performance Optimization</FormLabel>
                    </FormItem>
                  )}
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="frequency"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Email Frequency</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="weekly" />
                    </FormControl>
                    <FormLabel className="font-normal">Weekly</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="monthly" />
                    </FormControl>
                    <FormLabel className="font-normal">Monthly</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="years" />
                    </FormControl>
                    <FormLabel className="font-normal">Years</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agreeToTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree to receive emails and accept the{" "}
                  <a href="#" className="text-purple-500 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-purple-500 hover:underline">
                    Privacy Policy
                  </a>
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Subscribing...
            </>
          ) : (
            "Subscribe to Newsletter"
          )}
        </Button>
      </form>
    </Form>
  )
}
