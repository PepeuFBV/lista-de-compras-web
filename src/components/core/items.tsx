import React, { useContext } from 'react'
import { ItemsContext } from '@/context/context'
import { Item } from '@/components/core/item'
import { updateItem, deleteItem } from '@/services/backend'
import type { Item as ItemType } from '@/types/item'
import { cn } from '@/lib/utils'

interface ItemsProps {
    className?: string
}
const Items: React.FC<ItemsProps> = ({ className }) => {
    const context = useContext(ItemsContext)

    if (!context) {
        throw new Error('Your Component must be used within a ContextProvider')
    }

    const { items, setItems } = context

    async function update(updatedItem: ItemType) {
        try {
            await updateItem(updatedItem.id, updatedItem)
            const updatedItems = items.map(item => {
                if (item.id === updatedItem.id) {
                    return updatedItem
                }
                return item
            })
            setItems(updatedItems)
        } catch (error) {
            console.error(error)
        }
    }

    async function deleteI(id: string) {
        try {
            await deleteItem(id)
            setItems([...items.filter(item => item.id !== id)])
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section className={cn('flex flex-col items-center gap-3', className)}>
            {items.map((item, index) => (
                <Item key={index} item={item} updateItem={update} deleteItem={deleteI} />
            ))}
        </section>
    )
}

export { Items }
