"use client"

import { MessageCircle } from "lucide-react"

interface WhatsAppContactProps {
  phoneNumber?: string
  message?: string
  label?: string
  variant?: "button" | "floating" | "link"
  className?: string
}

export function WhatsAppContact({
  phoneNumber = "15551234567",
  message = "Hi Elite Limousine, I'm interested in booking a limousine service.",
  label = "Chat on WhatsApp",
  variant = "button",
  className = "",
}: WhatsAppContactProps) {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40 flex items-center justify-center ${className}`}
        aria-label="Contact us on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    )
  }

  if (variant === "link") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-[#25D366] hover:underline font-semibold inline-flex items-center gap-2 ${className}`}
      >
        <MessageCircle size={18} />
        {label}
      </a>
    )
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-[#25D366] hover:bg-[#1FA855] text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors ${className}`}
      title="Chat on WhatsApp"
    >
      <MessageCircle size={20} />
      {label}
    </a>
  )
}
