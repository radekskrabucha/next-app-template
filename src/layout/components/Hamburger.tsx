import { cx } from 'class-variance-authority'

type HamburgerProps = {
  isOpen: boolean
  onToggle: VoidFunction
}

export const Hamburger: React.FC<HamburgerProps> = ({ isOpen, onToggle }) => (
  <button
    onClick={onToggle}
    className="w-6 h-5 hidden max-md:block relative z-[1001]"
  >
    <div
      className={cx(
        'h-[2px] bg-gray-600 transition-all absolute',
        isOpen ? 'top-[10px] w-0 left-1/2' : 'top-0 w-3/5 left-0'
      )}
    />
    <div
      className={cx(
        'h-[2px] w-full bg-gray-600 transition-all absolute top-[10px]',
        isOpen ? 'transform rotate-45' : 'transform rotate-0'
      )}
    />
    <div
      className={cx(
        'h-[2px] w-full bg-gray-600 transition-all absolute top-[10px]',
        isOpen ? 'transform -rotate-45' : 'transform rotate-0'
      )}
    />
    <div
      className={cx(
        'h-[2px] bg-gray-600 transition-all absolute left-1/2',
        isOpen ? 'top-[10px] w-0' : 'top-[20px] w-3/5'
      )}
    />
  </button>
)
