---
title: 'K&nbsp;Ring'
excerpt: 'Learn how myKRing.com evolved into a multilanguage hub for the K Ring product'
taster: 'First launched as a crowdfunding support site, myKRing.com has evolved to a multilanguage hub for the K Ring product'
description: 'Learn about my involvement in the launch of a crowdfunding support site and how I continued to contribute as it evolved into a multilingual hub for the K Ring product.'
keywords: 'Kickstarter crowdfunding campaign, support site, foundation CSS, site optimisation, design refresh, static site generator, Eleventy, content for translators, contactless prepaid ring, wearables'
opengraph:
    image: 'img/work/mykring/og__image.jpg'
date: 2022-10-01
lastmod: 2023-10-01
tags: ['posts', 'responsive', 'fintech', 'email']
readtime: '6-8'
brand:
    bg: 'bg-[#FF0069]'
    color: 'text-[#FF0069]'
img:
    credit: 'K Wearables'
    listing: '/work/mykring/listing.jpg'
skillset:
    bg: 'bg-[#FF0069]'
    text: 'text-white'
    icon: ''
    heading: 'permalink:text-white permalink:before:text-[#00a3e2]'
    shadow: ''
    areas:
        - title: 'Apps (Initial build)'
          skills:
              - 'Atom text editor'
              - 'Adobe Photoshop'
              - 'Adobe Illustrator'
        - title: 'Apps (Site rebuild)'
          skills:
              - 'Visual Studio Code'
              - 'Adobe Photoshop'
              - 'Adobe Illustrator'
        - title: 'Frameworks (Initial build)'
          skills:
              - 'Foundation for sites, via CLI'
              - 'Foundation for emails, via CLI'
              - 'jQuery and vanilla js'
              - 'Gulp'
        - title: 'Frameworks (Site rebuild)'
          skills:
              - 'Tailwind CSS'
              - 'Maizzle (Tailwind for email)'
              - 'Alpine.js and vanilla js'
              - 'npm'
              - 'Webpack'
        - title: 'Responsibilities'
          class: 'col-span-full'
          skills:
              - 'HTML Templates'
              - 'HTML Email templates'
              - 'Content population'
              - 'Wireframes'
              - 'Asset preparation'
              - 'UX/UI'
eleventyNavigation:
    key: mykring
    parent: Work
    title: 'K Ring'
    order: 2
---

{% extends "layouts/work.njk" %}
{% block content %}
{% image { src: "/work/mykring/laptop_iphone_front.jpg", alt: "Laptop and iPhone image showing K Ring website", credit:"K Wearables", widths: [720, 1920, '2880'], sizes: '(max-width: 64em) 1920px, 2880px', ratio: "pb-super16 md:pb-block", breakout: true } %}
{{macro.toc()}}

The live site is currently unavailable but a detailed record of the templates and design process can be viewed below. The site was reimagined in 2022/3 to complement the app, but unfortunately the designs were frozen in the development phase due to funding issues.{ .note .text-base }

## A brief history

In Autumn 2015, the site, formerly known as kerv.com, debuted as a simple static support site for the Kickstarter crowdfunding campaign. I created the static templates using the Foundation v5 framework, which claimed to be at the cutting edge of responsive development at the time.

> Foundation is the most advanced, responsive front-end framework in the world. The framework is mobile friendly and ready for you to customize it any way you want to use it.

Foundation was kept as the project's framework until v6.3.3, when it was determined that our extensive modifications had significantly bloated the source html templates. Overwriting default foundation behaviour took up an increasing portion of the production CSS.

