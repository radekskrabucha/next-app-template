import { Layout } from '@/layout'
import { MainFont, SecondaryFont } from '@/styles'
import '@/styles/globals.css'

export const metadata = {
  title: "Radek's Next.js Starter",
  description:
    'A starter for Next.js using app router with TypeScript and Tailwind CSS.'
}

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <link
      rel="icon"
      type="image/svg+xml"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥑</text></svg>"
    />
    <body
      className={`${MainFont.variable} ${SecondaryFont.variable} relative flex min-h-[100dvh] flex-col items-center overflow-x-hidden bg-slate-200 font-secondary`}
    >
      <Layout>{children}</Layout>
    </body>
  </html>
)

export default RootLayout
