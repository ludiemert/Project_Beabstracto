import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Tecnolog } from './components/Tecnolog'

// import { AudioVisual } from './components/AudioVisual'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Project-Web Beabstracto',
  description: 'Beabstracto page project test',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <div className=" dark:base-bg-dark-800 flex  min-h-screen bg-base-bg-bg font-proximaNova dark:to-base-text-dark-800 ">
          <main className="px-4 pb-12 pt-24 lg:px-8 lg:pt-8 ">{children}</main>

          <Tecnolog />
        </div>
      </body>
    </html>
  )
}

//
