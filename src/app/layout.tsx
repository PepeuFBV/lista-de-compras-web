import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Image from 'next/image'

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: '',
    description: '',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='pt-BR'>
            <head>

            </head>
            <body
                className={`${inter.variable} antialiased`}
            >
                <div className='absolute w-full -z-10 h-[185px] overflow-x-hidden'>
                    <Image className='' src='/background.png' alt='background' width={1920} height={165} quality={100} style={{ width: '100%', height: '185px', objectFit: 'cover' }} priority loading='eager' />
                </div>
                {children}
            </body>
        </html>
    )
}
