import { Footer, Header } from './components'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main className="layout-container flex-1">{children}</main>
    <Footer />
  </>
)
