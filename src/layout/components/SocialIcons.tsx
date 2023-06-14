import { Icons } from '@/assets/icons'
import { Link } from '@/components'
import { ExternalLink } from '@/config'

type SocialIconsProps = {
  iconClassName?: string
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ iconClassName }) => (
  <div className="flex items-center gap-3">
    <Link href={ExternalLink.github}>
      <Icons.Github
        className={`fill-current text-gray-500 transition-colors duration-150 hover:text-gray-300 ${iconClassName}`}
      />
    </Link>
    <Link href={ExternalLink.twitter}>
      <Icons.Twitter
        className={`fill-current text-gray-500 transition-colors duration-150 hover:text-gray-300 ${iconClassName}`}
      />
    </Link>
    <Link href={ExternalLink.linkedin}>
      <Icons.LinkedIn
        className={`fill-current text-gray-500 transition-colors duration-150 hover:text-gray-300 ${iconClassName}`}
      />
    </Link>
  </div>
)
