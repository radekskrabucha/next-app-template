import { Link } from '@/components'
import { InternalLink } from '@/config'
import { NavLinks } from './NavLinks'
import { SocialIcons } from './SocialIcons'

export const Header = () => (
  <header className="layout-container sticky top-0 border-b border-gray-300 bg-slate-200">
    <div className="layout-section">
      <nav className="flex items-center gap-4">
        <Link
          className="text-4xl"
          href={InternalLink.home}
        >
          🥑
        </Link>
        <div className="flex flex-1 items-center justify-end gap-6">
          <NavLinks />
          <SocialIcons iconClassName="hover:text-gray-800" />
        </div>
      </nav>
    </div>
  </header>
)
