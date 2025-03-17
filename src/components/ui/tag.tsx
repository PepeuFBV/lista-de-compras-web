import { cn } from '@/lib/utils'
import { cva, type VariantProps } from "class-variance-authority"
import { itemTypes } from '@/data/item'

const tagVariants = cva(
    'w-fit flex items-center justify-center h-[32px] py-[8px] px-[16px] rounded-full bg-primary text-primary-foreground text-xs font-medium lowercase gap-[6px]',
    {
        variants: {
            type: itemTypes.reduce((acc, item) => {
                acc[item.name] = item.tagClassname
                return acc
            }, {} as Record<string, string>),
        },
    }
)

interface TagProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tagVariants> {
    className?: string
}
const Tag: React.FC<TagProps> = ({ type, className, ...props }) => {
    const itemType = itemTypes.find(item => item.name === type)
    const IconComponent = itemType ? itemType.icon : null

    return (
        <div
            className={cn(tagVariants({ type }), className)}
            {...props}
        >
            {IconComponent}
            {type}
        </div>
    )
}

export { Tag }