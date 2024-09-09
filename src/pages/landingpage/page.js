import { Button } from "../../components/button.js"
import { TestimonalsCarousel } from "../../components/testimonals-carousel.js"
import { FollowUs } from "../../components/follow-us.js"
import { Footer } from "../../components/footer.js"

export function LandingPage() {
    const body = document.getElementById('body')
    const buttonsLaptop = document.getElementById('container-action-buttons-laptop')
    const buttonsTabletAndMobile = document.getElementById('container-action-buttons-mobile-and-tablet')
    const menuButton = document.getElementById('menu-button')
    const menuIcon = document.getElementById('menu-icon')
    const nav = document.getElementById('nav')
    const navBarList = document.getElementById('nav-bar-list')
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
    const introduction = document.getElementById('introduction')
    const socialsCta = document.getElementById('socials-cta')
    const testimonials = document.getElementById('testimonials')

    menuButton.onclick = () => {
        nav.classList.toggle('hidden')
        menuIcon.classList.toggle('ph-x')
    }
    buttonsLaptop.append(
        Button({
            title: 'Seja um voluntário',
            color: 'blue'
        }),
        Button({
            title: 'Seja um aluno',
        })
    )    
    buttonsTabletAndMobile.append(
        Button({
            title: 'Seja um voluntário',
            color: 'blue'
        }),
        Button({
            title: 'Seja um aluno',
        })
    )
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
    introduction.appendChild(
        Button({
            title: 'Seja um voluntário',
            color: 'blue'
        }),
    )
    socialsCta.appendChild(FollowUs())
    testimonials.appendChild(
        TestimonalsCarousel()
    )
    body.appendChild(Footer())
} LandingPage()