import { Button } from "../../components/button.js"
import { Header } from "../../components/header.js"
import { ImpactoBanner } from "../../components/impacto-banner.js"

export function LandingPage() {
    const body = document.getElementById('body')
    const about = document.getElementById('about')
    const buttonsLaptop = document.getElementById('container-action-buttons-laptop')
    const buttonsTabletAndMobile = document.getElementById('container-action-buttons-mobile-and-tablet')

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

} LandingPage()