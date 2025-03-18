'use client'

import React from 'react'
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
import { Items } from '@/components/core/items'

export default function Home() {
    return (
        <main className='h-full w-full flex flex-col justify-center items-center'>
            <div className='h-full w-2/3 flex flex-col items-center gap-10 mt-24 mb-24'>
                <div className='w-full max-w-[720px] flex flex-col items-start'>
                    <h1 className='text-2xl font-bold tracking-wide'>Lista de Compras</h1>
                </div>
                <div className='w-full max-w-[720px] flex flex-col md:flex-row items-center gap-2'>
                    <div className='w-full'>
                        <Input className='w-full' />
                    </div>
                    <div className='max-w-[720px] md:max-w-none flex gap-2'>
                        <UnitDropdown />
                        <div className='flex flex-col gap-2'>
                            <label className='text-xs text-secondary'>Categoria</label>
                            <Select>
                                <SelectTrigger className='w-[160px] md:w-[200px]'>
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
                </div>
                <Items className='w-full max-w-[720px]' />
            </div>
        </main>
    )
}
