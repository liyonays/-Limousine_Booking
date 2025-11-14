"use client"

import { useState } from "react"
import { Filter } from "lucide-react"

export default function AdminBookings() {
  const [filterStatus, setFilterStatus] = useState("all")

  const bookings = [
    {
      id: 1,
      name: "John Smith",
      vehicle: "Stretch Limousine",
      date: "2025-01-15",
      time: "18:00",
      status: "confirmed",
      amount: "$250",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      vehicle: "Luxury Sedan",
      date: "2025-01-14",
      time: "14:30",
      status: "pending",
      amount: "$150",
    },
    {
      id: 3,
      name: "Michael Chen",
      vehicle: "SUV Limousine",
      date: "2025-01-13",
      time: "10:00",
      status: "confirmed",
      amount: "$200",
    },
    {
      id: 4,
      name: "Emma Davis",
      vehicle: "Party Bus",
      date: "2025-01-12",
      time: "20:00",
      status: "completed",
      amount: "$300",
    },
    {
      id: 5,
      name: "James Wilson",
      vehicle: "Hummer Limo",
      date: "2025-01-11",
      time: "19:30",
      status: "completed",
      amount: "$400",
    },
  ]

  const filteredBookings = filterStatus === "all" ? bookings : bookings.filter((b) => b.status === filterStatus)

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Bookings Management</h1>
        <p className="text-muted-foreground mt-2">View and manage all customer bookings</p>
      </div>

      {/* Filter */}
      <div className="bg-card rounded-lg p-4 border border-border flex items-center gap-4">
        <Filter size={20} className="text-accent" />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="all">All Bookings</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Bookings Table */}
      <div className="bg-card rounded-lg p-6 border border-border shadow-md overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4">Customer</th>
              <th className="text-left py-3 px-4">Vehicle</th>
              <th className="text-left py-3 px-4">Date & Time</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Amount</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4 font-semibold">{booking.name}</td>
                <td className="py-3 px-4">{booking.vehicle}</td>
                <td className="py-3 px-4">
                  {booking.date} at {booking.time}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </td>
                <td className="py-3 px-4 font-semibold">{booking.amount}</td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 transition-colors font-semibold text-sm">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
