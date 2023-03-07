import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-violet-500 dark:text-zinc-200 dark:hover:text-violet-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-violet-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ann Schulte</title>
        <meta name="description" content="Hi 👋 I’m Ann Schulte." />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi 👋 I’m Ann Schulte.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve loved making things for as long as I can remember, from
                building robots to converting a {"'"}84 mercedes benz to run on
                vegetable oil. I love problem solving and finding simple
                solutions.
              </p>
              <p>
                Today, I’m a software developer, focused on building clean,
                high-quality digital experiences. I am passionate about using
                code as a tool to solve problems and empower users.
              </p>
              <p>
                Outside of work, I am practicing being a better partner,
                daughter, sister, and aquantance. I love spending time with
                family, skateboarding, wandering through the woods, and walking
                my dog.
              </p>
              <p>
                Growing up skateboarding you learn a lot - skateboarders have a
                unique experience of getting to fail and fail again (with
                painful and real consequences) - until finally learning a trick.
                It unknowingly put me in a mindset of analyzing what I am doing,
                attempting to correct it, then trying to execute it again - over
                and over and over.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink> */}
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>

              <SocialLink
                href="mailto:aschulte1919@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                aschulte1919@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
