import './globals.css'

export const metadata = {
  title: 'Promptify',
  description: 'A next generation Promptd database for marketers and copywriters.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


