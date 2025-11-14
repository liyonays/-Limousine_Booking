"use client"

import { useState } from "react"
import { Plus, Edit, Trash2 } from "lucide-react"

export default function AdminFleet() {
  const [vehicles, setVehicles] = useState([
    { id: 1, name: "Luxury Sedan", capacity: 3, hourlyRate: 150, status: "active" },
    { id: 2, name: "Stretch Limousine", capacity: 8, hourlyRate: 250, status: "active" },
    { id: 3, name: "SUV Limousine", capacity: 6, hourlyRate: 200, status: "active" },
    { id: 4, name: "Party Bus", capacity: 12, hourlyRate: 300, status: "active" },
    { id: 5, name: "Executive Coach", capacity: 14, hourlyRate: 350, status: "maintenance" },
  ])

  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: "", capacity: "", hourlyRate: "", status: "active" })

  const handleAddVehicle = () => {
    if (editingId) {
      setVehicles(
        vehicles.map((v) =>
          v.id === editingId
            ? {
                ...v,
                ...formData,
                capacity: Number.parseInt(formData.capacity),
                hourlyRate: Number.parseInt(formData.hourlyRate),
              }
            : v,
        ),
      )
      setEditingId(null)
    } else {
      setVehicles([
        ...vehicles,
        {
          id: Date.now(),
          ...formData,
          capacity: Number.parseInt(formData.capacity),
          hourlyRate: Number.parseInt(formData.hourlyRate),
        },
      ])
    }
    setFormData({ name: "", capacity: "", hourlyRate: "", status: "active" })
    setShowForm(false)
  }

  const handleEdit = (vehicle: any) => {
    setFormData({
      name: vehicle.name,
      capacity: vehicle.capacity.toString(),
      hourlyRate: vehicle.hourlyRate.toString(),
      status: vehicle.status,
    })
    setEditingId(vehicle.id)
    setShowForm(true)
  }

  const handleDelete = (id: number) => {
    setVehicles(vehicles.filter((v) => v.id !== id))
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Fleet Management</h1>
        <button
          onClick={() => {
            setShowForm(!showForm)
            setEditingId(null)
            setFormData({ name: "", capacity: "", hourlyRate: "", status: "active" })
          }}
          className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Plus size={20} /> Add Vehicle
        </button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="bg-card rounded-lg p-6 border border-border shadow-md space-y-4">
          <h3 className="text-xl font-bold">{editingId ? "Edit Vehicle" : "Add New Vehicle"}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Vehicle Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="number"
              placeholder="Capacity"
              value={formData.capacity}
              onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
              className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="number"
              placeholder="Hourly Rate"
              value={formData.hourlyRate}
              onChange={(e) => setFormData({ ...formData, hourlyRate: e.target.value })}
              className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="active">Active</option>
              <option value="maintenance">Maintenance</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleAddVehicle}
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              {editingId ? "Update" : "Add"} Vehicle
            </button>
            <button
              onClick={() => {
                setShowForm(false)
                setEditingId(null)
              }}
              className="border border-border px-6 py-2 rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Vehicles Table */}
      <div className="bg-card rounded-lg p-6 border border-border shadow-md overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4">Vehicle Name</th>
              <th className="text-left py-3 px-4">Capacity</th>
              <th className="text-left py-3 px-4">Hourly Rate</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4 font-semibold">{vehicle.name}</td>
                <td className="py-3 px-4">{vehicle.capacity} passengers</td>
                <td className="py-3 px-4">${vehicle.hourlyRate}/hr</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      vehicle.status === "active"
                        ? "bg-green-100 text-green-800"
                        : vehicle.status === "maintenance"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(vehicle)}
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(vehicle.id)}
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
