import type React from "react"
import { AdminSidebar } from "@/components/admin-sidebar"

export const metadata = {
  title: "Admin Dashboard | Elite Limousine",
  description: "Admin panel for managing Elite Limousine content and bookings.",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
