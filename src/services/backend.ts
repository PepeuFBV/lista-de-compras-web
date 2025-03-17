import { ItemRequest } from '@/types/item'
import { backendInstance } from '@/lib/axios'
import { Item, ItemResponse } from '@/types/item'
import axios from 'axios'

async function getItems(): Promise<Item[]> {
    try {
        const response = await backendInstance.get('/items')

        if (!Array.isArray(response.data.items)) {
            throw new Error('Expected response.data.items to be an array')
        }

        const items: Item[] = response.data.items.map((item: ItemResponse) => {
            return {
                id: item._id as string,
                name: item.name as string,
                type: item.type as string,
                amount: item.amount as number,
                unit: item.unit as string,
                status: item.status as string
            }
        })
        return items
    } catch (error) {
        throw error
    }
}

async function createItem(item: ItemRequest) {
    try {
        const newItem = { // parsing to lowercase to match the backend schema
            name: item.name.toLowerCase(),
            type: item.type.toLowerCase(),
            amount: item.amount,
            unit: item.unit.toLowerCase(),
            status: item.status.toLowerCase()
        }
        const response = await backendInstance.post('/items', newItem)
        return response.data
    } catch (error) {
        throw error
    }
}

async function updateItem(id: string, item: ItemRequest) {
    try {
        const updatedItem = { // parsing to lowercase to match the backend schema
            _id: id,
            name: item.name.toLowerCase(),
            type: item.type.toLowerCase(),
            amount: item.amount,
            unit: item.unit.toLowerCase(),
            status: item.status.toLowerCase()
        }
        const response = await backendInstance.put(`/items`, updatedItem)
        return response.data
    } catch (error) {
        throw error
    }
}

async function deleteItem(id: string) {
    try {
        const response = await backendInstance.delete(`/items/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export { getItems, createItem, updateItem, deleteItem }
