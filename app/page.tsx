import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center bg-yellow-50 dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="w-full border-b-2 border-black bg-white py-20 px-8 text-center md:py-32 dark:bg-black dark:border-white">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-5xl font-black text-[#facc15] uppercase tracking-tighter sm:text-7xl drop-shadow-[6px_6px_0_rgba(0,0,0,1)] dark:text-white dark:drop-shadow-[6px_6px_0_#facc15] [-webkit-text-stroke:2px_black]">
            Rect UI
          </h1>
          <p className="mx-auto max-w-xl text-xl font-bold leading-normal text-slate-800 dark:text-slate-200">
            Copy-paste ready components to build beautiful, responsive websites faster. No installation required.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/docs">
              <Button className="h-12 px-8 text-lg">
                Get Started
              </Button>
            </Link>
            <Link href="https://github.com" target="_blank">
              <Button variant="secondary" className="h-12 px-8 text-lg">
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 py-16 md:grid-cols-3">
        <Card className="bg-cyan-200">
          <CardHeader>
            <CardTitle>Hard Shadows</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              No blur allowed. We use strictly hard CSS shadows to give depth that punches you in the face.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-pink-300">
          <CardHeader>
            <CardTitle>Thick Borders</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              2px or 3px solid black borders on everything. Defines structure and separates content with authority.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-yellow-200">
          <CardHeader>
            <CardTitle>Raw Typography</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Bold headings and monospaced data text. Readability meets style in a clash of aggression.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
