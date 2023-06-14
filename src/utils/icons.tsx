export const iconWithClassName =
  (IconComponent: React.ElementType) =>
  // eslint-disable-next-line react/display-name
  ({ className }: Pick<React.ComponentProps<'svg'>, 'className'>) =>
    <IconComponent className={className} />
