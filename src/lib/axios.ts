import axios from 'axios'

let apiUrl: string = process.env.NEXT_PUBLIC_API_URL as string

const backendInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization'
    }
})

export { backendInstance }
