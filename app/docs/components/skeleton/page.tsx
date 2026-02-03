import { Skeleton } from "@/components/ui/skeleton"
import { CodeBlock } from "@/components/ui/code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"
import { OnThisPage } from "@/components/on-this-page"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function SkeletonDocsPage() {
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
                        <span className="font-bold uppercase tracking-wider text-black dark:text-white">Skeleton</span>
                    </div>
                    <h1 className="scroll-m-20 text-5xl font-black tracking-tight lg:text-6xl uppercase">
                        Skeleton
                    </h1>
                    <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
                        Use to show a placeholder while content is loading.
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
                                <div className="flex items-center space-x-4">
                                    <Skeleton className="h-12 w-12 rounded-full" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[250px]" />
                                        <Skeleton className="h-4 w-[200px]" />
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="code">
                            <CodeBlock
                                fileName="examples/skeleton-demo.tsx"
                                code={`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
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
                            fileName="components/ui/skeleton.tsx"
                            code={`import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-slate-900/10 dark:bg-slate-50/10",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }`}
                        />
                    </section>

                    <section id="examples" className="space-y-6 scroll-mt-20">
                        <h2 className="text-3xl font-black uppercase">Examples</h2>

                        {/* Avatar */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Avatar</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex check-board items-center justify-center min-h-[350px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <Skeleton className="h-12 w-12 rounded-full" />
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/skeleton-avatar.tsx"
                                        code={`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonAvatar() {
  return (
    <Skeleton className="h-12 w-12 rounded-full" />
  )
}`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Text */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Text</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex flex-col gap-4 items-center justify-center min-h-[350px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <div className="space-y-2">
                                            <Skeleton className="h-4 w-[250px]" />
                                            <Skeleton className="h-4 w-[200px]" />
                                            <Skeleton className="h-4 w-[225px]" />
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/skeleton-text.tsx"
                                        code={`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonText() {
  return (
    <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[225px]" />
    </div>
  )
}`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Card */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Card</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex check-board items-center justify-center min-h-[350px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <div className="flex flex-col space-y-3">
                                            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                                            <div className="space-y-2">
                                                <Skeleton className="h-4 w-[250px]" />
                                                <Skeleton className="h-4 w-[200px]" />
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/skeleton-card.tsx"
                                        code={`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Form */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Form</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex check-board items-center justify-center min-h-[350px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <div className="space-y-4 w-full max-w-sm">
                                            <div className="space-y-2">
                                                <Skeleton className="h-4 w-20" />
                                                <Skeleton className="h-10 w-full" />
                                            </div>
                                            <div className="space-y-2">
                                                <Skeleton className="h-4 w-20" />
                                                <Skeleton className="h-10 w-full" />
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/skeleton-form.tsx"
                                        code={`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonForm() {
  return (
    <div className="space-y-4 w-full max-w-sm">
        <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
        </div>
            <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
        </div>
    </div>
  )
}`}
                                    />
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Table */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Table</h3>
                            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                                    <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                                    <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="preview" className="mt-4">
                                    <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex check-board items-center justify-center min-h-[350px] shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                                        <div className="w-full bg-white dark:bg-zinc-950 p-4 border-2 border-black dark:border-white shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff]">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead className="w-[100px]"><Skeleton className="h-4 w-12" /></TableHead>
                                                        <TableHead><Skeleton className="h-4 w-20" /></TableHead>
                                                        <TableHead><Skeleton className="h-4 w-20" /></TableHead>
                                                        <TableHead className="text-right"><Skeleton className="h-4 w-12 ml-auto" /></TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {[...Array(5)].map((_, i) => (
                                                        <TableRow key={i}>
                                                            <TableCell className="font-medium"><Skeleton className="h-4 w-8" /></TableCell>
                                                            <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                                                            <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                                            <TableCell className="text-right"><Skeleton className="h-4 w-12 ml-auto" /></TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="code">
                                    <CodeBlock
                                        fileName="examples/skeleton-table.tsx"
                                        code={`import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function SkeletonTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]"><Skeleton className="h-4 w-12" /></TableHead>
          <TableHead><Skeleton className="h-4 w-20" /></TableHead>
          <TableHead><Skeleton className="h-4 w-20" /></TableHead>
          <TableHead className="text-right"><Skeleton className="h-4 w-12 ml-auto" /></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[...Array(5)].map((_, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium"><Skeleton className="h-4 w-8" /></TableCell>
            <TableCell><Skeleton className="h-4 w-16" /></TableCell>
            <TableCell><Skeleton className="h-4 w-24" /></TableCell>
            <TableCell className="text-right"><Skeleton className="h-4 w-12 ml-auto" /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
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
                    { title: "Usage", url: "#usage" },
                    { title: "Examples", url: "#examples" },
                ]}
            />
        </div>
    )
}
