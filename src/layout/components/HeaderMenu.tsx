'use client'

import { cx } from 'class-variance-authority'
import { useToggle } from '@/hooks'
import { Hamburger } from './Hamburger'
import { NavLinks } from './NavLinks'
import { SocialIcons } from './SocialIcons'

export const HeaderMenu = () => {
  const [isOpen, toggleIsOpen] = useToggle()
  const onToggle = () => {
    toggleIsOpen()
    document.body.style.overflowY = isOpen ? 'visible' : 'hidden'
  }

  return (
    <div className="flex flex-1 items-center justify-end gap-6">
      <div
        className={cx(
          'flex flex-1 items-center justify-end gap-6 max-md:fixed max-md:top-0 max-md:w-full max-md:h-screen max-md:z-[1000] max-md:bg-slate-200 max-md:overflow-hidden max-md:transition-all max-md:duration-300 max-md:ease-in-out max-md:flex-col max-md:justify-center',
          isOpen ? 'max-md:left-0' : 'max-md:left-full'
        )}
      >
        <NavLinks />
        <SocialIcons iconClassName="hover:text-gray-800" />
      </div>
      <Hamburger
        isOpen={isOpen}
        onToggle={onToggle}
      />
    </div>
  )
}
