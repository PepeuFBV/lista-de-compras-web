import React from 'react'
import type { ItemType } from '@/types/item'
import { Milk, Beef, Apple, Carrot, Sandwich } from 'lucide-react'

const itemTypes: ItemType[] = [
    {
        name: 'padaria',
        icon: <Sandwich size={16} />,
        tagClassname: 'bg-yellow-dark text-yellow',
        iconClassname: 'text-yellow',
    },
    {
        name: 'legume',
        icon: <Carrot size={16} />,
        tagClassname: 'bg-green-dark text-green',
        iconClassname: 'text-green',
    },
    {
        name: 'fruta',
        icon: <Apple size={16} />,
        tagClassname: 'bg-orange-dark text-orange',
        iconClassname: 'text-orange',
    },
    {
        name: 'bebida',
        icon: <Milk size={16} />,
        tagClassname: 'bg-blue-dark text-blue',
        iconClassname: 'text-blue',
    },
    {
        name: 'carne',
        icon: <Beef size={16} />,
        tagClassname: 'bg-pink-dark text-pink',
        iconClassname: 'text-pink',
    }
]

export { itemTypes }
