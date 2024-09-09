import { Button } from "../../components/button.js"
import { TestimonalsCarousel } from "../../components/testimonals-carousel.js"
import { FollowUs } from "../../components/follow-us.js"
import { Header } from "../../components/header.js"
import { ImpactoBanner } from "../../components/impacto-banner.js"

export function LandingPage() {
    const body = document.getElementById('body')
    const buttonsLaptop = document.getElementById('container-action-buttons-laptop')
    const buttonsTabletAndMobile = document.getElementById('container-action-buttons-mobile-and-tablet')
    const about = document.getElementById('about')
    const introduction = document.getElementById('introduction')
    const socialsCta = document.getElementById('socials-cta')
    const testimonials = document.getElementById('testimonials')

    body.prepend(Header())
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
    about.prepend(
        ImpactoBanner()
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
} LandingPage()