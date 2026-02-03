
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"
import { CodeBlock } from "@/components/ui/code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Mail, ShieldCheck } from "lucide-react"
import { OnThisPage } from "@/components/on-this-page"

export default function BadgeDocsPage() {
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
                        <span className="font-bold uppercase tracking-wider text-black dark:text-white">Badge</span>
                    </div>
                    <h1 className="scroll-m-20 text-5xl font-black tracking-tight lg:text-6xl uppercase">
                        Badge
                    </h1>
                    <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
                        Displays a badge or a component that looks like a badge.
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
                                <Badge>Badge</Badge>
                            </div>
                        </TabsContent>
                        <TabsContent value="code">
                            <CodeBlock
                                fileName="examples/badge-demo.tsx"
                                code={`import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return <Badge>Badge</Badge>
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
                            fileName="components/ui/badge.tsx"
                            code={`import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border-2 border-black px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-white dark:focus:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-slate-50 hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-zinc-800 dark:text-slate-50 dark:hover:bg-zinc-800/80",
        destructive:
          "bg-red-500 text-slate-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80",
        outline: "text-slate-950 dark:text-slate-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }`}
                        />
                    </section>

                    <section id="examples" className="space-y-6 scroll-mt-20">
                        <h2 className="text-3xl font-black uppercase">Examples</h2>

                        {/* Secondary */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Secondary</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex check-board items-center justify-center min-h-[150px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <Badge variant="secondary">Secondary</Badge>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/badge-secondary.tsx"
                                        code={`import { Badge } from "@/components/ui/badge"

export function BadgeSecondary() {
  return <Badge variant="secondary">Secondary</Badge>
}`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Destructive */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Destructive</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex check-board items-center justify-center min-h-[150px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <Badge variant="destructive">Destructive</Badge>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/badge-destructive.tsx"
                                        code={`import { Badge } from "@/components/ui/badge"

export function BadgeDestructive() {
  return <Badge variant="destructive">Destructive</Badge>
}`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Outline */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Outline</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex check-board items-center justify-center min-h-[150px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <Badge variant="outline">Outline</Badge>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/badge-outline.tsx"
                                        code={`import { Badge } from "@/components/ui/badge"

export function BadgeOutline() {
  return <Badge variant="outline">Outline</Badge>
}`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* With Icon */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">With Icon</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex check-board items-center justify-center min-h-[150px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <div className="flex gap-4">
                                            <Badge>
                                                <Mail className="mr-1 h-3 w-3" />
                                                Email
                                            </Badge>
                                            <Badge variant="secondary">
                                                <ShieldCheck className="mr-1 h-3 w-3" />
                                                Verified
                                            </Badge>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/badge-icon.tsx"
                                        code={`import { Badge } from "@/components/ui/badge"
import { Mail, ShieldCheck } from "lucide-react"

export function BadgeIcon() {
  return (
    <div className="flex gap-4">
      <Badge>
        <Mail className="mr-1 h-3 w-3" />
        Email
      </Badge>
      <Badge variant="secondary">
        <ShieldCheck className="mr-1 h-3 w-3" />
        Verified
      </Badge>
    </div>
  )
}`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* With Spinner */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">With Spinner</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex check-board items-center justify-center min-h-[150px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <Badge>
                                            <Spinner size="sm" className="mr-2 text-white dark:text-slate-900" />
                                            Please wait
                                        </Badge>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/badge-spinner.tsx"
                                        code={`import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

export function BadgeSpinner() {
  return (
    <Badge>
      <Spinner size="sm" className="mr-2 text-white dark:text-slate-900" />
      Please wait
    </Badge>
  )
}`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Link */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Link</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex check-board items-center justify-center min-h-[150px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <Link href="#" className="cursor-pointer">
                                            <Badge>Link Badge</Badge>
                                        </Link>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/badge-link.tsx"
                                        code={`import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function BadgeLink() {
  return (
    <Link href="#">
      <Badge>Link Badge</Badge>
    </Link>
  )
}`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Custom Color */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Custom Color</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex check-board gap-4 items-center justify-center min-h-[150px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <Badge className="bg-emerald-500 hover:bg-emerald-600 border-black dark:border-white">Success</Badge>
                                        <Badge className="bg-amber-500 hover:bg-amber-600 border-black dark:border-white">Warning</Badge>
                                        <Badge className="bg-indigo-500 hover:bg-indigo-600 border-black dark:border-white">Info</Badge>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/badge-custom.tsx"
                                        code={`import { Badge } from "@/components/ui/badge"

export function BadgeCustom() {
  return (
    <div className="flex gap-4">
      <Badge className="bg-emerald-500 hover:bg-emerald-600 border-black dark:border-white">Success</Badge>
      <Badge className="bg-amber-500 hover:bg-amber-600 border-black dark:border-white">Warning</Badge>
      <Badge className="bg-indigo-500 hover:bg-indigo-600 border-black dark:border-white">Info</Badge>
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
