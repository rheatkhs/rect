"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Monitor, Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"

export function CommandMenu() {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()
    const { setTheme } = useTheme()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-slate-100 px-4 py-2 relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64 dark:border-white dark:bg-zinc-900 dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
                <span className="hidden lg:inline-flex text-slate-500 font-bold dark:text-slate-400">Search documentation...</span>
                <span className="inline-flex lg:hidden text-slate-500 font-bold dark:text-slate-400">Search...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border-2 border-slate-300 bg-slate-100 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex dark:border-zinc-700 dark:bg-zinc-800">
                    <span className="text-xs">Ctrl K</span>
                </kbd>
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Links">
                        <CommandItem
                            onSelect={() => {
                                runCommand(() => router.push("/docs"))
                            }}
                        >
                            <Monitor className="mr-2 h-4 w-4" />
                            Documentation
                        </CommandItem>
                        <CommandItem
                            onSelect={() => {
                                runCommand(() => router.push("/docs/components"))
                            }}
                        >
                            <Monitor className="mr-2 h-4 w-4" />
                            Components
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Components">
                        <CommandItem
                            onSelect={() => {
                                runCommand(() => router.push("/docs/components/button"))
                            }}
                        >
                            <div className="mr-2 flex h-4 w-4 items-center justify-center">
                                <div className="h-2 w-2 rounded-full bg-yellow-400" />
                            </div>
                            Button
                        </CommandItem>
                        <CommandItem
                            onSelect={() => {
                                runCommand(() => router.push("/docs/components/card"))
                            }}
                        >
                            <div className="mr-2 flex h-4 w-4 items-center justify-center">
                                <div className="h-2 w-2 rounded-full bg-cyan-400" />
                            </div>
                            Card
                        </CommandItem>
                        <CommandItem
                            onSelect={() => {
                                runCommand(() => router.push("/docs/components/input"))
                            }}
                        >
                            <div className="mr-2 flex h-4 w-4 items-center justify-center">
                                <div className="h-2 w-2 rounded-full bg-purple-400" />
                            </div>
                            Input
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Theme">
                        <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
                            <Sun className="mr-2 h-4 w-4" />
                            Light
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
                            <Moon className="mr-2 h-4 w-4" />
                            Dark
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
                            <Laptop className="mr-2 h-4 w-4" />
                            System
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
