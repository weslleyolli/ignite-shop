import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable:'--font-roboto'})

export const metadata = {
  title: 'Ignite shop',
  description: 'Shop da rocketseat',
}

const bodyStyle = {
  backgroundColor: '#121214',
  color: '#e1e1e6'
}

export default function RootLayout({children,}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body style={bodyStyle} className={roboto.className}>{children}</body>
    </html>
  )
}
