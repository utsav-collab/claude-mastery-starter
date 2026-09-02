'use client'

import { useUser } from '@clerk/nextjs'
import { useState } from 'react'
import { usePantry } from '@/hooks/usePantry'
import { PantryView } from './PantryView'
import { PantryForm } from './PantryForm'
import { PantryItem } from '@/lib/types'

export function PantryContainer() {
  const { user, isLoaded } = useUser()
  const { items, loading, addItem, updateItem, deleteItem } = usePantry()
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState<PantryItem | undefined>()

  if (!isLoaded || loading) return <div className="p-6">Loading...</div>
  if (!user) return <div className="p-6">Please sign in to view your pantry</div>

  const handleAddOrUpdate = (item: PantryItem) => {
    if (editingItem) {
      updateItem(editingItem.name, item)
      setEditingItem(undefined)
    } else {
      addItem(item)
    }
    setShowForm(false)
  }

  const handleEdit = (item: PantryItem) => {
    setEditingItem(item)
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingItem(undefined)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Your Pantry</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-2 bg-lime-500 text-black font-semibold rounded-lg hover:bg-lime-600"
        >
          {showForm ? 'Close' : 'Add Item'}
        </button>
      </div>

      {showForm && (
        <div className="bg-zinc-900 rounded-lg border border-white/10 p-6">
          <h2 className="text-xl font-semibold mb-4 text-white">
            {editingItem ? 'Edit Item' : 'Add Item to Pantry'}
          </h2>
          <PantryForm
            onSubmit={handleAddOrUpdate}
            onCancel={handleCancel}
            initialItem={editingItem}
          />
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold mb-4 text-white">
          Items ({items.length})
        </h2>
        <PantryView items={items} onEdit={handleEdit} onDelete={deleteItem} />
      </div>
    </div>
  )
}
