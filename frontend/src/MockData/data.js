export const NavbarMenu =  [
    {
        id:1,
        title: "Home",
        link: "#",
        dropdown: false
    },
     {
        id:2,
        title: "Browse",
        link: "#",
        dropdown: true,
        dropdownItems: [
            { title: 'Textbooks', link: '/category/textbooks' },
            { title: 'Electronics', link: '/category/electronics' },
            { title: 'Furniture', link: '/category/furniture' },
            { title: 'Clothing', link: '/category/clothing' },
            { title: 'View All', link: '/browse' },
        ]
    },
    {
        id:3,
        title: "Sell",
        link: "#",
        dropdown: false
    }
    
]