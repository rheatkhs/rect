import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { CommandMenu } from "@/components/command-menu"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/95 dark:border-white dark:supports-[backdrop-filter]:bg-black/60">
            <div className="container flex h-16 items-center flex-row justify-between w-full px-4 mx-auto">
                <div className="mr-4 flex items-center">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="text-xl font-black uppercase tracking-tighter border-2 border-black p-1 bg-yellow-400 dark:border-white dark:bg-zinc-800 dark:text-white transform -skew-x-6">
                            RCT
                        </span>
                        <span className="font-bold hidden sm:inline-block">Rect UI</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-bold uppercase">
                        <Link href="/docs" className="hover:underline underline-offset-4 decoration-2">
                            Docs
                        </Link>
                        <Link href="/docs/components" className="hover:underline underline-offset-4 decoration-2">
                            Components
                        </Link>
                    </nav>
                </div>

                {/* Search & Actions */}
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <CommandMenu />
                    </div>

                    <nav className="flex items-center space-x-2">
                        <Link
                            href="https://github.com/rheatkhs/rect"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button variant="secondary" size="icon" className="h-9 w-9 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:shadow-none active:shadow-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 3C6.72 2 4 3 4 3c-1.5-1-3-1.5-3-1.5 0 1.15 0 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </Link>
                        <ModeToggle className="h-9 w-9 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:shadow-none active:shadow-none" />
                        <MobileNav />
                    </nav>
                </div>
            </div>
        </header>
    )
}
