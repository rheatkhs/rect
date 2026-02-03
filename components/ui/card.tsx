import { cn } from "@/lib/utils";

interface CardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function Card({ title, children, className }: CardProps) {
    return (
        <div className={cn(
            "border-2 border-black bg-white p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]",
            "dark:border-white dark:bg-black dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)]",
            className
        )}>
            <h2 className="mb-4 text-2xl font-black uppercase tracking-tight border-b-2 border-black pb-2 dark:border-white dark:text-white">
                {title}
            </h2>
            <div className="font-medium text-slate-800 dark:text-slate-200">
                {children}
            </div>
        </div>
    );
}
