import { Icons } from '@/assets/icons'
import { Link } from '@/components'
import { ExternalLink, InternalLink } from '@/config'
import { dateUtils } from '@/utils'

export const Footer = () => (
  <footer className="layout-container bg-gray-800 text-white">
    <div className="layout-section">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            className="text-4xl"
            href={InternalLink.home}
          >
            🥑
          </Link>
          <div>
            <h3 className="font-main text-lg text-gray-400">
              Next app router template
            </h3>
            <p className="max-w-[260px] font-secondary text-sm text-gray-500 max-sm:max-w-none">
              A starter for Next.js using app router with TypeScript and
              Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <Link href={ExternalLink.github}>
              <Icons.Github className="fill-current text-gray-500 transition-colors duration-150 hover:text-gray-300" />
            </Link>
            <Link href={ExternalLink.twitter}>
              <Icons.Twitter className="fill-current text-gray-500 transition-colors duration-150 hover:text-gray-300" />
            </Link>
            <Link href={ExternalLink.linkedin}>
              <Icons.LinkedIn className="fill-current text-gray-500 transition-colors duration-150 hover:text-gray-300" />
            </Link>
          </div>
          <Link href={ExternalLink.email}>
            <p className="font-secondary text-sm text-gray-500 transition-colors duration-150 hover:text-gray-300">
              rskrabucha13@gmail.com
            </p>
          </Link>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-500">
          © {dateUtils.getCurrentYear()} Radek Skrabucha
        </p>
      </div>
    </div>
  </footer>
)
