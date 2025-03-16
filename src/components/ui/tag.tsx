import { Milk, Beef, Apple, Carrot, Sandwich } from 'lucide-react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from "class-variance-authority"

const tagVariants = cva(
    'w-fit flex items-center justify-center h-[32px] py-[8px] px-[16px] rounded-full bg-primary text-primary-foreground text-xs font-medium gap-[6px]',
    {
        variants: {
            type: {
                padaria: 'bg-yellow-dark text-yellow',
                legume: 'bg-green-dark text-green',
                fruta: 'bg-orange-dark text-orange',
                bebida: 'bg-blue-dark text-blue',
                carne: 'bg-pink-dark text-pink',
            },
        },
    }
)

const iconMap = {
    padaria: Sandwich,
    legume: Carrot,
    fruta: Apple,
    bebida: Milk,
    carne: Beef,
}

interface TagProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tagVariants> {
    className?: string
}
const Tag: React.FC<TagProps> = ({ type, className, ...props }) => {
    const IconComponent = type ? iconMap[type] : null

    return (
        <div
            className={cn(tagVariants({ type }), className)}
            {...props}
        >
            {IconComponent && <IconComponent size={16} />}
            {type}
        </div>
    )
}

export { Tag }
