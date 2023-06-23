import { Icon, Link } from '@/components'
import { ExternalLink } from '@/config'

type SocialIconsProps = {
  iconClassName?: string
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ iconClassName }) => (
  <div className="flex items-center gap-3">
    <Link href={ExternalLink.github}>
      <Icon
        id="github"
        width={24}
        height={24}
        className={`fill-current text-gray-500 transition-colors duration-150 hover:text-gray-300 ${iconClassName}`}
      />
    </Link>
    <Link href={ExternalLink.twitter}>
      <Icon
        id="twitter"
        width={24}
        height={24}
        className={`fill-current text-gray-500 transition-colors duration-150 hover:text-gray-300 ${iconClassName}`}
      />
    </Link>
    <Link href={ExternalLink.linkedin}>
      <Icon
        id="linkedin"
        width={24}
        height={24}
        className={`fill-current text-gray-500 transition-colors duration-150 hover:text-gray-300 ${iconClassName}`}
      />
    </Link>
  </div>
)
