"use client"

import { Check, Copy, FileCode, FileJson, FileType, Terminal } from "lucide-react"
import * as React from "react"
import hljs from "highlight.js"
import "highlight.js/styles/github-dark.css" // Importing the theme

import { cn } from "@/lib/utils"

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    code: string
    fileName?: string
}

export function CodeBlock({
    className,
    code,
    fileName,
    ...props
}: CodeBlockProps) {
    const [hasCopied, setHasCopied] = React.useState(false)

    const onCopy = () => {
        navigator.clipboard.writeText(code)
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    const lines = code.trim().split('\n')
    const isMultiLine = lines.length > 1

    const getIcon = (name?: string) => {
        if (!name) return <Terminal className="h-4 w-4 mr-2 text-zinc-400" />
        if (name.endsWith('.tsx') || name.endsWith('.ts')) return <FileCode className="h-4 w-4 mr-2 text-blue-400" />
        if (name.endsWith('.css')) return <FileType className="h-4 w-4 mr-2 text-sky-300" />
        if (name.endsWith('.json')) return <FileJson className="h-4 w-4 mr-2 text-yellow-400" />
        return <FileCode className="h-4 w-4 mr-2 text-zinc-400" />
    }

    const getLanguage = (name?: string) => {
        if (!name) return 'typescript'
        if (name.endsWith('.tsx')) return 'xml' // HLJS uses XML/HTML for JSX/TSX usually, or javascript/typescript
        if (name.endsWith('.ts')) return 'typescript'
        if (name.endsWith('.css')) return 'css'
        if (name.endsWith('.json')) return 'json'
        return 'plaintext'
    }

    // Highlight the code
    const highlightedCode = React.useMemo(() => {
        const lang = getLanguage(fileName)
        try {
            return hljs.highlight(code.trim(), { language: lang }).value
        } catch (e) {
            return hljs.highlightAuto(code.trim()).value
        }
    }, [code, fileName])

    return (
        <div className={cn("relative overflow-hidden rounded-md border-2 border-black dark:border-white", className)} {...props}>
            <div className="flex h-12 items-center justify-between bg-zinc-900 border-b border-zinc-800 px-4">
                <div className="flex items-center">
                    {getIcon(fileName)}
                    <span className="text-sm font-medium text-zinc-100">{fileName}</span>
                </div>
                <button
                    onClick={onCopy}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400"
                >
                    {hasCopied ? (
                        <Check className="h-4 w-4" />
                    ) : (
                        <Copy className="h-4 w-4" />
                    )}
                    <span className="sr-only">Copy code</span>
                </button>
            </div>
            <div className="overflow-x-auto bg-zinc-950 p-4">
                <div className="flex">
                    {isMultiLine && (
                        <div className="flex flex-col text-right select-none pr-4 border-r border-zinc-800 mr-4 text-zinc-600 font-mono text-sm leading-relaxed">
                            {lines.map((_, i) => (
                                <span key={i} className="inline-block h-[1.5em]">{i + 1}</span>
                            ))}
                        </div>
                    )}
                    <pre className="font-mono text-sm leading-relaxed flex-1 overflow-x-auto">
                        <code
                            className={`hljs language-${getLanguage(fileName)} bg-transparent p-0 block`}
                            dangerouslySetInnerHTML={{ __html: highlightedCode }}
                        />
                    </pre>
                </div>
            </div>
        </div>
    )
}
