import { Button } from "/src/components/button.js"

export function Header() {
    const header = document.createElement('header')
    const container = document.createElement('div')
    const navBar = document.createElement('nav')
    const navBarList = document.createElement('ul')
    const logoContainer = document.createElement('a')
    const logo = document.createElement('img')
    const burguerIcon = document.createElement('i')
    const burguerMenu = document.createElement('button')
    const navBarItems = [
        {
            name: 'Sobre nós',
        },
        {
            name: 'Nossa equipe',
        },        
        {
            name: 'Resultados',
        },
        {
            name: 'Contato',
        },
    ]
    header.className = 'relative w-full px-auto'
    container.className = 'flex flex-wrap items-center justify-between gap-5 px-8 py-5 w-full max-w-wrapper'
    navBar.className = 'hidden absolute z-10 top-20 left-0 right-0 p-8 rounded-b-xl shadow-md border-t border-t-black border-opacity-10 bg-CREAM md:static md:z-auto md:top-auto md:left-auto md:right-auto md:p-0 md:rounded-none md:shadow-none md:border-0 md:bg-transparent md:flex md:w-full md:justify-center lg:w-fit'
    navBarList.className = 'flex flex-col md:flex-row flex-wrap items-center gap-10'
    
    logoContainer.className = 'cursor-pointer w-24 md:w-28'
    logoContainer.href = './'
    logo.src = '/src/img/einstein-logo.png'
    logo.height = 45
    logo.width = 126

    burguerMenu.className = 'md:hidden cursor-pointer'
    burguerIcon.className = 'ph ph-list text-2xl'

    burguerMenu.onclick = () => {
        navBar.classList.toggle('hidden')
        burguerIcon.classList.toggle('ph-x')
    }

    navBarItems.forEach((item) => {
        const itemContainer = document.createElement('li')
        const linkItem = document.createElement('a')
        linkItem.textContent = item.name
        linkItem.href = item.link
        linkItem.className = 'relative inline-block after:content-[""] after:h-[2px] after:w-0 after:bg-BLUE-500 hover:after:w-full after:transition-all after:duration-300 after:absolute after:block'
        itemContainer.appendChild(linkItem)
        navBarList.appendChild(itemContainer)
    })
    navBarList.appendChild(
        Button({
            title: 'Seja um apoiador',
            variant: 'outline'
        })
    )
    navBar.appendChild(navBarList)
    logoContainer.appendChild(logo)
    burguerMenu.appendChild(burguerIcon)
    container.append(logoContainer, burguerMenu, navBar)
    header.appendChild(container)
    return header
}