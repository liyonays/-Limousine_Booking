"use client"

import { useState } from "react"
import { Trash2, Mail } from "lucide-react"

export default function AdminContacts() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      subject: "Booking Inquiry",
      date: "2025-01-15",
      status: "new",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      subject: "Pricing Question",
      date: "2025-01-14",
      status: "replied",
    },
    {
      id: 3,
      name: "Bob Wilson",
      email: "bob@example.com",
      subject: "Special Request",
      date: "2025-01-13",
      status: "new",
    },
  ])

  const handleMarkReplied = (id: number) => {
    setContacts(contacts.map((c) => (c.id === id ? { ...c, status: "replied" } : c)))
  }

  const handleDelete = (id: number) => {
    setContacts(contacts.filter((c) => c.id !== id))
  }

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Contact Messages</h1>
        <p className="text-muted-foreground mt-2">Manage customer contact form submissions</p>
      </div>

      {/* Contacts Table */}
      <div className="bg-card rounded-lg p-6 border border-border shadow-md overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Email</th>
              <th className="text-left py-3 px-4">Subject</th>
              <th className="text-left py-3 px-4">Date</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4 font-semibold">{contact.name}</td>
                <td className="py-3 px-4">
                  <a href={`mailto:${contact.email}`} className="text-accent hover:underline">
                    {contact.email}
                  </a>
                </td>
                <td className="py-3 px-4">{contact.subject}</td>
                <td className="py-3 px-4">{contact.date}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      contact.status === "new" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                    }`}
                  >
                    {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    {contact.status === "new" && (
                      <button
                        onClick={() => handleMarkReplied(contact.id)}
                        className="text-blue-500 hover:text-blue-700 transition-colors flex items-center gap-1"
                      >
                        <Mail size={16} /> Reply
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(contact.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
