---
title: 'Hello!'
taster: 'I’m a Surrey based Front-End developer with over two decades of experience in digital.'
excerpt: 'I’m a Surrey based Front-End developer with over two decades of experience in digital.'
description: 'Get to know more about my experience in the digital landscape, how I keep my skills sharp, and the methods I prefer to use to produce my best work.'
keywords: 'Surrey based Front-End developer, Bespoke website development, HTML, CSS, Creative development, The Great Outdoors, Balance and wellbeing'
opengraph:
    image: 'img/social/og__about.jpg'
hero:
    dark: true
    bg: 'bg-brand md:bg-teal-400'
date: Last Modified
brand:
    bg: 'bg-gradient-to-b from-putty to-putty-dark'
    color: 'text-[#00a3e2]'
skillset:
    bg: 'bg-gradient-to-b from-white to-putty-dark'
    text: 'text-gray-700'
    icon: '[&>li]:before:!text-accent'
    heading: 'permalink:text-gray-700 permalink:before:text-[#00a3e2]'
    shadow: 'text-shadow-emboss shadow-white/20'
    areas:
        - title: 'Apps'
          skills:
              - 'Adobe Photoshop'
              - 'Adobe Illustrator'
              - 'Adobe Creative Cloud...'
        - title: 'Development'
          skills:
              - 'Visual Studio Code'
              - 'Visual Studio'
        - title: 'CSS'
          skills:
              - 'Foundation for sites, via CLI'
              - 'Foundation for emails, via CLI'
              - 'Tailwind CSS'
              - 'Maizzle (Tailwind for email)'
              - 'SCSS'
              - 'Vanilla CSS'
        - title: 'Javascript'
          skills:
              - 'jQuery'
              - 'Alpine.js'
              - 'Vanilla js'
        - title: 'Compilers and bundlers'
          skills:
              - 'Gulp'
              - 'npm'
              - 'Webpack'
        - title: 'SaaS / PaaS'
          skills:
              - 'Mailchimp'
              - 'Zoho CRM'
              - 'Slack'
              - 'Azure Dev Ops'
        - title: 'Responsibilities'
          class: 'col-span-full'
          skills:
              - 'HTML Templates'
              - 'HTML Email templates'
              - 'Content management'
              - 'Wireframes'
              - 'Asset generation'
              - 'UX/UI'
eleventyNavigation:
    key: About
    order: 3
---

{% extends "layouts/page.njk" %}
{% block hero %}

{% hero { data: hero, overflow: true, wrapper: 'outline-none'  } -%}

<!-- grid content -->
<div class="absolute inset-0 h-full w-full">
{% imageArtDirection { src: './concrete--teal.webp', detailSrc: './concrete--teal@sm.webp', alt: 'Rustic Teal background', widths: [720, 1280, 'auto'], sizes: '100vw', detailMedia: '(max-width: 767px)', classlist: 'object-cover object-bottom md:object-center w-full h-full', loading: 'eager' } %}
</div>
<div class="relative grid grid-rows-1 grid-cols-1 md:grid-cols-block50 2xl:grid-cols-block33 md:min-h-widescreen lg:min-h-block lg:h-block gap-4 md:gap-8 pt-[var(--smheaderheight)] md:pt-[var(--headerheight)] max-w-container mx-auto">
  <div class="self-center w-full"
            x-cloak
            :class="shown ? 'animate-fade-in-down' : 'invisible'">
    <h1 id="headline" class="text-4xl/normal lg:text-7xl/none relative text-shadow-headline">{{ title }}</h1>
    <div class="max-w-prose mt-4 md:mt-6 rte-content">
    <p class="text-xl lg:text-2xl xl:text-3xl font-medium">
      I’m a Surrey based Front-End developer with over two decades of experience in digital.
    </p>
    <p class="flex flex-row gap-2">
    <a href="#main-content"
        class="btn btn--secondary btn--icon inline-flex transform duration-300">Read my bio
      <i class="fa-regular fa-circle-down animate-nudge-down"></i>
    </a>
    <a href="/connect" class="btn btn--outline transform duration-300">Connect</a>
    </p>
    </div>
  </div>
  <!-- image options [default]: [items-center] items-start items-end items-stretch -->
  <div class="flex justify-center relative">
    <div class="bg-white absolute w-auto h-full aspect-1 rounded-egg"></div>
    <div class="absolute border border-white/30 w-auto h-full aspect-1 animate-morph-delay"></div>
    <div class="absolute border border-white/95 w-auto h-full aspect-1 animate-morph "></div>
    <div class="w-full h-full" :class="shown ? 'animate-stretch' : 'invisible'">
    {%- image { src: "/profile__hd.png", alt: "Profile headshot", widths: [640, 800], sizes:'(max-width: 48em) calc(100vw - 2rem), 50vw', classlist: 'relative w-full h-full object-contain object-bottom' } %}</div>
  </div>
