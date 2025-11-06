import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Venin Client Systems',
  description: 'Professional software solutions for Australian businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
