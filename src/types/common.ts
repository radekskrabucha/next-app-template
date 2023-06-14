export type WithClassName<T = Record<string, never>> = {
  className?: string
} & T

export type Undefinedable<T> = T | undefined