</div>
  <div class="absolute pointer-events-none bottom-0  z-shortcuts -translate-x-1/2 pb-4 md:pb-8 left-1/2">
    {% include "partials/scrollprompt.njk" %}
  </div>
{%- endhero -%}
{% if not hero.hidebreadcrumb -%}
  <div class="max-w-container mx-auto relative">{% include "partials/breadcrumb.njk" %}</div>
{%- endif %}
{% endblock hero -%}
{% block content %}
{{macro.toc()}}

## The backstory

I cut my teeth in multimedia, primarily working on e-learning, training, and press pack applications for prominent publishers such as **BBC Worldwide**, **BBC Active**, **University of Cambridge**, **Oxford University Press**, **UKTV**, and **Kellogg's** with the award winning agency - Fifth Dimension Productions.{ .lead }

As distribution shifted from physical (PC/Mac CD-ROMs) to online, I transferred my skills to Front-End development, initially creating support sites for physical products like [BBC Active's Get Into French - IVCA Gold award winner](https://www.cam.ac.uk/news/get-into-french-wins-gold-award) and then progressing to full online-only solutions.

In 2009, the agency refocused its efforts and established itself as **the** marketing agency for Europe's emerging payments sector. Since then, I've concentrated solely on Front-End development, mostly within the fintech landscape.

{%- set roles = {"breakout": "true"} -%}
{%- include "partials/skills.njk" %}{# djlint:off #}

## Workflow {# djlint:on #}

All of my prototypes are built with static site generators, previously [Panini](https://get.foundation/sites/docs/panini.html) within the Foundation framework, and more recently [nunjucks](https://mozilla.github.io/nunjucks/) within [11ty](https://www.11ty.dev/). This component-based approach ensures that the presentation is consistent and that each template is up to date with the most recent changes. Headers and footers, for example, can be changed and instantly applied across all templates.

Using a <abbr title="Static Site Generator">SSG</abbr> to prototype allows me to respond to clients quickly while also reassuring the development team about any potentially breaking changes.

A set of static templates that is well-maintained will bridge the client-development gap, keeping both parties informed. This reduces the likelihood of project creep due to assumptions or misunderstandings.

Context is essential for a concise translation on multilingual websites. Third-party translators can use a static template listing to follow the user path or view the entire page context without the need for test accounts or sandbox transactions.

{% image { src: "./listing-index.jpg", alt: "Screen grab of a listing page index", classlist: "w-full", wrapper:'my-4 md:my-8', caption:'Snapshot of a typical listing index. Clients, developers, and third-party agencies have access to the most recent version of any page.' } %}

## What comes next? { #what-comes-next%3F }

This static site was built with [11ty](https://www.11ty.dev/), [Tailwind CSS](https://tailwindcss.com/), [Alpine.js](https://alpinejs.dev/), and [Webpack](https://webpack.js.org/). Having no prior experience with any, it was a real labour of love, but I learned a great deal in the process.

Moving forward, I would be keen to build on my recent experiences and explore a React based framework – probably Next.js or Gatsby.

{% image { src: "./woodland.webp", alt: "Woodland scene", credit:"Adobe Photoshop (beta) - Generative fill", wrapper:'my-4 md:my-8', ratio: "pb-photo md:pb-widescreen xl:pb-block", breakout: true   } %}

## Balance and wellbeing

I love spending time exploring the great outdoors with my family; we have two adventurous young boys, and it gives me great joy to see them thrive in nature. I find that getting away from the interruptions and rhythms of daily life helps me regain a sense of balance and wellbeing.

The boys are at a naturally inquisitive age and whilst I do my best to tackle their questions... we often have to resort to [Google Lens](https://lens.google/intl/en-GB/#cta-section) for the answers!

{% image { src: "./google-lens.jpg", alt: "Beach scene with close up of jellyfish. Detail shows iPhone with google lens app", credit:"Google Lens (App visuals)", classlist: "w-full", wrapper:'my-4 md:my-8 -mx-4 md:mx-0' } %}

{% endblock content -%}
