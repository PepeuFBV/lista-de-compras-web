import React, { useContext } from 'react'
import { ItemsContext } from '@/context/context'
import { Item } from '@/components/core/item'
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

    const addItem = (newItem: ItemType) => {
        setItems([...items, newItem])
    }

    return (
        <section className={cn('flex flex-col items-center gap-3', className)}>
            {items.map((item, index) => (
                <Item key={index} item={item} updateItem={updateItem} />
            ))}
        </section>
    )
}

export { Items }
