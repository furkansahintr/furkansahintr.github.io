export default defineAppConfig({
  global: {
    meetingLink: 'https://cal.com/frkn-shn/15min',
    available: true,
  },
  profile: {
    name: 'Furkan Şahin',
    job: 'Frontend Architect and Designer',
    email: 'furkan@sahin.biz',
    phone: '(+90) 543 287 11 27',
    picture: '/profile.png',
  },
  socials: {
    github: 'https://github.com/furkansahintr',
    twitter: 'https://x.com/FurkanA15789474',
    linkedin: 'https://linkedin.com/in/furkansahin61',
    instagram: 'https://www.instagram.com/frkn_labs',
    medium: 'https://medium.com/@dev.furkansahin',
  },
  seo: {
    title: 'Furkan Şahin - Frontend Architect and Designer',
    description: 'Bringing aesthetics and functionality together with modern frontend architecture and design-focused solutions.',
    url: 'https://furkansahin.tr',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
