interface navITem {
    name?: string;
    link: string;
}

export const navItems:navITem[] = [
    {
        name: "Home",
        link: '/'
    },
    {
        name: "Shop",
        link: '/shop'
    },
    {
        name: "Blog",
        link: '/blog'
    },
    {
        name: "Contact",
        link: '/error'
    },
]