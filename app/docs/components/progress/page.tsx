"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Field, FieldLabel } from "@/components/ui/field"
import { CodeBlock } from "@/components/ui/code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"
import { OnThisPage } from "@/components/on-this-page"

export default function ProgressDocsPage() {
    const [progress, setProgress] = React.useState(13)
    const [controlledProgress, setControlledProgress] = React.useState(50)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])

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
                        <span className="font-bold uppercase tracking-wider text-black dark:text-white">Progress</span>
                    </div>
                    <h1 className="scroll-m-20 text-5xl font-black tracking-tight lg:text-6xl uppercase">
                        Progress
                    </h1>
                    <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
                        Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
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
                                <Progress value={progress} className="w-[60%]" />
                            </div>
                        </TabsContent>
                        <TabsContent value="code">
                            <CodeBlock
                                fileName="examples/progress-demo.tsx"
                                code={`"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
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
                            fileName="components/ui/progress.tsx"
                            code={`"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full border-2 border-black bg-slate-100",
      "dark:border-white dark:bg-zinc-800",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-slate-900 transition-all dark:bg-slate-50 border-r-2 border-black dark:border-white"
      style={{ transform: \`translateX(-\${100 - (value || 0)}%)\` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }`}
                        />
                    </section>

                    <section id="examples" className="space-y-6 scroll-mt-20">
                        <h2 className="text-3xl font-black uppercase">Examples</h2>

                        {/* Label */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">With Label</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Use the Field component to add a label to the progress bar.
                            </p>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex flex-wrap gap-4 items-center justify-center shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <Field className="w-[60%]">
                                            <FieldLabel>Loading</FieldLabel>
                                            <Progress value={60} />
                                        </Field>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/progress-label.tsx"
                                        code={`import { Progress } from "@/components/ui/progress"
import { Field, FieldLabel } from "@/components/ui/field"

export function ProgressWithLabel() {
  return (
    <Field>
      <FieldLabel>Loading</FieldLabel>
      <Progress value={60} />
    </Field>
  )
}`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Controlled */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Controlled</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                A progress bar that can be controlled by a slider.
                            </p>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex flex-col gap-8 items-center justify-center shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <Progress value={controlledProgress} className="w-[60%]" />
                                        <div className="w-[60%] flex gap-4 items-center">
                                            <span className="text-sm font-bold w-12">{controlledProgress}%</span>
                                            <Slider
                                                value={[controlledProgress]}
                                                onValueChange={(vals) => setControlledProgress(vals[0])}
                                                max={100}
                                                step={1}
                                            />
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/progress-controlled.tsx"
                                        code={`"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"

export function ProgressControlled() {
  const [progress, setProgress] = React.useState(50)

  return (
    <div className="grid w-full max-w-sm items-center gap-6">
      <Progress value={progress} />
      <Slider
        value={[progress]}
        onValueChange={(vals) => setProgress(vals[0])}
        max={100}
        step={1}
      />
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
