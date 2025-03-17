'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

const UnitDropdown = () => {

    const [unit, setUnit] = useState('kg')

    return (
        <div className='flex'>
            <Input label='Quantidade' className='w-[80px]' inputClassName='rounded-r-none' />
            <Select
                value={unit}
                onValueChange={
                    (value) => setUnit(value as string)
                }
            >
                <SelectTrigger className='w-[72px] rounded-l-none mt-6' triggerClassName='text-secondary text-[10px] leading-none uppercase'>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='kg'>Kg</SelectItem>
                    <SelectItem value='l'>L</SelectItem>
                    <SelectItem value='un'>Un.</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export { UnitDropdown }
