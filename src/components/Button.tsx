import { Slot } from '@radix-ui/react-slot'
import { cva, cx, type VariantProps } from 'class-variance-authority'

type ButtonProps = {
  asChild?: boolean
} & Pick<
  React.ComponentProps<'button'>,
  'children' | 'className' | 'onClick' | 'disabled' | 'type'
> &
  VariantProps<typeof buttonStyles>

export const Button: React.FunctionComponent<ButtonProps> = ({
  variant,
  className,
  children,
  type = 'button',
  disabled,
  onClick,
  asChild
}) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cx('', buttonStyles({ variant }), className)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Comp>
  )
}
export const buttonStyles = cva(
  'inline-flex py-2 px-4 min-w-[180px] items-center justify-center transition-color duration-150 rounded-md disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        outlined:
          'text-blue-500 bg-transparent border-blue-500 border-2 disabled:border-blue-300 disabled:text-blue-300 hover:border-blue-400 hover:bg-blue-100 disabled:bg-transparent hover:text-blue-400',
        filled: 'bg-blue-500 text-white disabled:bg-blue-300 hover:bg-blue-400'
      }
    },
    defaultVariants: {
      variant: 'filled'
    }
  }
)
