import { links } from "../config/links.js"
import { socials } from "../config/socials.js"

export function Footer() {
    const footer = document.createElement('footer')
    const container = document.createElement('div')
    const pageNav = document.createElement('nav')
    const socialsNav = document.createElement('nav')
    const pageNavList = document.createElement('ul')
    const socialsNavList = document.createElement('ul')
    const pageNavItems = [
        {
            title: 'Sobre nós',
            link: links.sobreNos,
        },{
            title: 'Nossa equipe',
            link: links.equipe,
        },{
            title: 'Resultados',
            link: links.resultados,
        },{
            title: 'Contato',
            link: links.contato,
        },{
            title: 'Apoie-nos',
            link: links.apoiador,
        },{
            title: 'Home',
            link: links.home,
        },
    ]
    const copyright = document.createElement('span')

    footer.className = 'w-full bg-BLACK'
    container.className = 'font-roboto w-full max-w-wrapper pt-10 pb-6 flex flex-col items-center justify-center gap-6'
    pageNavList.className = 'flex flex-row gap-10'
    socialsNavList.className = 'flex flex-row gap-6'
    copyright.textContent = '© 2024 Einstein Floripa'
    copyright.className = 'text-sm text-CREAM'

    pageNavItems.forEach((item) => {
        const itemContainer = document.createElement('li')
        const itemLink = document.createElement('a')
        itemLink.setAttribute('aria-label', `Navegar para página de ${item.title}`)
        itemLink.href = item.link
        itemLink.textContent = item.title
        itemLink.className = 'text-sm text-CREAM relative inline-block after:content-[""] after:h-[1px] after:w-0 after:bg-CREAM hover:after:w-full after:transition-all after:duration-300 after:absolute after:block'
        itemContainer.appendChild(itemLink)
        pageNavList.appendChild(itemContainer)
    })

    socials.forEach((social) => {
        const socialContainer = document.createElement('li')
        const socialLink = document.createElement('a')
        const logo = document.createElement('i')
        socialLink.setAttribute('aria-label', `Ir para ${social.name} do Einstein`)
        socialLink.href = social.link
        logo.className = `ph-fill ph-${social.phosphorIconName} text-xl text-CREAM hover:opacity-80`
        socialLink.appendChild(logo)
        socialContainer.appendChild(socialLink)
        socialsNavList.appendChild(socialContainer)
    })

    pageNav.appendChild(pageNavList)
    socialsNav.appendChild(socialsNavList)
    container.append(pageNav, socialsNav, copyright)
    footer.appendChild(container)
    return footer
}