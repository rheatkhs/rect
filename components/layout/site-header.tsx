import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-white dark:bg-black dark:border-white">
            <div className="container flex h-16 items-center flex-row justify-between w-full px-4 mx-auto">
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="text-xl font-black uppercase tracking-tighter">
                            Rect UI
                        </span>
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
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-2">
                        <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button variant="secondary" className="h-9 px-4 hidden md:inline-flex">
                                GitHub
                            </Button>
                        </Link>
                        <ModeToggle />
                        <MobileNav />
                    </nav>
                </div>
            </div>
        </header>
    )
}
