
import { Spinner } from "@/components/ui/spinner"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "@/components/ui/field"
import { CodeBlock } from "@/components/ui/code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"
import { OnThisPage } from "@/components/on-this-page"

export default function SpinnerDocsPage() {
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
                        <span className="font-bold uppercase tracking-wider text-black dark:text-white">Spinner</span>
                    </div>
                    <h1 className="scroll-m-20 text-5xl font-black tracking-tight lg:text-6xl uppercase">
                        Spinner
                    </h1>
                    <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
                        Indicates that a process is active or the system is loading.
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
                                <Spinner size="lg" />
                            </div>
                        </TabsContent>
                        <TabsContent value="code">
                            <CodeBlock
                                fileName="examples/spinner-demo.tsx"
                                code={`import { Spinner } from "@/components/ui/spinner"

export function SpinnerDemo() {
  return <Spinner size="lg" />
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
                            fileName="components/ui/spinner.tsx"
                            code={`import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl"
}

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12",
}

export function Spinner({ className, size = "md", ...props }: SpinnerProps) {
  return (
    <div className={cn("flex items-center justify-center", className)} {...props}>
      <Loader2
        className={cn("animate-spin text-slate-900 dark:text-slate-50", sizeClasses[size])}
      />
    </div>
  )
}`}
                        />
                    </section>

                    <section id="examples" className="space-y-6 scroll-mt-20">
                        <h2 className="text-3xl font-black uppercase">Examples</h2>

                        {/* Sizes */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Sizes</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex flex-wrap gap-6 items-center justify-center min-h-[200px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <Spinner size="sm" />
                                        <Spinner size="md" />
                                        <Spinner size="lg" />
                                        <Spinner size="xl" />
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/spinner-sizes.tsx"
                                        code={`import { Spinner } from "@/components/ui/spinner"

export function SpinnerSizes() {
  return (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  )
}`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Button */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Button</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex gap-4 items-center justify-center min-h-[200px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <Button disabled>
                                            <Spinner size="sm" className="mr-2" />
                                            Please wait
                                        </Button>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/spinner-button.tsx"
                                        code={`import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerButton() {
  return (
    <Button disabled>
      <Spinner size="sm" className="mr-2" />
      Please wait
    </Button>
  )
}`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Badge */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Badge</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex gap-4 items-center justify-center min-h-[200px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <Badge>
                                            <Spinner size="sm" className="mr-1 text-slate-50 dark:text-slate-900" />
                                            Processing
                                        </Badge>
                                        <Badge variant="secondary">
                                            <Spinner size="sm" className="mr-1" />
                                            Connecting
                                        </Badge>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/spinner-badge.tsx"
                                        code={`import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerBadge() {
  return (
    <div className="flex gap-4">
        <Badge>
            <Spinner size="sm" className="mr-1 text-white" />
            Processing
        </Badge>
        <Badge variant="secondary">
            <Spinner size="sm" className="mr-1" />
            Connecting
        </Badge>
    </div>
  )
}`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Input Group */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Input Group</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex gap-4 items-center justify-center min-h-[200px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <div className="relative w-full max-w-sm">
                                            <Input placeholder="Checking backend..." disabled className="pr-10" />
                                            <div className="absolute inset-y-0 right-0 top-0 flex items-center pr-3 pointer-events-none">
                                                <Spinner size="sm" />
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/spinner-input.tsx"
                                        code={`import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerInput() {
  return (
    <div className="relative w-full max-w-sm">
        <Input placeholder="Checking backend..." disabled className="pr-10" />
        <div className="absolute inset-y-0 right-0 top-0 flex items-center pr-3 pointer-events-none">
            <Spinner size="sm" />
        </div>
    </div>
  )
}`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Empty State */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Empty State</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex flex-col gap-4 items-center justify-center min-h-[300px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <div className="flex flex-col items-center justify-center text-center space-y-3">
                                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 border-2 border-black dark:bg-zinc-800 dark:border-white">
                                                <Spinner size="xl" />
                                            </div>
                                            <h3 className="text-2xl font-bold uppercase">Loading Data</h3>
                                            <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                                                Please wait while we fetch the latest data from our servers. This may take a few moments.
                                            </p>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/spinner-empty.tsx"
                                        code={`import { Spinner } from "@/components/ui/spinner"

export function SpinnerEmpty() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-3">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 border-2 border-black dark:bg-zinc-800 dark:border-white">
            <Spinner size="xl" />
        </div>
        <h3 className="text-2xl font-bold uppercase">Loading Data</h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-sm">
            Please wait while we fetch the latest data from our servers. This may take a few moments.
        </p>
    </div>
  )
}`}
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
                    { title: "Examples", url: "#examples" },
                ]}
            />
        </div>
    )
}
