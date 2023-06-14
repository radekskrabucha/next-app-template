import { regexes } from '@/utils'
import NextLink, { LinkProps as InternalLinkProps } from 'next/link'

type LinkProps = {
  children: React.ReactNode
  className?: string
  disabled?: boolean
} & InternalLinkProps

export const Link: React.FC<LinkProps> = ({
  children,
  href,
  onMouseEnter,
  onClick,
  onTouchStart,
  className,
  disabled,
  ...props
}) => {
  if (disabled) {
    return (
      <span
        onMouseEnter={onMouseEnter}
        onClick={onClick}
        onTouchStart={onTouchStart}
        className={className}
      >
        {children}
      </span>
    )
  }
  if (typeof href === 'string' && regexes.isExternalLink(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={onMouseEnter}
        onClick={onClick}
        onTouchStart={onTouchStart}
        className={className}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink
      href={href}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      onTouchStart={onTouchStart}
      className={className}
      {...props}
    >
      {children}
    </NextLink>
  )
}
