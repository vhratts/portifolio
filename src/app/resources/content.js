import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Victor',
    lastName:  'Ratts',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Desenvolvedor Fullstack',
    avatar:    '/images/avatar.jpg',
    location:  'America/Sao_Paulo',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Portuguese']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: "Inscreva-se para receber novidades de projetos",
    description: "Sempre desenvolvendo soluções e contribuindo com novos projetos"
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/vhratts   ',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/vratts/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:victor@vratts.com',
    },
]

const home = {
    label: 'Inicio',
    title: `${person.name}' - Portfolio`,
    description: `Portifolio de trabalhos e projetos concluidos.`,
    headline: <>Desenvolvedor de sistemas e engenheiro de software</>,
    subline: <>Desenvolvedor FullStack desde 2013, com especialidade em PHP/Laravel. Formado pelo Instituto Federal do Ceará, sempre buscando inovar e encontrar soluções criativas para problemas complexos.</>
}

const about = {
    label: 'Sobre',
    title: 'Sobre mim',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introdução',
        description: <>Desenvolvedor FullStack desde 2013, com especialidade em PHP/Laravel, javascript, Ruby e kotlin. Formado pelo Instituto Federal do Ceará.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Experiencia de trabalho',
        experiences: [
            {
                company: 'Desenvolvedor Autônomo',
                timeframe: '2022 - Presente',
                role: 'Desenvolvedor',
                achievements: [
                    <>Desenvolvo e contruo aplicações nas mais diversas tecnologias. Construção de soluções dedicadas.</>,
                    <>Criação de plataformas roustas e sistemas de alta demanda.</>,
                    <>Desenvolvimento de Bots e serviços de comunicação em tempo real</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: 'https://raw.githubusercontent.com/victorratts13/laravel-task-manager/main/public/wallpaper-02.png',
                        alt: 'Laravel Task Manager',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/portifolio/bidlink/01.png',
                        alt: 'Bidlink - Sistema de leilão (Front)',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/portifolio/bidlink/07.png',
                        alt: 'Bidlink - Sistema de leilão (SaaS)',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Rover Labs',
                timeframe: '2019 - 2022',
                role: 'Desenvolvedor Senior',
                achievements: [
                    <>Responsavel pelo desenvolvimento de plataformas oferecidas aos clientes (sistemas para consultorio médico, sistema pra callcenter e sistema para comercios em geral)</>,
                    <>Suporte dedicado aos clientes Premium da empresa</>
                ],
                images: [ 
                 ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Instituto Federal do Ceará (IFCE)',
                description: <>Ciências da computação. (BACHAREL)</>,
            },
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Conhecimentos e Certificações',
        skills: [
            {
                title: 'Laravel',
                description: <>Desenvolvedor PHP/Laravel desde 2016.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };