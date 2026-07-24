<div align="center">

<img src="/src/img/einstein-icon.svg" width=100px>

# Einstein Web Case

**A landing page redesigned and rebuilt for Einstein Floripa's selection process.**

[Live site](https://case-einstein.vercel.app/) · [Design](https://www.figma.com/design/L3ISLtPkKDpaLrXmr5CkAm/Einstein-Case-LP?node-id=0-1)

[Português](README.pt-BR.md) · [Español](README.es.md)

</div>

![Einstein LandingPage Capa](/src/img/cover.png)

## About

Built for Einstein Floripa's Web Programming case, part of their volunteer selection process.
The brief allowed either a static site or a Single Page Application using modern frameworks.
I chose HTML, JavaScript, and Tailwind CSS.

## Why not a SPA

I have experience with React and single page applications, but chose simpler technologies here
on purpose. A landing page has a simple structure that doesn't need a SPA's architecture, and
adding one would have increased complexity for no return.

More importantly, a SPA is a poor fit for a landing page's actual goal. Search engines struggle
to index dynamically rendered content, while a static page ranks better and stays more visible.
The trade-off was deliberate, not a shortcut.

## Design

The brief allowed changes to the original design, which was an opportunity to show the design
experience I'd mentioned in my application.

The goal was a page reflecting Einstein's visual identity and values while speaking directly to
its three audiences: students, volunteers, and supporters. To stay true to the brand, I
researched it thoroughly, including material from their Instagram beyond what the brief
provided. I kept the brand's blue in different shades and added an orange as a complementary
color, aiming for a tone that reads as trustworthy and young. The testimonials kept the essence
of the original proposal, adapted to the page's new tone of voice, and the footer from
Einstein's official site was integrated.

[View the design on Figma](https://www.figma.com/design/L3ISLtPkKDpaLrXmr5CkAm/Einstein-Case-LP?node-id=0-1)

## Gitflow

The workflow uses two main branches:

- **main** — production code. Stable, release-ready versions are merged here.
- **dev** — development code, holding the latest work in progress. All new work branches from here.

Branches follow a naming convention:

| Prefix | Purpose | Example |
|---|---|---|
| `feat/` | New features | `feat/landingpage` |
| `fix/` | Bug fixes | `fix/header-bug` |
| `chore/` | Minor tasks and adjustments | `chore/update-dependencies` |

Feature branches are merged back into `dev` through a pull request, so the code is reviewed and
tested. Once everything planned is finished and stable, `dev` is merged into `main` for a new
production release.

## Project structure

```
src/
├── components/     # Components
├── pages/          # Page scripts
├── img/            # Images
├── styles/         # Tailwind configuration
└── config/         # Utility objects (links, etc.)
```

## Running locally

```bash
git clone https://github.com/micapareddes/case-einstein.git
cd case-einstein
npm i
npm run start
```

Then open <http://localhost:8080>.

## Technologies

JavaScript · Tailwind CSS · HTML
