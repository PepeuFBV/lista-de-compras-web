import React, { useContext } from 'react'
import { ItemsContext } from '@/context/context'
import { Item } from '@/components/core/item'
import type { Item as ItemType } from '@/types/item'

const Items = () => {
    const context = useContext(ItemsContext)

    if (!context) {
        throw new Error('YourComponent must be used within a ContextProvider')
    }

    const { items, setItems } = context

    const addItem = (newItem: ItemType) => {
        setItems([...items, newItem])
    }

    return (
        <section className='w-full max-w-[720px] flex flex-col items-center gap-3'>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </section>
    )
}

export { Items }
