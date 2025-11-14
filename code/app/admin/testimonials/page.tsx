"use client"

import { useState } from "react"
import { Trash2, CheckCircle, XCircle } from "lucide-react"

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      content: "Elite Limousine made our wedding day perfect!",
      rating: 5,
      status: "approved",
    },
    {
      id: 2,
      name: "Michael Chen",
      content: "Professional and reliable service every time.",
      rating: 5,
      status: "approved",
    },
    {
      id: 3,
      name: "Emma Williams",
      content: "Outstanding customer service and beautiful vehicles.",
      rating: 5,
      status: "pending",
    },
  ])

  const handleApprove = (id: number) => {
    setTestimonials(testimonials.map((t) => (t.id === id ? { ...t, status: "approved" } : t)))
  }

  const handleReject = (id: number) => {
    setTestimonials(testimonials.filter((t) => t.id !== id))
  }

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Testimonials Management</h1>
        <p className="text-muted-foreground mt-2">Review and manage customer testimonials</p>
      </div>

      {/* Testimonials */}
      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-card rounded-lg p-6 border border-border shadow-md space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <div className="flex gap-1 mt-2">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  testimonial.status === "approved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {testimonial.status.charAt(0).toUpperCase() + testimonial.status.slice(1)}
              </span>
            </div>
            <p className="text-muted-foreground italic">"{testimonial.content}"</p>
            <div className="flex gap-2 pt-4 border-t border-border">
              {testimonial.status === "pending" && (
                <>
                  <button
                    onClick={() => handleApprove(testimonial.id)}
                    className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold hover:bg-green-200 transition-colors"
                  >
                    <CheckCircle size={18} /> Approve
                  </button>
                  <button
                    onClick={() => handleReject(testimonial.id)}
                    className="flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-lg font-semibold hover:bg-red-200 transition-colors"
                  >
                    <XCircle size={18} /> Reject
                  </button>
                </>
              )}
              <button
                onClick={() => handleReject(testimonial.id)}
                className="ml-auto text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
