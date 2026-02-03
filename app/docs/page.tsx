import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DocsPage() {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase">
                    Introduction
                </h1>
                <p className="text-lg text-slate-700">
                    Rect UI is a reusable component library built with Radix UI and Tailwind CSS, styled with Neobrutalism.
                </p>
            </div>
            <div className="p-6 border-2 border-black bg-pink-100 shadow-[4px_4px_0_0_#000]">
                <p className="font-bold">
                    This is NOT a component library. It's a collection of re-usable components that you can copy and paste into your apps.
                </p>
            </div>
            <div className="flex gap-4">
                <Link href="/docs/components/button">
                    <Button>Check Components</Button>
                </Link>
            </div>
        </div>
    )
}
