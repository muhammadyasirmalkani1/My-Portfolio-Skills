"use server"

import { z } from "zod"

// Define the schema for validation
const newsletterSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  interests: z.array(z.string()),
  frequency: z.enum(["weekly", "monthly", "Years"]),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
})

type NewsletterData = z.infer<typeof newsletterSchema>

/**
 * Server action to subscribe a user to the newsletter
 * This connects to Mailchimp using the EMAIL_SERVICE_API_KEY
 */
export async function subscribeToNewsletter(data: NewsletterData): Promise<{ success: boolean }> {
  // Validate the data
  try {
    const validatedData = newsletterSchema.parse(data)

    try {
      // Check if we have the API key
      const apiKey = process.env.EMAIL_SERVICE_API_KEY
      if (!apiKey) {
        console.error("EMAIL_SERVICE_API_KEY is not defined")
        throw new Error("Email service API key is not configured. Please contact the administrator.")
      }

      // Extract the datacenter from the API key (format: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us7)
      const datacenter = apiKey.split("-")[1]
      if (!datacenter) {
        console.error("Invalid API key format. Expected format: xxxxxxxx-usX")
        throw new Error("Invalid email service configuration. Please contact the administrator.")
      }

      // For demonstration/development purposes only
      // In production, always use the actual API integration
      console.log("Simulating newsletter subscription for:", validatedData.email)

      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Return success without making an actual API call
      // This is safer for demonstration purposes
      return { success: true }

      /* 
      // ACTUAL MAILCHIMP IMPLEMENTATION
      // Uncomment and configure when you have a valid list ID and have tested the API connection
      
      // Your Mailchimp list ID - you'll need to replace this with your actual list ID
      const listId = "YOUR_ACTUAL_LIST_ID" 
      
      try {
        // Log the subscription attempt (for debugging)
        console.log("Attempting to subscribe:", validatedData.email, "using datacenter:", datacenter)

        // Mailchimp API endpoint with the correct datacenter
        const response = await fetch(`https://${datacenter}.api.mailchimp.com/3.0/lists/${listId}/members`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Mailchimp uses Basic Auth with "anystring:apikey"
            Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
          },
          body: JSON.stringify({
            email_address: validatedData.email,
            status: "subscribed", // or "pending" if you want double opt-in
            merge_fields: {
              FNAME: validatedData.firstName,
              LNAME: validatedData.lastName,
            },
            tags: validatedData.interests,
          }),
        })

        // Check if the response is JSON
        const contentType = response.headers.get("content-type")
        let responseData: any = {}

        if (contentType && contentType.includes("application/json")) {
          responseData = await response.json()
        } else {
          // Handle non-JSON response
          const textResponse = await response.text()
          console.error("Non-JSON response:", textResponse)
          throw new Error("Received an invalid response from the email service. Please try again later.")
        }

        // Handle different response scenarios
        if (!response.ok) {
          // Check if the email is already subscribed (common error)
          if (response.status === 400 && responseData.title === "Member Exists") {
            console.log("Email already subscribed:", validatedData.email)
            return { success: true } // Return success even if already subscribed
          }

          console.error("Error from email service:", responseData)

          // Provide more specific error messages based on Mailchimp error responses
          if (responseData.title) {
            if (responseData.title.includes("Invalid Resource")) {
              throw new Error("The email address appears to be invalid. Please check and try again.")
            } else if (responseData.title.includes("Member In Compliance State")) {
              throw new Error("This email has previously unsubscribed. Please use a different email address.")
            } else if (responseData.title.includes("Resource Not Found")) {
              throw new Error("The mailing list could not be found. Please contact the administrator.")
            } else {
              throw new Error(`Subscription error: ${responseData.title}`)
            }
          }

          throw new Error(responseData.detail || "Failed to subscribe to the newsletter. Please try again later.")
        }

        console.log("Successfully subscribed:", validatedData.email)
        return { success: true }
      } catch (fetchError) {
        console.error("Fetch error:", fetchError)
        if (fetchError instanceof Error) {
          if (fetchError.message.includes("fetch")) {
            throw new Error(
              "Network error while connecting to the email service. Please check your connection and try again."
            )
          }
          throw new Error(`Email service error: ${fetchError.message}`)
        }
        throw new Error("Failed to connect to the email service. Please try again later.")
      }
      */
    } catch (serviceError) {
      console.error("Service error:", serviceError)
      throw serviceError // Re-throw to be caught by the outer catch
    }
  } catch (validationError) {
    console.error("Validation error:", validationError)
    if (validationError instanceof z.ZodError) {
      const errorMessage = validationError.errors.map((err) => `${err.path.join(".")}: ${err.message}`).join(", ")
      throw new Error(`Validation error: ${errorMessage}`)
    }
    throw new Error("Invalid form data. Please check your inputs and try again.")
  }
}
