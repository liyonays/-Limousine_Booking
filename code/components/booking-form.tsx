"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react"
import { WhatsAppContact } from "./whatsapp-contact"

interface BookingFormData {
  pickupLocation: string
  dropoffLocation: string
  pickupDate: string
  pickupTime: string
  serviceType: string
  vehicle: string
  passengers: number
  specialRequests: string
  firstName: string
  lastName: string
  email: string
  phone: string
}

export function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
    serviceType: "wedding",
    vehicle: "luxury-sedan",
    passengers: 1,
    specialRequests: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const serviceTypes = [
    { value: "wedding", label: "Wedding" },
    { value: "corporate", label: "Corporate Event" },
    { value: "airport", label: "Airport Transfer" },
    { value: "event", label: "Special Event" },
    { value: "other", label: "Other" },
  ]

  const vehicles = [
    { value: "luxury-sedan", label: "Luxury Sedan ($150/hr)", capacity: 3 },
    { value: "stretch-limo", label: "Stretch Limousine ($250/hr)", capacity: 8 },
    { value: "suv-limo", label: "SUV Limousine ($200/hr)", capacity: 6 },
    { value: "party-bus", label: "Party Bus ($300/hr)", capacity: 12 },
    { value: "executive-coach", label: "Executive Coach ($350/hr)", capacity: 14 },
    { value: "hummer-limo", label: "Hummer Limousine ($400/hr)", capacity: 14 },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        pickupLocation: "",
        dropoffLocation: "",
        pickupDate: "",
        pickupTime: "",
        serviceType: "wedding",
        vehicle: "luxury-sedan",
        passengers: 1,
        specialRequests: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      })
    }, 3000)
  }

  if (submitted) {
    return (
      <div className="bg-card rounded-lg p-8 border border-border shadow-lg text-center space-y-4">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-accent">Booking Request Submitted!</h3>
        <p className="text-muted-foreground">
          Thank you for your booking request. Our team will contact you shortly to confirm your reservation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 border border-border shadow-lg space-y-6">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Service Details</h3>

        {/* Service Type */}
        <div>
          <label className="block text-sm font-semibold mb-2">Service Type*</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            required
          >
            {serviceTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Vehicle Selection */}
        <div>
          <label className="block text-sm font-semibold mb-2">Vehicle Type*</label>
          <select
            name="vehicle"
            value={formData.vehicle}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            required
          >
            {vehicles.map((vehicle) => (
              <option key={vehicle.value} value={vehicle.value}>
                {vehicle.label}
              </option>
            ))}
          </select>
        </div>

        {/* Passengers */}
        <div>
          <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
            <Users size={16} className="text-accent" />
            Number of Passengers*
          </label>
          <input
            type="number"
            name="passengers"
            value={formData.passengers}
            onChange={handleInputChange}
            min="1"
            max="14"
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
      </div>

      {/* Pickup & Dropoff */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Location & Time</h3>

        {/* Pickup Location */}
        <div>
          <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
            <MapPin size={16} className="text-accent" />
            Pickup Location*
          </label>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleInputChange}
            placeholder="Enter pickup address"
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        {/* Dropoff Location */}
        <div>
          <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
            <MapPin size={16} className="text-accent" />
            Dropoff Location*
          </label>
          <input
            type="text"
            name="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={handleInputChange}
            placeholder="Enter dropoff address"
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        {/* Pickup Date */}
        <div>
          <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
            <Calendar size={16} className="text-accent" />
            Pickup Date*
          </label>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        {/* Pickup Time */}
        <div>
          <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
            <Clock size={16} className="text-accent" />
            Pickup Time*
          </label>
          <input
            type="time"
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-sm font-semibold mb-2">Special Requests</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleInputChange}
            placeholder="Any special requests or additional information?"
            rows={3}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Your Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">First Name*</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="John"
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">Last Name*</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Doe"
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-2">Email*</label>
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
          <label className="block text-sm font-semibold mb-2">Phone Number*</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="(555) 123-4567"
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
      </div>

      {/* Terms & Submit */}
      <div className="space-y-4 pt-4 border-t border-border">
        <p className="text-sm text-muted-foreground">
          By submitting this form, you agree to our terms and conditions. We'll contact you within 24 hours to confirm
          your booking.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Complete Booking <ArrowRight size={20} />
          </button>
          <WhatsAppContact
            phoneNumber="15551234567"
            message={`Hi Elite Limousine, I'd like to book a ${formData.vehicle} for ${formData.serviceType}. Please let me know more details.`}
            label="Chat on WhatsApp"
            variant="button"
            className="flex-1"
          />
        </div>
      </div>
    </form>
  )
}
