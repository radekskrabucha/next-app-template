import { Link } from '@/components'
import { InternalLink } from '@/config'
import { HeaderMenu } from './HeaderMenu'

export const Header = () => (
  <header className="layout-container sticky top-0 border-b border-gray-300 bg-slate-200">
    <div className="layout-section">
      <nav className="flex items-center gap-4">
        <Link
          className="text-4xl z-[1001]"
          href={InternalLink.home}
        >
          🥑
        </Link>
        <HeaderMenu />
      </nav>
    </div>
  </header>
)
