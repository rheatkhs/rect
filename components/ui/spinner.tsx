import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg" | "xl"
}

const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
}

export function Spinner({ className, size = "md", ...props }: SpinnerProps) {
    return (
        <div
            className={cn(
                "flex items-center justify-center text-slate-900 dark:text-slate-50",
                className
            )}
            {...props}
        >
            <Loader2
                className={cn("animate-spin", sizeClasses[size])}
            />
        </div>
    )
}
