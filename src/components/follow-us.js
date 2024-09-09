import { socials } from "../config/socials.js"

export function FollowUs() {
    const container = document.createElement('div')
    const title = document.createElement('span')

    container.appendChild(title)

    container.className = 'flex flex-col w-52'

    title.textContent = 'Nos acompanhe!'
    title.className = 'w-full p-2.5 border-b border-BLACK border-opacity-40 font-medium'

    socials.forEach((social) => {
        const socialContainer = document.createElement('a')
        const contentContainer = document.createElement('div')
        const icon = document.createElement('i')
        socialContainer.setAttribute('aria-label', `Ir para ${social.name} do Einstein`)
        socialContainer.href = social.link
        socialContainer.className = 'group w-full p-2.5 border-b border-BLACK border-opacity-40'

        contentContainer.textContent = social.name
        contentContainer.className = 'flex justify-between group-hover:font-medium capitalize'
        icon.className = 'ph ph-arrow-up-right text-sm group-hover:text-base transition-all'

        contentContainer.appendChild(icon)
        socialContainer.appendChild(contentContainer)
        container.appendChild(socialContainer)
    })

    return container
}