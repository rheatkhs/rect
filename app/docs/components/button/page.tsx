import { Button } from "@/components/ui/button"
import Card from "@/components/ui/card"
import { CodeBlock } from "@/components/ui/code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"
import { OnThisPage } from "@/components/on-this-page"

export default function ButtonDocsPage() {
    return (
        <div className="xl:grid xl:grid-cols-[1fr_300px] gap-10 pb-10">
            <div className="space-y-12 min-w-0">
                {/* Header Section */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                        <span className="font-bold uppercase tracking-wider">Docs</span>
                        <ChevronRight className="h-4 w-4" />
                        <span className="font-bold uppercase tracking-wider">Components</span>
                        <ChevronRight className="h-4 w-4" />
                        <span className="font-bold uppercase tracking-wider text-black dark:text-white">Button</span>
                    </div>
                    <h1 className="scroll-m-20 text-5xl font-black tracking-tight lg:text-6xl uppercase">
                        Button
                    </h1>
                    <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
                        Displays a button or a component that looks like a button. Built for the modern web with a brutalist aesthetic.
                    </p>
                </div>

                {/* Main Preview (Default) */}
                <div className="space-y-4">
                    <Tabs defaultValue="preview" className="relative mr-auto w-full">
                        <div className="flex items-center justify-between pb-3">
                            <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                <TabsTrigger
                                    value="preview"
                                    className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black"
                                >
                                    Preview
                                </TabsTrigger>
                                <TabsTrigger
                                    value="code"
                                    className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black"
                                >
                                    Code
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsContent value="preview" className="mt-4">
                            <div className="relative rounded-md border-2 border-black bg-slate-50 p-10 flex check-board items-center justify-center min-h-[350px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                <Button>Default Button</Button>
                            </div>
                        </TabsContent>
                        <TabsContent value="code">
                            <CodeBlock
                                fileName="examples/button-demo.tsx"
                                code={`import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Button</Button>
}`}
                            />
                        </TabsContent>
                    </Tabs>
                </div>

                <div className="space-y-12">
                    <section id="installation" className="space-y-6 scroll-mt-20">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black uppercase">Installation</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                Copy and paste the following code into your project.
                            </p>
                        </div>
                        <CodeBlock
                            fileName="components/ui/button.tsx"
                            code={`import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'danger'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = 'primary', size = 'default', ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center border-2 border-black font-bold uppercase transition-all",
        "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        "dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
        "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
        "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        "disabled:opacity-50 disabled:pointer-events-none",
        
        variant === 'primary' && "bg-yellow-400 text-black hover:bg-yellow-500",
        variant === 'secondary' && "bg-white text-black hover:bg-gray-50",
        variant === 'accent' && "bg-cyan-400 text-black hover:bg-cyan-500",
        variant === 'danger' && "bg-red-500 text-white hover:bg-red-600",
        
        size === 'default' && "h-10 px-6 py-2",
        size === 'sm' && "h-9 px-3",
        size === 'lg' && "h-12 px-8 text-lg",
        size === 'icon' && "h-10 w-10 p-0",

        className
      )}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }`}
                        />
                    </section>

                    <section id="usage" className="space-y-6 scroll-mt-20">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black uppercase">Usage</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                Import the button component to use it in your pages.
                            </p>
                        </div>
                        <CodeBlock
                            fileName="app/example.tsx"
                            code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <Button variant="primary">Click Me</Button>
  )
}`}
                        />
                    </section>

                    <section id="examples" className="space-y-6 scroll-mt-20">
                        <h2 className="text-3xl font-black uppercase">Examples</h2>

                        {/* Examples: Variants */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Variants</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex flex-wrap gap-4 items-center justify-center shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <Button variant="primary">Primary</Button>
                                        <Button variant="secondary">Secondary</Button>
                                        <Button variant="accent">Accent</Button>
                                        <Button variant="danger">Danger</Button>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/variants.tsx"
                                        code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="accent">Accent</Button>
<Button variant="danger">Danger</Button>`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Sizes</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex flex-wrap gap-4 items-center justify-center shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <Button size="sm">Small</Button>
                                        <Button size="default">Default</Button>
                                        <Button size="lg">Large</Button>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/sizes.tsx"
                                        code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">State</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex flex-wrap gap-4 items-center justify-center shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <Button disabled>Disabled</Button>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/state.tsx"
                                        code={`<Button disabled>Disabled</Button>`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>

                    </section>
                </div>
            </div>

            <OnThisPage
                items={[
                    { title: "Installation", url: "#installation" },
                    { title: "Usage", url: "#usage" },
                    { title: "Examples", url: "#examples" },
                ]}
            />
        </div>
    )
}
