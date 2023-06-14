import { Icons } from '@/assets/icons'
import { Button, Link } from '@/components'
import { ExternalLink } from '@/config'

export const HomePage = () => (
  <section className="layout-section gap-8 items-start">
    <h1 className="font-main text-6xl font-extrabold max-sm:text-3xl">
      <span className="text-blue-500">Radek&apos;s</span> Next.js Starter
    </h1>
    <Button asChild>
      <Link
        className="flex items-center gap-2 capitalize"
        href={ExternalLink.sourceCode}
      >
        <Icons.Github className="fill-current text-white" />
        source code
      </Link>
    </Button>
  </section>
)
