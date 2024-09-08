import { Button } from "../../components/button.js"
import { Header } from "../../components/header.js"

export function LandingPage() {
    const body = document.getElementById('body')
    const ctasContainerLaptop = document.getElementById('ctas-container-lg')
    const ctasContainerTabletAndMobile = document.getElementById('ctas-container-sm')

    body.prepend(Header())
    ctasContainerLaptop.append(
        Button({
            title: 'Seja um voluntário',
            color: 'blue'
        }),
        Button({
            title: 'Seja um aluno',
        })
    )    
    ctasContainerTabletAndMobile.append(
        Button({
            title: 'Seja um voluntário',
            color: 'blue'
        }),
        Button({
            title: 'Seja um aluno',
        })
    )
} LandingPage()