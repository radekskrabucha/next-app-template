import { LinkProps } from 'next/link'
import { Link } from '@/components'

type NavLinkProps = {
  href: LinkProps['href']
  text: string
  onClick: VoidFunction
}

export const NavLink: React.FC<NavLinkProps> = ({ href, text, onClick }) => (
  <li>
    <Link
      onClick={onClick}
      href={href}
    >
      <p className="font-secondary text-lg max-md:text-base text-gray-600 transition-colors duration-150 hover:text-gray-800">
        {text}
      </p>
    </Link>
  </li>
)
