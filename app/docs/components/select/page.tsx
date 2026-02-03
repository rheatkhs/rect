
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "@/components/ui/select"
import { CodeBlock } from "@/components/ui/code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"
import { OnThisPage } from "@/components/on-this-page"
import { Label } from "@/components/ui/label"

export default function SelectDocsPage() {
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
            <span className="font-bold uppercase tracking-wider text-black dark:text-white">Select</span>
          </div>
          <h1 className="scroll-m-20 text-5xl font-black tracking-tight lg:text-6xl uppercase">
            Select
          </h1>
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
            Displays a list of options for the user to pick from—triggered by a button.
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
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <CodeBlock
                fileName="examples/select-demo.tsx"
                code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
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
              fileName="components/ui/select.tsx"
              code={`"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root
// ... (imports and primitives)

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border-2 border-black bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      "dark:border-white dark:bg-zinc-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300 dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
      "data-[state=open]:translate-x-[2px] data-[state=open]:translate-y-[2px] data-[state=open]:shadow-none transition-all",
       className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

// ... (SelectContent, SelectItem, etc.)

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}`}
            />
          </section>

          <section id="usage" className="space-y-6 scroll-mt-20">
            <div className="space-y-2">
              <h2 className="text-3xl font-black uppercase">Usage</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Import the select component to use it in your pages.
              </p>
            </div>
            <CodeBlock
              fileName="app/example.tsx"
              code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Example() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  )
}`}
            />
          </section>

          <section id="examples" className="space-y-6 scroll-mt-20">
            <h2 className="text-3xl font-black uppercase">Examples</h2>

            {/* Scrollable */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Scrollable</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Dropdown content automatically scrolls when items exceed the max height.
              </p>
              <Tabs defaultValue="preview" className="relative mr-auto w-full">
                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                  <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                  <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="mt-4">
                  <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex flex-wrap gap-4 items-center justify-center shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                    <Select>
                      <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder="Select a timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>North America</SelectLabel>
                          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                          <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                          <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                        </SelectGroup>
                        <SelectSeparator />
                        <SelectGroup>
                          <SelectLabel>Europe</SelectLabel>
                          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                          <SelectItem value="cet">Central European Time (CET)</SelectItem>
                          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                          <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
                          <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                          <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                        </SelectGroup>
                        <SelectSeparator />
                        <SelectGroup>
                          <SelectLabel>Asia</SelectLabel>
                          <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                          <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                          <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                          <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                          <SelectItem value="ist_indonesia">Indonesia Central Standard Time (WITA)</SelectItem>
                        </SelectGroup>
                        <SelectSeparator />
                        <SelectGroup>
                          <SelectLabel>Australia & Pacific</SelectLabel>
                          <SelectItem value="awst">Australian Western Standard Time (AWST)</SelectItem>
                          <SelectItem value="acst">Australian Central Standard Time (ACST)</SelectItem>
                          <SelectItem value="aest">Australian Eastern Standard Time (AEST)</SelectItem>
                          <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                          <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                        </SelectGroup>
                        <SelectSeparator />
                        <SelectGroup>
                          <SelectLabel>South America</SelectLabel>
                          <SelectItem value="art">Argentina Time (ART)</SelectItem>
                          <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                          <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                          <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
                <TabsContent value="code">
                  <CodeBlock
                    fileName="examples/select-scrollable.tsx"
                    code={`<Select>
  <SelectTrigger className="w-[280px]">
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
      <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
      <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
      <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
      <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
      <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
      <SelectItem value="cet">Central European Time (CET)</SelectItem>
      <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
      <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
      <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
      <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
    </SelectGroup>
    {/* ... more groups */}
  </SelectContent>
</Select>`}
                  />
                </TabsContent>
              </Tabs>
            </div>

            {/* Disabled */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Disabled</h3>
              <Tabs defaultValue="preview" className="relative mr-auto w-full">
                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                  <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                  <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="mt-4">
                  <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex flex-wrap gap-4 items-center justify-center shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                    <Select disabled>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Disabled" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Option Disabled" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="available">Available</SelectItem>
                        <SelectItem value="unavailable" disabled>Unavailable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
                <TabsContent value="code">
                  <CodeBlock
                    fileName="examples/select-disabled.tsx"
                    code={`// Disabled Select
<Select disabled>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Disabled" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>

// Disabled Option
<Select>
  <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Option Disabled" />
  </SelectTrigger>
  <SelectContent>
      <SelectItem value="available">Available</SelectItem>
      <SelectItem value="unavailable" disabled>Unavailable</SelectItem>
  </SelectContent>
</Select>`}
                  />
                </TabsContent>
              </Tabs>
            </div>

            {/* Form / Invalid */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase text-slate-700 dark:text-slate-300">Invalid State</h3>
              <Tabs defaultValue="preview" className="relative mr-auto w-full">
                <TabsList className="w-full justify-start rounded-none border-0 border-b-2 bg-transparent p-0">
                  <TabsTrigger value="preview" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Preview</TabsTrigger>
                  <TabsTrigger value="code" className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-black uppercase text-slate-500 shadow-none transition-none data-[state=active]:border-black data-[state=active]:text-black data-[state=active]:shadow-none dark:text-slate-400 dark:data-[state=active]:border-black dark:data-[state=active]:text-black">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="mt-4">
                  <div className="rounded-md border-2 border-black bg-slate-50 p-6 flex flex-wrap gap-4 items-center justify-center shadow-[4px_4px_0_0_#000] dark:bg-zinc-900 dark:border-black dark:shadow-[4px_4px_0_0_#fff]">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="fruit-error" className="text-red-500">Favorite Fruit</Label>
                      <Select>
                        <SelectTrigger className="w-[180px] border-red-500 text-red-500 focus:ring-red-500" id="fruit-error">
                          <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <p className="text-sm font-medium text-red-500">Please select a valid fruit.</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="code">
                  <CodeBlock
                    fileName="examples/select-invalid.tsx"
                    code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="fruit" className="text-red-500">Favorite Fruit</Label>
  <Select>
    <SelectTrigger className="w-[180px] border-red-500 text-red-500 focus:ring-red-500" id="fruit">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        {/* ... */}
      </SelectGroup>
    </SelectContent>
  </Select>
  <p className="text-sm font-medium text-red-500">Please select a valid fruit.</p>
</div>`}
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
