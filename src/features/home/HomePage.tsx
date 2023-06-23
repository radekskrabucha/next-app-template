import Image from 'next/image'
import { Button, Icon, Link } from '@/components'
import { ExternalLink } from '@/config'
import Avocado from '@/public/images/opengraph-image.jpg'

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
        <Icon
          id="github"
          width={24}
          height={24}
          className="fill-current text-white"
        />
        source code
      </Link>
    </Button>
    <Image
      src={Avocado}
      alt="Avocado"
    />
  </section>
)
