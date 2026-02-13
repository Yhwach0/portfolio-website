import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Doe - Full Stack Developer",
  description: "Passionate about creating beautiful, functional web experiences with modern technologies.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe - Full Stack Developer",
    description: "Passionate about creating beautiful, functional web experiences with modern technologies.",
    type: "website",
    url: "https://johndoe.dev",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
