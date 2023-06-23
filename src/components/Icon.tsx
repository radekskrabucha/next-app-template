import { IconId } from '@/types'

type IconProps = {
  id: IconId
} & React.ComponentProps<'svg'>

export const Icon: React.FC<IconProps> = ({ id, ...props }) => (
  <svg {...props}>
    <use href={`/sprite.svg#${id}`} />
  </svg>
)
