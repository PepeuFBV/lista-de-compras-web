import React from 'react'
import type { ItemType } from '@/types/item'
import { Milk, Beef, Apple, Carrot, Sandwich } from 'lucide-react'

const itemTypes: ItemType[] = [
    {
        name: 'Padaria',
        icon: <Sandwich size={16} />,
        tagClassname: 'bg-yellow-dark text-yellow',
        iconClassname: 'text-yellow',
    },
    {
        name: 'Legume',
        icon: <Carrot size={16} />,
        tagClassname: 'bg-green-dark text-green',
        iconClassname: 'text-green',
    },
    {
        name: 'Fruta',
        icon: <Apple size={16} />,
        tagClassname: 'bg-orange-dark text-orange',
        iconClassname: 'text-orange',
    },
    {
        name: 'Bebida',
        icon: <Milk size={16} />,
        tagClassname: 'bg-blue-dark text-blue',
        iconClassname: 'text-blue',
    },
    {
        name: 'Carne',
        icon: <Beef size={16} />,
        tagClassname: 'bg-pink-dark text-pink',
        iconClassname: 'text-pink',
    }
]

export { itemTypes }
