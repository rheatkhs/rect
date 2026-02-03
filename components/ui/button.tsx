import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'danger'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = 'primary', ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center border-2 border-black px-6 py-2 font-bold uppercase transition-all",
                "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                // Hover and Active states for "press" effect
                "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
                "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
                // Accessibility
                "disabled:opacity-50 disabled:pointer-events-none",

                // Variants
                variant === 'primary' && "bg-yellow-400 text-black hover:bg-yellow-500",
                variant === 'secondary' && "bg-white text-black hover:bg-gray-50",
                variant === 'accent' && "bg-cyan-400 text-black hover:bg-cyan-500",
                variant === 'danger' && "bg-red-500 text-white hover:bg-red-600",

                className
            )}
            {...props}
        />
    )
})
Button.displayName = "Button"

export { Button }
