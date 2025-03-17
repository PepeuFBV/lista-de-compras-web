'use client'

import React, { useState } from 'react'
import { EllipsisVertical } from 'lucide-react'
import { Item as ItemData } from '@/types/item'
import { Tag } from '@/components/ui/tag'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

interface ItemProps {
    item: ItemData
    className?: string
}
const Item: React.FC<ItemProps> = ({ item, className }) => {
    const { name, amount, unit, type, status: initialStatus } = item
    const [status, setStatus] = useState(initialStatus)

    function handleCheckboxClick() {
        setStatus(status === 'done' ? 'todo' : 'done')
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
                <div className='flex flex-col'>
                    <h2 className={nameClasses}>{name}</h2>
                    <p className={amountClasses}>{amount} {unit}</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <Tag type={type} className={tagClasses} />
                <EllipsisVertical className='text-purple-light' />
            </div>
        </div>
    )
}

export { Item }
