'use client'

import React, { useState } from 'react'
import { EllipsisVertical } from 'lucide-react'
import { Item as ItemData } from '@/types/item'
import { Tag } from '@/components/ui/tag'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

interface ItemProps {
    item: ItemData
    updateItem: (item: ItemData) => void
    className?: string
}
const Item: React.FC<ItemProps> = ({ item, updateItem, className }) => {

    const { name, amount, unit, type, status } = item

    async function handleCheckboxClick() {
        const updatedItem: ItemData = { ...item, status: status === 'done' ? 'todo' : 'done' }
        try {
            await updateItem(updatedItem)
        } catch (error) {
            throw error
        }
    }

    function capitalizeFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const containerClasses = cn(
        'w-full max-w-[720px] h-[68px] flex gap-10 justify-between items-center bg-background-secondary border border-border rounded-lg px-4 transition-colors duration-500 ease-in-out',
        { 'bg-muted border-background-secondary': status === 'done' },
        className
    )

    const nameClasses = cn({ 'line-through opacity-50': status === 'done' })
    const amountClasses = cn('text-secondary', { 'opacity-50': status === 'done' })
    const tagClasses = cn({ 'opacity-50': status === 'done' })

    return (
        <div className={containerClasses}>
            <div className='flex gap-4 items-center'>
                <Checkbox checked={status === 'done'} onClick={handleCheckboxClick} />
                <div className='flex flex-col gap-[6px]'>
                    <h2 className={cn('capitalize', nameClasses)}>{name}</h2>
                    <p className={amountClasses}>{amount} {unit}</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <Tag type={capitalizeFirstLetter(type)} className={tagClasses} />
                <EllipsisVertical className='text-purple-light' />
            </div>
        </div>
    )
}

export { Item }
