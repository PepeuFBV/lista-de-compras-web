'use client'

import React from 'react'
import { Items } from '@/components/core/items'
import { AddItem } from '@/components/core/add-item'

export default function Home() {
    return (
        <main className='h-full w-full flex flex-col justify-center items-center'>
            <div className='h-full w-[88%] md:w-2/3 flex flex-col items-center gap-5 md:gap-10 mt-24 mb-24'>
                <div className='w-full max-w-[720px] flex flex-col items-start'>
                    <h1 className='text-2xl font-bold tracking-wide'>Lista de Compras</h1>
                </div>
                <AddItem className='w-full max-w-[720px]' />
                <Items className='mt-5 md:mt-0 w-full max-w-[720px]' />
            </div>
        </main>
    )
}
