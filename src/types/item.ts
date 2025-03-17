import { ReactNode } from 'react'

type Item = {
    id: string
    name: string
    type: string
    ammount: number
    unit: string
    status: 'done' | 'todo'
}

type ItemType = {
    name: string
    icon: ReactNode,
    tagClassname: string,
    iconClassname: string
}

export type { Item, ItemType }
