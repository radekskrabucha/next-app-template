export type WithClassName<T = Record<string, never>> = {
  className?: string
} & T
