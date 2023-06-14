import { LinkProps } from 'next/link'
import { Link } from '@/components'

type NavLinkProps = {
  href: LinkProps['href']
  text: string
}

export const NavLink: React.FC<NavLinkProps> = ({ href, text }) => (
  <li>
    <Link href={href}>
      <p className="font-secondary text-lg max-md:text-base text-gray-600 transition-colors duration-150 hover:text-gray-800">
        {text}
      </p>
    </Link>
  </li>
)
