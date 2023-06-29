import React from 'react'
import { ImageProps } from 'next/dist/client/image'
import NextImage from 'next/image'
import { shouldOptimizeImage } from '@/utils'

export const Image: React.FC<ImageProps> = props => (
  <NextImage
    {...props}
    unoptimized={!shouldOptimizeImage(props.src)}
  />
)
