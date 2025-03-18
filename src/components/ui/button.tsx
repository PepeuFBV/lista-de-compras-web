import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

interface ButtonProps extends React.ComponentProps<'button'> {
    className?: string
    asChild?: boolean
}
const Button: React.FC<ButtonProps> = ({ className, asChild, ...props }) => {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp
            data-slot='button'
            className={cn('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive bg-purple text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2', className)}
            {...props}
        />
    )
}

export { Button }
