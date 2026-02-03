import Link from "next/link"
import { Button } from "@/components/ui/button"
import Card from "@/components/ui/card"

const components = [
    {
        title: "Button",
        description: "Interactive element that users click to trigger an action.",
        href: "/docs/components/button",
    },
    {
        title: "Card",
        description: "Container for grouping related content and actions.",
        href: "/docs/components/card",
    },
    {
        title: "Input",
        description: "Form field for user text input.",
        href: "/docs/components/input",
    },
]

export default function ComponentsPage() {
    return (
        <div className="space-y-10">
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase">
                    Components
                </h1>
                <p className="text-xl text-slate-700 dark:text-slate-300">
                    The building blocks of Rect UI.
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                {components.map((component) => (
                    <Link key={component.href} href={component.href} className="group">
                        <Card title={component.title} className="h-full transition-transform group-hover:-translate-y-1">
                            <p className="text-slate-600 mb-4 dark:text-slate-400">{component.description}</p>
                            <Button variant="secondary" className="w-full">View Docs</Button>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
