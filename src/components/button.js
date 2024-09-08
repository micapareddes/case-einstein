export function Button({
    title, variant='default', color='orange', onClick, link=null
}) {
    const variantStyle = {
        'orange': variant === 'outline' ? 'border-ORANGE-500 text-ORANGE-500 hover:bg-ORANGE-500 hover:bg-opacity-10 transition-colors duration-200' : 'bg-ORANGE-500',
        'blue': variant === 'outline' ? 'border-BLUE-500 text-BLUE-500' : 'bg-BLUE-500',
    }
    const button = link ? document.createElement('a') : document.createElement('button')
    const container = document.createElement('div')

    button.appendChild(container)

    if (variant === 'default') {
        const titleContainer = document.createElement('div')
        const iconContainer = document.createElement('div')
        const icon = document.createElement('i')

        titleContainer.textContent = title
        titleContainer.className = `${variantStyle[color]} px-4 py-2 rounded-full`
        iconContainer.className = `${variantStyle[color]} rounded-full px-2 py-1 transition ease-in-out delay-100 group-hover:-translate-y-1 group-hover:scale-110 duration-300`
        icon.className = 'ph ph-arrow-up-right text-2xl'

        container.className = 'group flex flex-row items-center text-CREAM space-x-[-10px] hover:opacity-90 transition-all duration-300'
        iconContainer.appendChild(icon)
        container.append(titleContainer, iconContainer)
    }

    if (variant === 'outline') {
        container.textContent = title
        container.textContent = title
        container.className = `px-4 py-2 rounded-full border ${variantStyle[color]}`
    }

    return button
}