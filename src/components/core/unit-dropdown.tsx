'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface UnitDropdownProps {
    amount: string
    unit: string
    onAmountChange: (value: string) => void
    onUnitChange: (value: string) => void
}
const UnitDropdown: React.FC<UnitDropdownProps> = ({ amount, unit, onAmountChange, onUnitChange }) => {
    return (
        <div className='flex'>
            <Input
                label='Quantidade'
                className='w-[80px]'
                inputClassName='rounded-r-none'
                value={amount}
                onChange={(e) => onAmountChange(e.target.value)}
            />
            <Select
                value={unit}
                onValueChange={onUnitChange}
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
