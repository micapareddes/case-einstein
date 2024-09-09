import { Button } from "./button.js"
import { Testimonial } from "./testimonial.js"

export function TestimonalsCarousel() {
    const carousel = document.createElement('div')
    const testimonals = document.createElement('div')
    const content = [
        {
            imgSrc: '/src/img/evelin-bubble.png',
            name: 'evelin basques',
            course: 'ciências biológicas ufsc',
            testimonial: 'Antes, eu era muito desorganizada. Trabalhava, ia para o cursinho e deixava para estudar no dia seguinte, o que fazia com que eu não absorvesse o conteúdo. Quando entrei no Einstein, fui logo apadrinhada, mas tinha muita vergonha de pedir ajuda. No entanto, quando meu padrinho me ajudou a montar um cronograma de estudos, comecei a ver os resultados.',
        },
        {
            imgSrc: '/src/img/sindy-bubble.png',
            name: 'sindy de freitas',
            course: 'relações internacionais ufsc',
            testimonial: 'Entrar no Einstein fez com que minhas chances de realizar o sonho de passar na faculdade aumentassem. Descobri que, de fato, há uma luz no fim do túnel. Hoje, tenho uma relação de amizade e companheirismo com grande parte do pessoal e um respeito profundo por toda a turma.',
        },
        {
            imgSrc: '/src/img/carol-bubble.png',
            name: 'carol dias',
            course: 'economia ufsc',
            testimonial: 'Uma das lições que vou levar do Einstein é a importância de praticar a generosidade. Eu sempre fui alguém que se preocupa muito com os outros, e ver essa preocupação do Einstein com a gente é, para mim, a parte mais importante.',
        },
    ]

    carousel.className = 'relative w-full flex flex-row justify-center items-center overflow-hidden'
    testimonals.className = 'mx-2 md:mx-6 lg:mx-10'
    content.forEach((item, index) => {
        const carouselItem = Testimonial({
            imgSrc: item.imgSrc,
            testimonial: item.testimonial, 
            name: item.name, 
            course: item.course,
        })
        carouselItem.className = 'flex-none opacity-0'
        if (index === 0) {
            carouselItem.classList.add('opacity-100', 'scale-100')
        } else {
            carouselItem.classList.add('hidden')
        }
        testimonals.appendChild(carouselItem)
    })

    let currentIndex = 0

    function showItem(index) {
        const items = carousel.querySelectorAll('.flex-none')
        
        items[currentIndex].classList.remove('opacity-100', 'scale-100')
        items[currentIndex].classList.add('hidden')

        currentIndex = index

        items[currentIndex].classList.remove('hidden')
        items[currentIndex].classList.add('opacity-100', 'scale-100')
    }

    carousel.append(
        Button({
            variant: 'icon',
            phosphorIconName: 'arrow-left',
            color: 'black',
            onClick: () => {
                const newIndex = (currentIndex - 1 + content.length) % content.length
                showItem(newIndex)
            }
        }),
        testimonals,
        Button({
            variant: 'icon',
            phosphorIconName: 'arrow-right',
            color: 'black',
            onClick: () => {
                const newIndex = (currentIndex + 1) % content.length
                showItem(newIndex)
            }
        }),
    )

    return carousel
}