import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Checkbox({
    className,
    ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
    return (
        <CheckboxPrimitive.Root
            data-slot='checkbox'
            className={cn(
                'peer border-purple-light data-[state=checked]:bg-success data-[state=checked]:border-none data-[state=checked]:focus-visible:border-none data-[state=checked]:focus-visible:bg-success-light focus-visible:bg-purple-dark aria-invalid:ring-destructive/20 aria-invalid:border-destructive size-4 shrink-0 rounded-[2px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
                className
            )}
            {...props}
        >
            <CheckboxPrimitive.Indicator
                data-slot='checkbox-indicator'
                className='flex items-center justify-center text-current transition-none'
            >
                <CheckIcon className='size-2.5' />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}

export { Checkbox }
