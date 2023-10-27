---
title: Jeff Wayne's Musical version of The War of the Worlds
taster: 'The site quickly became the hub that connected everything together, serving both longtime fans and inspiring a new generation.'
excerpt: 'A hub that connected everything together, serving both longtime fans and inspiring a new generation'
description: 'Discover how I contributed to the creation of this online hub that linked everything together, serving both longtime fans and inspiring a new generation.'
keywords: 'Arena tours, Tour dates, discography, connecting with fans, forum, fanbase, user engagement, central hub'
opengraph:
    image: 'img/work/twotw/og__image.jpg'
date: 2022-09-01
lastmod: 2023-07-01
tags: ['posts', 'Entertainment']
readtime: 2-3
brand:
    bg: 'bg-[#38422a]'
    color: 'text-[#38422a]'
img:
    credit: 'Ollie Record Productions'
    listing: '/work/twotw/listing.jpg'
skillset:
    bg: 'bg-[#38422a]'
    text: 'text-white'
    icon: ''
    heading: 'permalink:text-white permalink:before:text-[#00a3e2]'
    shadow: ''
    areas:
        - title: 'Apps'
          skills:
              - 'Adobe Photoshop'
              - 'Adobe Dreamweaver'
        - title: 'Development'
          skills:
              - 'HTML Templates'
              - 'HTML Email templates'
              - 'Content population'
              - 'Wireframes'
              - 'Asset preparation'
              - 'UX/UI'
eleventyNavigation:
    key: twotw
    parent: Work
    title: 'TWOTW'
    order: 3
---

{% extends "layouts/work.njk" %}
{% block content %}
{% image { src: "/work/twotw/tablet.jpg", alt: "iPad image showing twotw website", credit:"ORP", widths: [720, 1920, '2880'], sizes: '(max-width: 64em) 1920px, 2880px', ratio: "pb-super16 md:pb-block", breakout: true } %}
{{macro.toc()}}

## Overview

Originally created to promote the discography of **Jeff Wayne's Musical Version of The War of the Worlds**, the site quickly evolved to become the primary resource for explaining the story, connecting with fans, and introducing new listeners to the TWOTW experience. A tour section was subsequently included to promote the hugely successful live musical version - _Jeff Wayne's Musical Version of The War of The Worlds - Alive on Stage!_ - as it toured the UK and Europe, Australia, and New Zealand.

User engagement was critical to the site's success because the album had a large and devoted fan base. The forum grew to a community of over **20k users** with **19 message boards** and over **3.2K topics**. The brand had numerous social and merchandising channels so the website needed to be the central hub that connected everything.

The site promoted and then documented **8 Arena tours**, culminating in the _40<sup>th</sup> Anniversary UK tour_ in 2018.

{% blocktype { overflow: true, breakout: true, wrapper: 'bg-neutral-100 outline-none', legibility: 'text-gray-700'  } -%}

<img src="/img/details/contour__16--cr.svg"
       class="absolute inset-0 object-cover w-full h-full"
       width="1920"
       height="1080"
       alt="countour lines">

<div class="relative grid grid-cols-1 md:grid-cols-3 py-16 md:py-32 xl:py-48 content-center max-w-container mx-auto">
 <p class="text-center leading-snug">
  <span class="block text-6xl lg:text-8xl text-amber-500 font-black mt-4">20K</span>
  <span class="text-slate-600">Users</span>
</p>
<p class="text-center leading-snug">
  <span class="block text-6xl lg:text-8xl text-amber-500 font-black mt-4">19</span>
  <span class="text-slate-600">Message boards</span>
</p>
<p class="text-center leading-snug">
  <span class="block text-6xl lg:text-8xl text-amber-500 font-black mt-4">3.2K</span>
  <span class="text-slate-600">Topics</span>
</p>
</div>
{% endblocktype %}

## My responsibilities

-   The designs and static templates were hosted in a secure listing to keep stakeholders informed throughout the development process. <span class="label label--info !m-0">Project management</span>
-   I designed the visual layouts in Photoshop and oversaw all revisions to ensure the client was satisfied with the proposed solution.
-   I created all of the Front-End HTML templates. These were then handed over to a team of back-end developers, complete with detailed annotations, listing indexes, and support documentation.
-   I assisted in configuring the content management system (Custom) and oversaw the testing of the transferred site content throughout the development process. <span class="label label--info !m-0">collaboration</span>
-   The client could write newsletters and some news items, but I was in charge of populating the majority of the content. Each tour or album release was usually preceded by a minor site rebranding.
    {.list .list--bullet .not-prose}

{% set gallery = { data: gOld, id: 'gOld', title: 'Previous site'} %}
{% include "partials/lightbox.njk" %}

{% set gallery = { data: gScreens, id: 'gScreens', title: 'Reworked visuals', context:'The images below were created for a site refresh in preparation for an Arena tour in the United Kingdom and Europe.'} %}
{% include "partials/lightbox.njk" %}

{% endblock content -%}