The redesigned site would need to provide significant optimisation gains while also incorporating any recent improvements that had been applied to the official MyKRing app. As the site became more complex, it would also need to address the increasing specificity of CSS declarations. Despite the fact that [BEM](https://getbem.com/introduction/) naming conventions were used throughout the templates; some features had become overly complex.

## Spring refresh

[Tailwind CSS](https://tailwindcss.com/) and [Alpine.js](https://alpinejs.dev/) were chosen for their utility-first and minimal approaches, respectively. Both frameworks rely on inline markup, which can result in a cluttered source view, but the advantages are direct control and significantly reduced asset load.
Tailwind dramatically reduces CSS bloat when building for production by scanning the markup and removing unused CSS. The minified CSS bundle has been reduced from **624kb** (multiple files) to **168KB**. Alpine uses directives within the markup to define HTML chunks as components, eliminating the need for referencing.

Example markup:

```html
<div
    class="credit  opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    x-data="credit"
>
    <button
        class="credit__icon "
        @click="toggle"
        :aria-expanded="open ? 'true' : 'false'"
        aria-expanded="false"
    >
        <i class="fa-regular fa-image" aria-hidden="true"></i>
        <span class="sr-only">Show image credit</span>
    </button>
    <div class="credit__text" x-show="open">Credit: K Wearables</div>
</div>
```

I saw this project as an opportunity to use the static site generator [Eleventy](https://www.11ty.dev/) to manage the generation of the Front-End templates. The initial setup time is obviously longer when layouts, partials, and components are used, but for a complicated site like this, it makes any future features simple to apply and preview. Before any development is scheduled, new features can quickly be reviewed in a static site preview.

{% image { src: "/work/mykring/listing-index.jpg", caption: 'An index is used to manage all static template development.', classlist:'w-full', alt: "Screengrab of a listing index", wrapper:'my-4 md:my-8'} %}

Any screen can be directly accessed by developers, partner clients, and stakeholders. This was especially useful for translators, who often need more context to create concise translations. Some screens can only be accessed under certain conditions, which can be difficult and sometimes impossible for third parties to recreate.

<figure class="not-prose {{ utilities.breakout }}">
<div class="flex flex-col md:flex-row items-center bg-gray-50 gap-8 {{utilities.tramline.all}} " x-data="{compare: true}">
    <div class="transition-all duration-300" :class="compare ? 'w-1/3' : 'w-full md:w-2/3'" x-on:click="compare = ! compare">
    {% image { src: "/work/mykring/devices.png", widths:[1440], classlist:'w-full h-auto shadow-md border border-gray-200 hover:cursor-pointer', alt: "Devices view"} %}
    </div>
    <div class="transition-all duration-300" :class="compare ? 'w-full md:w-2/3' : 'w-1/3'" x-on:click="compare = ! compare">
    {% image { src: "/work/mykring/devices_reworked.jpg", widths:[1440], classlist:'w-full h-auto shadow-md border border-gray-200 hover:cursor-pointer', alt: "Devices view"} %}
    </div>
  </div>
  <figcaption class="border-b border-gray-200 pb-4 mt-4 text-sm flex justify-between {{utilities.tramline.x}}">
    Unnecessary elements from the online responsive version (left) were stripped out to streamline the app layout (middle and right) <span class="text-xs">K Wearables Ltd.</span>
  </figcaption>
</figure>

{# djlint:off #}

## My responsibilities{# djlint:on #}

-   The designs and static templates were hosted in a secure listing to keep stakeholders informed throughout the development process. <span class="label label--info !m-0">Project management</span>
-   I built all of the Front-End HTML templates from scratch using an internal wireframe ppt document. These were then given to a team of back-end developers, along with detailed annotations, listing indexes, and support documentation.
-   I created a complete set of email HTML templates that would work with Umbraco's dictionary to handle the multilanguage requirements.
-   I assisted in the configuration of the content management system (Umbraco) and was in charge of the initial populating of all launch content. <span class="label label--info !m-0">collaboration</span>
    {.list .list--bullet .not-prose}

{% set gallery = { data: gPublic, id: 'gPublic', title: 'Public access'} %}
{% include "partials/lightbox.njk" %}

{% set gallery = { data: gAccount, id: 'gPublic', title: 'Account access'} %}
{% include "partials/lightbox.njk" %}

{% set gallery = { data: gEmail, id: 'gEmail', title: 'Email templates', context: 'Each template has multilingual content. Repeated items are stored as dictionary terms in the CMS and referenced using **[#Email.Content...#]**. System data is referenced using **[[Firstname]]**'} %}
{% include "partials/lightbox.njk" %}

{% set gallery = { data: gUx, id: 'gUx', title: 'UX'} %}
{% include "partials/lightbox.njk" %}

{% set gallery = { data: gCs, id: 'gCs', title: 'Customer services'} %}
{% include "partials/lightbox.njk" %}

## Learning points

The redesign process provided an excellent opportunity for me to become acquainted with some new frameworks. During this period of intense self-development, I gained experience with **Tailwind CSS**, **Alpine JS**, **Webpack**, and **Eleventy**. Despite the steep (and at times daunting!) learning curve, I'm now ready to tackle the next project with confidence.

## Scope for improvement

The myKRing app accomodates "dark mode" functionality and it would be nice to offer that functionality on the website. Tailwind CSS includes a `dark:` variant that can be switched manually via javascript and `localstorage` or using the system preferences.

{% image { src: "/work/MyKRing/block__cyclist_40.jpg", credit: 'K Wearables Ltd.', alt: "Close up of K Ring and cyclist", classlist: 'm-0', ratio: "pb-super16 md:pb-block", breakout: true} %}

## Final thoughts

The redesign has improved the relationship between the app and the website. The design revisions should provide a more consistent user experience across all access points. The [Devices](#account-access) and [Load](#ux) sections received the most attention during app development, so it was critical to incorporate those changes back into the site.

_Unfortunately, the reworked templates remain on hold at the time of writing, and have not been scheduled for development._

{% endblock content -%}
