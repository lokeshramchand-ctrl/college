import '../styles/globals.css'
import '../styles/hero.css'
import '../styles/components.css'
import '../styles/forms.css'

export const metadata = {
  title: "IIT BHU Varanasi",
  description: "College Information SPA"
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