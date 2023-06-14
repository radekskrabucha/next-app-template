import { InternalLink } from '@/config'
import { NavLink } from './NavLink'

export const NavLinks = () => (
  <ul className="flex flex-col gap-2">
    <NavLink
      href={InternalLink.home}
      text="Home"
    />
  </ul>
)
