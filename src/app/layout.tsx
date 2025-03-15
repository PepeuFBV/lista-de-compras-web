import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
    variable: '--font-geist-sans',
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
                {children}
            </body>
        </html>
    )
}
