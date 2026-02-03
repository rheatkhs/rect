"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MobileNav() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="md:hidden">
            <Button
                variant="secondary"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                <Menu className="h-6 w-6" />
            </Button>
            {isOpen && mounted && createPortal(
                <div className="fixed inset-0 z-[99] bg-white/80 backdrop-blur-sm dark:bg-black/80">
                    <div className="fixed inset-y-0 right-0 z-[100] items-center w-3/4 border-l-2 border-black bg-white p-6 shadow-[-4px_0_0_0_rgba(0,0,0,1)] dark:border-white dark:bg-black dark:shadow-[-4px_0_0_0_rgba(255,255,255,1)]">
                        <div className="flex justify-between items-center mb-8 border-b-2 border-black pb-4 dark:border-white">
                            <span className="text-xl font-black uppercase">Menu</span>
                            <Button
                                variant="secondary"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="h-6 w-6" />
                            </Button>
                        </div>
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/docs"
                                className="text-lg font-bold uppercase hover:translate-x-2 transition-transform"
                                onClick={() => setIsOpen(false)}
                            >
                                Docs
                            </Link>
                            <Link
                                href="/docs/components"
                                className="text-lg font-bold uppercase hover:translate-x-2 transition-transform"
                                onClick={() => setIsOpen(false)}
                            >
                                Components
                            </Link>
                            <Link
                                href="https://github.com/rheatkhs/rect"
                                target="_blank"
                                className="text-lg font-bold uppercase hover:translate-x-2 transition-transform"
                                onClick={() => setIsOpen(false)}
                            >
                                GitHub
                            </Link>
                        </nav>
                    </div>
                </div>,
                document.body
            )}
        </div>
    )
}
