type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <h1>Header</h1>
    <main className="flex flex-1 flex-col">{children}</main>
    <h1>Footer</h1>
  </>
)
