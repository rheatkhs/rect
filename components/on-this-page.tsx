"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface OnThisPageProps {
    items: {
        title: string
        url: string
    }[]
}

export function OnThisPage({ items }: OnThisPageProps) {
    return (
        <div className="hidden xl:block">
            <div className="sticky top-20 space-y-4">
                <h4 className="font-black uppercase tracking-tight text-sm">On This Page</h4>
                <ul className="space-y-3 text-sm">
                    {items.map((item) => (
                        <li key={item.url}>
                            <Link
                                href={item.url}
                                className={cn(
                                    "block text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white hover:underline decoration-2 underline-offset-4"
                                )}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="space-y-4 border-t-2 border-black pt-4 dark:border-white mt-6">
                    <h4 className="font-black uppercase tracking-tight text-sm">Contribute</h4>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link
                                href="https://github.com/rheatkhs/rect"
                                target="_blank"
                                className="block text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white hover:underline decoration-2 underline-offset-4"
                            >
                                Star on GitHub
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://github.com/rheatkhs/rect/issues"
                                target="_blank"
                                className="block text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white hover:underline decoration-2 underline-offset-4"
                            >
                                Report an issue
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
