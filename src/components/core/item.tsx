'use client'

import React, { useState } from 'react'
import { EllipsisVertical } from 'lucide-react'
import { Item as ItemData } from '@/types/item'
import { Tag } from '@/components/ui/tag'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import {
    Popover,
    PopoverTrigger,
    PopoverContent
} from '@/components/ui/popover'
import { motion as m } from 'motion/react'
import { cn } from '@/lib/utils'

interface ItemProps {
    item: ItemData
    updateItem: (item: ItemData) => void
    deleteItem: (id: string) => void
    animationDelay?: number
    className?: string
}
const Item: React.FC<ItemProps> = ({ item, animationDelay = 0, updateItem, deleteItem, className }) => {

    const { id, name, amount, unit, type, status } = item
    const [popoverOpen, setPopoverOpen] = useState(false)

    async function handleCheckboxClick() {
        const updatedItem: ItemData = { ...item, status: status === 'done' ? 'todo' : 'done' }
        try {
            await updateItem(updatedItem)
        } catch (error) {
            throw error
        }
    }

    async function handleDelete() {
        try {
            await deleteItem(id)
            setPopoverOpen(false)
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
        <m.div
            className={containerClasses}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: animationDelay }}
        >
            <div className='flex gap-4 items-center'>
                <Checkbox checked={status === 'done'} onClick={handleCheckboxClick} />
                <div className='flex flex-col gap-[6px]'>
                    <h2 className={cn('capitalize', nameClasses)}>{name}</h2>
                    <p className={amountClasses}>{amount} {unit}</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <Tag type={capitalizeFirstLetter(type)} className={tagClasses} />
                <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                    <PopoverTrigger className='cursor-pointer'>
                        <EllipsisVertical className='text-purple-light' />
                    </PopoverTrigger>
                    <PopoverContent className='max-w-[160px] bg-background-secondary border border-border rounded-lg flex flex-col gap-2 p-2'>
                        <Button onClick={handleDelete}>Excluir</Button>
                    </PopoverContent>
                </Popover>
            </div>
        </m.div>
    )
}

export { Item }
