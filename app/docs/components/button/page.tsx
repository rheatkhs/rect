import { Button } from "@/components/ui/button"
import Card from "@/components/ui/card"

export default function ButtonDocsPage() {
    return (
        <div className="space-y-10">
            <div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase mb-4">
                    Button
                </h1>
                <p className="text-xl text-slate-700">
                    Displays a button or a component that looks like a button.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-black uppercase border-b-2 border-black pb-2">
                    Key Features
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Hard Shadow:</strong> Collapses on active/press.</li>
                    <li><strong>Thick Borders:</strong> standard 2px black border.</li>
                    <li><strong>Uppercase Text:</strong> Aggressive typography.</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-black uppercase border-b-2 border-black pb-2">
                    Usage
                </h2>
                <Card title="Preview" className="bg-slate-50">
                    <div className="flex flex-wrap gap-4">
                        <Button>Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="accent">Accent</Button>
                        <Button variant="danger">Danger</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}
