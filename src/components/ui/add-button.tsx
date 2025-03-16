import { cn } from '@/lib/utils'

interface AddButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}
const AddButton: React.FC<AddButtonProps> = ({ className, ...props }) => {
    return (
        <button
            className={cn('h-12 w-12 flex items-center justify-center rounded-full transition-all disabled:pointer-events-none disabled:opacity-40 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive bg-purple text-foreground hover:bg-purple-dark cursor-pointer', className)}
            {...props}
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="#FBF9FE" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z" fill="#FBF9FE" />
            </svg>
        </button>
    )
}

export { AddButton }
