"use client"

import { ThemeProvider as NextThemeProvider } from 'next-themes'
export function Provider ({children}:{children: React.ReactNode}) {
return <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}</NextThemeProvider>
}
