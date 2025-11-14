"use client"

import { WhatsAppContact } from "./whatsapp-contact"

export function WhatsAppButton() {
  return (
    <WhatsAppContact
      phoneNumber="15551234567"
      message="Hi Elite Limousine, I'd like to inquire about your limousine services."
      variant="floating"
    />
  )
}
