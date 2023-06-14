import { env } from '@/utils'

export const InternalLink = {
  home: '/'
}
export const ExternalLink = {
  github: env.client.NEXT_PUBLIC_GITHUB_URL,
  linkedin: env.client.NEXT_PUBLIC_GITHUB_URL,
  twitter: env.client.NEXT_PUBLIC_GITHUB_URL,
  email: `mailto:${env.client.NEXT_PUBLIC_EMAIL}`,
  sourceCode: 'https://github.com/radekskrabucha/next-app-template'
}
