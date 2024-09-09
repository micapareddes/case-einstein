export function Testimonial({
    imgSrc, testimonial, name, course
}) {
    const container = document.createElement('div')
    const image = document.createElement('img')
    const contentContainer = document.createElement('div')
    const testimonialParagraph = document.createElement('p')
    const titlesContainer = document.createElement('div')
    const nameTitle = document.createElement('p')
    const courseTitle = document.createElement('p')

    container.className = 'relative md:w-fit'

    image.className = 'hidden md:block'
    image.src = imgSrc
    image.alt = `Imagem de aluna ${name} em branco e preto com um fundo azul claro arredondado`
    image.width = 800
    image.height = 600

    contentContainer.className = 'min-w-60 bg-BLUE-100 p-8 rounded-md md:bg-transparent md:p-0 md:rounded-none text-BLACK md:absolute md:right-0 lg:right-20 md:bottom-4 max-w-72 md:max-w-96 space-y-4 md:space-y-10 lg:space-y-24'

    testimonialParagraph.textContent = `"${testimonial}"`
    testimonialParagraph.className = 'font-roboto text-sm md:text-lg'

    nameTitle.textContent = name
    nameTitle.className = 'font-bebas text-3xl md:text-5xl capitalize'

    courseTitle.textContent = course
    courseTitle.className = 'font-bebas text-sm md:text-lg capitalize'

    titlesContainer.append(nameTitle, courseTitle)
    contentContainer.append(testimonialParagraph, titlesContainer)
    container.append(contentContainer, image)

    return container
}