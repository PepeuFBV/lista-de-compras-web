'use client'

import React, { useContext } from 'react'
import { UnitDropdown } from '@/components/core/unit-dropdown'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem
} from '@/components/ui/select'
import { ItemsContext } from '@/context/context'
import { itemTypes } from '@/data/item-types'
import { AddButton } from '@/components/core/add-button'
import { SelectValue } from '@radix-ui/react-select'
import { Item } from '@/components/core/item'
import type { Item as ItemType } from '@/types/item'

export default function Home() {
    const context = useContext(ItemsContext)

    if (!context) {
        throw new Error('YourComponent must be used within a ContextProvider')
    }

    const { items, setItems } = context

    // Example usage of items and setItems
    const addItem = (newItem: ItemType) => {
        setItems([...items, newItem])
    }

    return (
        <main className='h-full w-full flex flex-col justify-center items-center'>
            <div className='h-full w-2/3 flex flex-col items-center gap-10 mt-24 mb-24'>
                <div className='w-full max-w-[720px] flex flex-col items-start'>
                    <h1 className='text-2xl font-bold tracking-wide'>Lista de Compras</h1>
                </div>
                <div className='w-full max-w-[720px] flex items-center gap-2'>
                    <Input className='w-full' />
                    <UnitDropdown />
                    <div className='flex flex-col gap-2'>
                        <label className='text-xs text-secondary'>Categoria</label>
                        <Select>
                            <SelectTrigger className='w-[200px]'>
                                <SelectValue placeholder='Selecione' />
                            </SelectTrigger>
                            <SelectContent>
                                {itemTypes.map((itemType, index) => (
                                    <SelectItem key={index} value={itemType.name}>{itemType.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <AddButton className='mt-6' />
                </div>
                <section className='w-full max-w-[720px] flex flex-col items-center gap-3'>
                    {items.map((item, index) => (
                        <Item key={index} item={item} />
                    ))}
                </section>
            </div>
        </main>
    )
}
