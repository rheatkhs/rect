import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-50 p-8 font-mono text-black selection:bg-pink-300">
      <div className="mx-auto max-w-4xl space-y-16">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-6xl font-black uppercase tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
            Rect UI
          </h1>
          <div className="mt-6">
            <span className="inline-block border-2 border-black bg-white px-4 py-1 text-xl font-bold uppercase shadow-[4px_4px_0_0_#000]">
              Neobrutalist Design System
            </span>
          </div>
        </header>

        {/* Buttons Section */}
        <section>
          <h2 className="mb-8 inline-block border-b-4 border-black text-3xl font-black uppercase">
            Buttons
          </h2>
          <div className="flex flex-wrap gap-6 p-8 border-2 border-black bg-white shadow-[8px_8px_0_0_#000]">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="danger">Danger</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        {/* Inputs Section */}
        <section>
          <h2 className="mb-8 inline-block border-b-4 border-black text-3xl font-black uppercase">
            Inputs
          </h2>
          <div className="grid max-w-xl gap-6 p-8 border-2 border-black bg-white shadow-[8px_8px_0_0_#000]">
            <div className="space-y-2">
              <label className="font-bold uppercase">Default Input</label>
              <Input placeholder="Type something..." />
            </div>
            <div className="space-y-2">
              <label className="font-bold uppercase">With Button</label>
              <div className="flex gap-3">
                <Input placeholder="Enter email..." className="flex-1" />
                <Button>Submit</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section>
          <h2 className="mb-8 inline-block border-b-4 border-black text-3xl font-black uppercase">
            Cards
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card title="Raw & Bold">
              <p className="mb-4">
                This component system uses strict 2px black borders and hard shadows to create distinct layers.
              </p>
              <Button className="w-full">Get Started</Button>
            </Card>
            <Card title="Themed Card" className="bg-cyan-200">
              <p className="mb-4">
                Components verify their visual weight through high contrast colors like Cyan, Yellow, and Pink.
              </p>
              <div className="flex gap-2">
                <Button variant="secondary" className="flex-1">Decline</Button>
                <Button className="flex-1">Accept</Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
