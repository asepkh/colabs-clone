import './globals.css'

export const metadata = {
  title: 'Technical test - clone colabs',
  description: 'Cloning colabs.com.au website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
