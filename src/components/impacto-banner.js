export function ImpactoBanner() {
    const container = document.createElement('div')
    const metricas = [
        {
            metrica: '+100',
            titulo: 'aprovados',
        },
        {
            metrica: '+200',
            titulo: 'vidas transformadas',
        },
        {
            metrica: '+1260',
            titulo: 'horas de aula',
        },
        {
            metrica: '+4500',
            titulo: 'horas trabalhadas',
        },
    ]

    container.className = 'flex flex-row flex-wrap gap-10 justify-between items-center px-8 py-3.5 bg-BLUE-100'

    metricas.forEach((item) => {
        const metricaContainer = document.createElement('div')
        const metrica = document.createElement('p')
        const titulo = document.createElement('p')

        metricaContainer.className = 'flex flex-row items-center gap-3 text-CREAM'
        
        metrica.textContent = item.metrica
        metrica.className = 'font-bebas text-6xl'
        titulo.textContent = item.titulo
        titulo.className = 'font-roboto text-xl font-medium capitalize'

        metricaContainer.append(metrica, titulo)
        container.appendChild(metricaContainer)
    })
    return container
}