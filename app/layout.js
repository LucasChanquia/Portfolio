import './globals.css'
import { Quicksand } from 'next/font/google'

const inter = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'Lucas Chanquía | Full Stack Developer',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" href="/lc.ico" />
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
