import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Venin Client Systems',
  description: 'Building software for Australian businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
