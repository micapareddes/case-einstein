</div>
    <div align=center>
    <img src="/src/img/einstein-icon.svg" width=100px>
    <h1>Case Web - Einstein</h1>
</div>

## [🔗 Link de acesso](https://case-einstein.vercel.app/)

![Einstein LandingPage Capa](/src/img/cover.png)

## Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Design](#design)
- [Gitflow](#gitflow)
- [Organização do Projeto](#organização-do-projeto)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Acesso ao site](#acesso)

## Sobre

Este projeto foi desenvolvido como parte do Case Programação - Web do Einstein Floripa. A proposta era criar um site estático ou uma Single Page Application (SPA) utilizando frameworks modernos e bibliotecas populares. Para este case, foi utilizado HTML, JavaScript e TailwindCSS.

## Tecnologias

- Javascript
- TailwindCSS

Apesar de ter experiência com o framework React e o desenvolvimento de Single Page Applications (SPA), optei por usar tecnologias mais simples, como JavaScript e HTML estático. Essa decisão foi tomada para não aumentar a complexidade do projeto, considerando que uma landing page tem uma estrutura simples que não necessita da arquitetura avançada de uma SPA.

Além disso, acredito que uma SPA não seja a melhor estratégia para uma landing page, visto que o SEO pode ser prejudicado. O Google enfrenta dificuldades para indexar o conteúdo dinâmico de uma SPA, enquanto páginas estáticas otimizam o ranqueamento nos mecanismos de busca, melhorando a visibilidade.

## Design

No case, a tarefa era desenvolver uma landing page com a liberdade de fazer alterações ao design original, o que me proporcionou a oportunidade de demonstrar minha experiência em design, conforme havia mencionado na inscrição.

O meu objetivo era criar uma página que refletisse a identidade visual e os valores da marca Einstein, respeitando a flexibilidade oferecida para ajustes no design e que falasse diretamente com os três principais públicos: alunos, voluntários e apoiadores.

Para o desenvolvimento coerente, que não fugisse das idéias centrais do Eistein, realizei uma pesquisa aprofundada sobre a marca, incluindo materiais do Instagram além dos materiais disponibilizados no case. Mantive o azul da marca, porém em outras tonalidades, e adicionei um laranja como cor complementar, com o propósito de transmitir confiança e jovialidade. Por fim, busquei preservar a essência dos depoimentos da proposta original, adaptando-os ao novo tom de voz da página, além de integrar o footer utilizado no site oficial do Einstein.

#### [🔗 Link ao design no figma](https://www.figma.com/design/L3ISLtPkKDpaLrXmr5CkAm/Einstein-Case-LP?node-id=0-1&t=LkKvRwYMwJrvdKZX-1)

## Organização do Projeto

```bash
    src/
    ├── components/        # Componentes
    ├── pages/             # Script das Páginas
    ├── img/               # Imagens
    ├── styles/            # Configurações do Tailwind
    └── config/            # Objetos utilitarios (links, etc.)
```

## Gitflow
O fluxo de trabalho utilizado neste projeto segue uma abordagem baseada em duas branches principais: *main* e *dev*.

- *main*: Esta branch reflete o código em produção, ou seja, sempre que houver uma versão estável e pronta para ser disponibilizada ao público, ela será mesclada na branch main.
  
- *dev*: A branch de desenvolvimento contém o código com as últimas implementações em fase de desenvolvimento e testes. Ela serve como base para todas as novas funcionalidades e ajustes.

O processo de desenvolvimento segue os seguintes passos:
1. A partir da branch *dev*, novas branches são criadas para desenvolver funcionalidades ou corrigir problemas específicos. Essas branches seguem a convenção de nomes:
   - *feat/* para novas funcionalidades (ex: feat/landingpage, feat/deploy).
   - *fix/* para correções de bugs (ex: fix/header-bug).
   - *chore/* para tarefas menores ou ajustes que não afetam diretamente a funcionalidade (ex: chore/update-dependencies).

2. Quando o desenvolvimento de uma funcionalidade ou correção é concluído, a branch correspondente é mesclada de volta na branch *dev* através de um pull request, garantindo que o código seja revisado e testado.

3. Após a conclusão de todas as funcionalidades planejadas e a estabilização do código, a branch *dev* é mesclada na branch *main* para gerar uma nova versão de produção.

![image](https://github.com/user-attachments/assets/9f9e1f61-2427-4afc-90f4-1e870ea94237)

## Como Executar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/micapareddes/case-einstein.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd case-einstein
   ```
3. Instale as dependências:
   ```bash
   npm i
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run start
   ```
5. Acesse o projeto em seu navegador no endereço [http://localhost:8080](http://localhost:8080)

## Acesso
#### [🔗 Link de acesso](https://case-einstein.vercel.app/)
