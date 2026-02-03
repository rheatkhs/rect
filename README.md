# RECT

> **A Neobrutalist Component System for Next.js.**

**RECT** is a modern, accessible, and inclusive design system built with **Radix UI** and **Tailwind CSS**. It features a bold, high-contrast aesthetic characterized by hard shadows, thick borders, and vibrant colors—designed to make your applications pop.

![Project Status](https://img.shields.io/badge/STATUS-ACTIVE-black?style=for-the-badge)
![License](https://img.shields.io/badge/LICENSE-MIT-black?style=for-the-badge)

## 🚀 FEATURES

-   **Neobrutalist Design**: Unapologetically bold. Hard edges, solid shadows, and high saturation.
-   **Accessible**: Built on top of Radix UI primitives for full WAI-ARIA compliance.
-   **Composable**: Modular components that fit together perfectly.
-   **Dark Mode**: First-class support for dark mode with high-contrast adjustments.
-   **Typed**: Written in TypeScript for a robust development experience.

## 📦 COMPONENTS

We have implemented a core set of components to get you started:

| Component | Description |
| :--- | :--- |
| **Button** | Interactive elements with punchy hover states. |
| **Card** | Composite containers with header, content, and footer sections. |
| **Input** | Form fields with distinct focus states. |
| **Field** | **[NEW]** Composable wrapper for labels, inputs, descriptions, and errors. |
| **Select** | **[NEW]** Dropdowns with support for groups and scrolling. |
| **Table** | **[NEW]** Responsive data tables with bold headers. |
| **Progress**| **[NEW]** Linear progress indicators. |
| **Slider** | **[NEW]** Draggable input controls. |

## 🛠️ INSTALLATION

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rheatkhs/rect.git
    cd rect
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

## 💻 USAGE

Import components directly from the `@/components/ui` directory.

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <Card className="max-w-md bg-yellow-200">
      <CardHeader>
        <CardTitle>HELLO WORLD</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 font-medium">
            This is a neobrutalist card component. It demands attention.
        </p>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  )
}
```

## 🎨 THEME

The design system relies on a few key Tailwind utilities:

-   **Borders**: `border-2 border-black` (or `dark:border-white`)
-   **Shadows**: `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`
-   **Typography**: Uppercase headers, bold weights, and monospaced accents.

## 🤝 CONTRIBUTING

Contributions are welcome! Please feel free to submit a Pull Request.

---

*Built with Next.js 16 and Tailwind CSS.*
