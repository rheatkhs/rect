import { cn } from "@/lib/utils"
import { forwardRef, InputHTMLAttributes } from "react"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                "flex h-12 w-full rounded-none border-2 border-black bg-white px-3 py-2 text-base font-bold placeholder:text-gray-500",
                "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                "focus:outline-none focus:ring-0 focus:bg-yellow-200 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none transition-all",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
Input.displayName = "Input"

export { Input }
