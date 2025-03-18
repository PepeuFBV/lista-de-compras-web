'use client'

import React, { useState, useContext } from 'react'
import { ItemsContext } from '@/context/context'
import { UnitDropdown } from '@/components/core/unit-dropdown'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue
} from '@/components/ui/select'
import { itemTypes } from '@/data/item-types'
import { AddButton } from '@/components/core/add-button'
import { createItem } from '@/services/backend'
import { Item, ItemRequest } from '@/types/item'
import { cn } from '@/lib/utils'

interface AddItemProps {
    className?: string
}
const AddItem: React.FC<AddItemProps> = ({ className }) => {
    const context = useContext(ItemsContext)

    if (!context) {
        throw new Error('Your Component must be used within a ContextProvider')
    }

    const { items, setItems } = context

    const [itemName, setItemName] = useState('')
    const [amount, setAmount] = useState(1)
    const [unit, setUnit] = useState('un')
    const [category, setCategory] = useState('')
    const [error, setError] = useState('')

    function resetValues() {
        setItemName('')
        setAmount(1)
        setUnit('un')
        setCategory('')
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!itemName || !amount || !category) {
            setError('Todos os campos são obrigatórios.')
            return
        }
        const parsedUnit = (unit: string): string => {
            if (unit === 'un' && amount > 1) return 'unidades'
            if (unit === 'un') return 'unidade'
            if (unit === 'kg' && amount > 1) return 'quilos'
            if (unit === 'kg') return 'quilo'
            if (unit === 'l' && amount > 1) return 'litros'
            if (unit === 'l') return 'litro'
            return unit
        }

        const itemType = itemTypes.find(itemType => itemType.name === category)
        if (!itemType) {
            setError('Categoria inválida.')
            return
        }

        type PossibleTypes = 'Padaria' | 'Legume' | 'Fruta' | 'Bebida' | 'Carne'
        const newItem: ItemRequest = {
            name: itemName,
            type: category as PossibleTypes,
            amount,
            unit: parsedUnit(unit as string),
            status: 'todo'
        }
        if (newItem.unit === 'un' || newItem.unit === 'un.' || newItem.unit === 'unidade') newItem.unit = 'unidades'
        else if (newItem.unit === 'kg' || newItem.unit === 'quilo') newItem.unit = 'quilos'
        else if (newItem.unit === 'l' || newItem.unit === 'litro') newItem.unit = 'litros'
        await create(newItem)
        setError('')
        resetValues()
    }

    const visibility = error ? 'visible' : 'invisible'

    async function create(newItem: ItemRequest) {
        try {
            const item: Item = await createItem(newItem)
            setItems([...items, item])
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={cn('', className)}>
            < div className='flex flex-col md:flex-row items-center gap-2' >
                <Input
                    className='w-full'
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
                <div className='max-w-[720px] md:max-w-none w-full flex gap-2'>
                    <UnitDropdown
                        amount={amount}
                        unit={unit}
                        onAmountChange={setAmount}
                        onUnitChange={setUnit}
                    />
                    <div className='w-full flex flex-col gap-2'>
                        <label className='text-xs text-secondary'>Categoria</label>
                        <Select value={category} onValueChange={setCategory}>
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder='Selecione' />
                            </SelectTrigger>
                            <SelectContent>
                                {itemTypes.map((itemType, index) => (
                                    <SelectItem key={index} value={itemType.name}>{itemType.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <AddButton className='mt-6' type='submit' />
                </div>
            </div>
            <p className={cn('text-red-500 text-xs mt-2', visibility)}>{error}</p>
        </form>
    )
}

export { AddItem }
