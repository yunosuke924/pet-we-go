import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { ToastContainer, toast } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pet We Go',
  description: 'ペットを通じてもっと出会いを'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang='en'>
        <body className={inter.className}>
          <ToastContainer />
          <Header />
          {children}
        </body>
      </html>
    </>
  )
}
