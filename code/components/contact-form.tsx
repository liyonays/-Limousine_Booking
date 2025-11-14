"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MessageSquare } from "lucide-react"

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  if (submitted) {
    return (
      <div className="bg-card rounded-lg p-8 border border-border shadow-lg text-center space-y-4">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-accent">Message Sent!</h3>
        <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you as soon as possible.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 border border-border shadow-lg space-y-6">
      <h3 className="text-2xl font-bold">Send Us a Message</h3>

      {/* Name */}
      <div>
        <label className="block text-sm font-semibold mb-2">Your Name*</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="John Doe"
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
          <Mail size={16} className="text-accent" />
          Email Address*
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="your@email.com"
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
          <Phone size={16} className="text-accent" />
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="(555) 123-4567"
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-semibold mb-2">Subject*</label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          required
        >
          <option value="">Select a subject</option>
          <option value="booking">Booking Inquiry</option>
          <option value="pricing">Pricing Question</option>
          <option value="special-request">Special Request</option>
          <option value="complaint">Complaint</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
          <MessageSquare size={16} className="text-accent" />
          Message*
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell us how we can help..."
          rows={5}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          required
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
      >
        Send Message
      </button>
    </form>
  )
}
