import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jesmi Kolipaka - SRE & AI Engineer',
  description: 'Site Reliability Engineer specializing in AI-driven automation, cloud infrastructure, and DevOps excellence',
  keywords: 'SRE, DevOps, AI Engineer, AWS, Kubernetes, Site Reliability',
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
