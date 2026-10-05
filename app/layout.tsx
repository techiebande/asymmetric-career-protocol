import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Asymmetric Career Protocol | Executive Playbook',
  description: 'The proven system mid-career professionals in the US, UK, and Canada use to automate administrative drain.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0B132B] text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  )
}
