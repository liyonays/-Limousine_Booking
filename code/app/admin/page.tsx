"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"
import { TrendingUp, Users, Calendar, DollarSign } from "lucide-react"

export default function AdminDashboard() {
  // Mock data for charts
  const bookingData = [
    { month: "Jan", bookings: 12, revenue: 3600 },
    { month: "Feb", bookings: 19, revenue: 5700 },
    { month: "Mar", bookings: 15, revenue: 4500 },
    { month: "Apr", bookings: 25, revenue: 7500 },
    { month: "May", bookings: 22, revenue: 6600 },
    { month: "Jun", bookings: 30, revenue: 9000 },
  ]

  const revenueData = [
    { week: "Week 1", amount: 2400 },
    { week: "Week 2", amount: 2210 },
    { week: "Week 3", amount: 2290 },
    { week: "Week 4", amount: 2000 },
    { week: "Week 5", amount: 2181 },
    { week: "Week 6", amount: 2500 },
  ]

  const stats = [
    { icon: Calendar, label: "Total Bookings", value: "156", color: "text-blue-500" },
    { icon: DollarSign, label: "Total Revenue", value: "$48,500", color: "text-green-500" },
    { icon: Users, label: "Active Customers", value: "89", color: "text-purple-500" },
    { icon: TrendingUp, label: "Avg Rating", value: "4.9/5", color: "text-yellow-500" },
  ]

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome back to Elite Limousine Admin</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div key={idx} className="bg-card rounded-lg p-6 border border-border shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <Icon size={24} className={stat.color} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bookings Chart */}
        <div className="bg-card rounded-lg p-6 border border-border shadow-md">
          <h3 className="text-xl font-bold mb-4">Monthly Bookings</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bookingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip />
              <Legend />
              <Bar dataKey="bookings" fill="var(--color-accent)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Chart */}
        <div className="bg-card rounded-lg p-6 border border-border shadow-md">
          <h3 className="text-xl font-bold mb-4">Weekly Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="week" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="var(--color-accent)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-card rounded-lg p-6 border border-border shadow-md">
        <h3 className="text-xl font-bold mb-4">Recent Bookings</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Vehicle</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Amount</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "John Smith",
                  vehicle: "Stretch Limousine",
                  date: "2025-01-15",
                  status: "Confirmed",
                  amount: "$250",
                },
                {
                  name: "Sarah Johnson",
                  vehicle: "Luxury Sedan",
                  date: "2025-01-14",
                  status: "Pending",
                  amount: "$150",
                },
                {
                  name: "Michael Chen",
                  vehicle: "SUV Limousine",
                  date: "2025-01-13",
                  status: "Confirmed",
                  amount: "$200",
                },
                { name: "Emma Davis", vehicle: "Party Bus", date: "2025-01-12", status: "Completed", amount: "$300" },
                {
                  name: "James Wilson",
                  vehicle: "Hummer Limo",
                  date: "2025-01-11",
                  status: "Completed",
                  amount: "$400",
                },
              ].map((booking, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-4">{booking.name}</td>
                  <td className="py-3 px-4">{booking.vehicle}</td>
                  <td className="py-3 px-4">{booking.date}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        booking.status === "Confirmed"
                          ? "bg-green-100 text-green-800"
                          : booking.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-semibold">{booking.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
