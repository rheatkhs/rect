"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface SidebarNavProps {
    items: {
        title: string
        href: string
        disabled?: boolean
    }[]
}

export function Sidebar() {
    return (
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block border-r-2 border-black dark:border-white bg-white dark:bg-black">
            <div className="h-full py-6 pr-6 lg:py-8">
                <div className="w-full h-full pr-4">
                    <div className="pb-4">
                        <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-black uppercase">
                            Getting Started
                        </h4>
                        <div className="grid grid-flow-row auto-rows-max text-sm">
                            <Link
                                href="/docs"
                                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline underline-offset-4 decoration-2"
                            >
                                Introduction
                            </Link>
                        </div>
                    </div>
                    <div className="pb-4">
                        <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-black uppercase">
                            Components
                        </h4>
                        <div className="grid grid-flow-row auto-rows-max text-sm">
                            <Link
                                href="/docs/components/button"
                                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline underline-offset-4 decoration-2"
                            >
                                Button
                            </Link>
                            <Link
                                href="/docs/components/card"
                                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline underline-offset-4 decoration-2"
                            >
                                Card
                            </Link>
                            <Link
                                href="/docs/components/input"
                                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline underline-offset-4 decoration-2"
                            >
                                Input
                            </Link>
                            <Link
                                href="/docs/components/field"
                                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline underline-offset-4 decoration-2"
                            >
                                Field
                            </Link>
                            <Link
                                href="/docs/components/select"
                                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline underline-offset-4 decoration-2"
                            >
                                Select
                            </Link>
                            <Link
                                href="/docs/components/table"
                                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline underline-offset-4 decoration-2"
                            >
                                Table
                            </Link>
                            <Link
                                href="/docs/components/progress"
                                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline underline-offset-4 decoration-2"
                            >
                                Progress
                            </Link>
                            <Link
                                href="/docs/components/checkbox"
                                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline underline-offset-4 decoration-2"
                            >
                                Checkbox
                            </Link>
                            <Link
                                href="/docs/components/skeleton"
                                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline underline-offset-4 decoration-2"
                            >
                                Skeleton
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}
