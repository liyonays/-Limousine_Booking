"use client"

import type React from "react"

import { useState } from "react"
import { Save } from "lucide-react"

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    companyName: "Elite Limousine",
    email: "info@elitelimo.com",
    phone: "(555) 123-4567",
    address: "123 Luxury Ave, Suite 100, New York, NY 10001",
    whatsapp: "+15551234567",
    facebook: "https://facebook.com/elitelimo",
    instagram: "https://instagram.com/elitelimo",
    description: "Premium luxury transportation services for weddings, corporate events, and special occasions.",
  })

  const [saved, setSaved] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
    console.log("Settings saved:", settings)
  }

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your company information and social media</p>
      </div>

      {/* Form */}
      <div className="bg-card rounded-lg p-6 border border-border shadow-md space-y-6 max-w-2xl">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={settings.companyName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Description</label>
              <textarea
                name="description"
                value={settings.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-border pt-6">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={settings.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={settings.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-border pt-6">
          <h3 className="text-xl font-bold mb-4">Social Media & Messaging</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">WhatsApp Number</label>
              <input
                type="tel"
                name="whatsapp"
                value={settings.whatsapp}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Facebook URL</label>
              <input
                type="text"
                name="facebook"
                value={settings.facebook}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Instagram URL</label>
              <input
                type="text"
                name="instagram"
                value={settings.instagram}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="border-t border-border pt-6 flex gap-4">
          <button
            onClick={handleSave}
            className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Save size={18} /> Save Changes
          </button>
          {saved && <p className="text-green-600 font-semibold">Settings saved successfully!</p>}
        </div>
      </div>
    </div>
  )
}
