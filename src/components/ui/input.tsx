import { cn } from '@/lib/utils'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    className?: string
}
const Input: React.FC<InputProps> = ({ label = 'Item', className, id, ...props }) => {
    return (
        <div className={cn('group flex flex-col gap-[8px]', className)}>
            {label && (
                <label className="text-xs text-secondary transition-colors group-focus-within:text-purple-light">{label}</label>
            )}
            <input
                data-slot="input"
                className={cn(
                    'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-border flex h-[40px] w-full min-w-0 rounded-md border bg-muted text-sm shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                    'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
                    'focus:border-purple-light p-[12px]'
                )}
                {...props}
            />
        </div>
    )
}

export { Input }
