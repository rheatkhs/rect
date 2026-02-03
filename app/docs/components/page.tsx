import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

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
    {
        title: "Field",
        description: "Wrapper for input with label and helper text.",
        href: "/docs/components/field",
    },
    {
        title: "Select",
        description: "Dropdown menu to select options.",
        href: "/docs/components/select",
    },
    {
        title: "Table",
        description: "Responsive table with headers and footers.",
        href: "/docs/components/table",
    },
    {
        title: "Progress",
        description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        href: "/docs/components/progress",
    },
    {
        title: "Progress",
        description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        href: "/docs/components/progress",
    },
    {
        title: "Checkbox",
        description: "A control that allows the user to toggle between checked and not checked.",
        href: "/docs/components/checkbox",
    },
    {
        title: "Skeleton",
        description: "Use to show a placeholder while content is loading.",
        href: "/docs/components/skeleton",
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
                        <Card className="h-full transition-transform group-hover:-translate-y-1">
                            <CardHeader>
                                <CardTitle>{component.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 mb-4 dark:text-slate-400">{component.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="secondary" className="w-full">View Docs</Button>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
