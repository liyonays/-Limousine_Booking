"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Car, MessageSquare, Settings, LogOut, Users, Calendar } from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
    { icon: Car, label: "Fleet Management", href: "/admin/fleet" },
    { icon: Calendar, label: "Bookings", href: "/admin/bookings" },
    { icon: MessageSquare, label: "Testimonials", href: "/admin/testimonials" },
    { icon: Users, label: "Contacts", href: "/admin/contacts" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ]

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground h-screen sticky top-0 border-r border-sidebar-border">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-2xl font-bold">Elite Admin</h2>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? "bg-sidebar-primary text-sidebar-primary-foreground" : "hover:bg-sidebar-accent/10"
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-4 left-4 right-4">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent/10 transition-colors text-red-400">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}
