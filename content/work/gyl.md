---
title: GamesYouLoved
taster: 'A fun website lovingly curated by gaming enthusiasts that quickly became a huge retro hit. Every genre of game was meticulously documented to help fans relive those sweet nostalgic childhood memories.'
excerpt: 'A fun website lovingly curated by gaming enthusiasts that quickly became a huge retro hit.'
description: 'Discover how I helped launch an immensely fun website lovingly curated by gaming enthusiasts - and see how it quickly became a huge retro hit. Learn how each genre was meticulously documented in order to help fans relive those sweet nostalgic childhood memories.'
keywords: 'Retro gaming design, nostalgic childhood memories, crowdsourcing content, sense of ownership, CMS, multiple social channels'
opengraph:
    image: 'img/work/gyl/og__image.jpg'
date: 2022-09-01
lastmod: 2023-07-01
tags: ['posts', 'Entertainment']
readtime: 2-3
brand:
    bg: 'bg-[#24a7be]'
    color: 'text-[#24a7be]'
img:
    credit: 'GamesYouLoved'
    listing: '/work/gyl/listing.jpg'
skillset:
    bg: 'bg-[#24a7be]'
    text: 'text-white'
    icon: ''
    heading: 'permalink:text-white permalink:before:text-[#00a3e2]'
    shadow: ''
    areas:
        - title: 'Apps'
          skills:
              - 'Adobe Photoshop'
              - 'Adobe Dreamweaver'
        - title: 'Frameworks'
          skills:
              - 'Skeleton (Responsive CSS)'
              - 'jQuery and vanilla js'
        - title: 'Development'
          skills:
              - 'HTML Templates'
              - 'HTML Email templates'
              - 'Content population'
              - 'Asset preparation'
              - 'UX/UI'
eleventyNavigation:
    key: gyl
    parent: Work
    title: 'GamesYouLoved'
    order: 3
---

{% extends "layouts/work.njk" %}
{% block content %}
{% image { src: "/work/gyl/laptop_iphone_front.jpg", alt: "Laptop and iPhone image showing GamesYouLoved website", credit:"GamesYouLoved", widths: [720, 1920, '2880'], sizes: '(max-width: 64em) 1920px, 2880px', ratio: "pb-super16 md:pb-block", breakout: true } %}
{{macro.toc()}}

## Overview

Gamesyouloved.com began as a fun website lovingly curated by gaming enthusiasts and quickly became a huge retro hit. Every genre of game was meticulously documented to help fans relive those sweet nostalgic childhood memories.

The site encouraged the community to submit their own game reviews, effectively crowdsourcing content and giving the fanbase a genuine sense of ownership. An article submission form kept editorial content consistent and streamlined the publishing/moderation process. This was the impetus behind the site's rapid expansion, which until recently, included twelve game genres and several hundred entries.

GYL has a substantial social media presence across multiple platforms and the site served as a central hub for these platforms, allowing for deeper engagement through rich editorial content.

{% blocktype { overflow: true, breakout: true, wrapper: 'bg-neutral-100 outline-none', legibility: 'text-gray-700'  } -%}

<img src="/img/details/contour__16--cr.svg"
       class="absolute inset-0 object-cover w-full h-full"
       width="1920"
       height="1080"
       alt="countour lines">

<div class="relative grid grid-cols-2 md:grid-cols-4 py-16 md:py-32 xl:py-48 gap-8 content-center max-w-container mx-auto">
<p class="text-center leading-snug">
  <span class="block text-4xl md:text-7xl text-[#24a7be] font-black">6.44K</span> Youtube subscribers
</p>
<p class="text-center leading-snug">
  <span class="block text-4xl md:text-7xl text-[#24a7be] font-black">61.3K</span> Instagram followers
</p>
<p class="text-center leading-snug">
  <span class="block text-4xl md:text-7xl text-[#24a7be] font-black">99.7K</span> X Followers
</p>
<p class="text-center leading-snug">
  <span class="block text-4xl md:text-7xl text-[#24a7be] font-black">52K</span> Facebook Followers
</p>
</div>
{% endblocktype %}

## My responsibilities

<!-- list -->
<ul class="list list--bullet not-prose">
<li>My first task was to design the brand logo. An analogue TV brandmark was then introduced to connect with the retro audience and provide a consistent identity across all social channels. This provided a clear visual framework from which to design the site.
{% image { src: "/work/gyl/gyl_logo_tv.png",  widths: [320, 720], sizes: '(max-width: 48em) 320, 720px', credit: 'GamesYouLoved', alt: "Games You Loved logo", classlist: 'w-full h-auto max-w-lg mx-auto'} %}</li>

<li>The designs and static templates were hosted in a secure listing to keep stakeholders informed throughout the development process. <span class="label label--info !m-0">Project management</span></li>
<li>  Working closely with the client's direction, I created a few key screens for visual approval. The website needed to strike a balance between being distinctively recognisable and also evoking vintage styling from the past.</li>
<li>  I created all of the Front-End HTML templates – working to a mobile-first mindset. These were then handed over to a team of back-end developers, complete with detailed annotations, listing indexes, and support documentation.</li>
<li>  I collaborated closely with the developers to ensure that the site stayed true to the visuals approved by the client.</li>
<li>I assisted in configuring the content management system (Umbraco) and took responsibility for the initial population of all launch content. <span class="label label--info !m-0">collaboration</span></li>
<li>At handover, I provided documentation to help the client understand the different template types as well as instructions on how to populate the content. <span class="label label--info !m-0">Documentation</span></li>
</ul>

> ...They evolved a simple idea of our love for everything retrogaming into an exciting and fun digital experience.
> GamesYouLoved.com

{% set gallery = { data: gScreens, id: 'gScreens', title: 'Site visuals'} %}
{% include "partials/lightbox.njk" %}

{% image { src: "/work/gyl/block__sw_40.jpg", credit: 'GamesYouLoved', alt: "Close up of K Ring and cyclist", classlist: 'm-0', ratio: "pb-super16 md:pb-block", breakout: true} %}

## Final comments

These images have been captured from static templates, but they accurately represent the site that was launched. Fifth dimension (the agency) reformed as K Wearables, a start-up focused on launching the world’s first contactless payment ring, [K Ring](/work/mykring), and this site has since been retired.

Client quotes originally published at fifthdimension.com{ .note .text-base }

{% endblock content -%}
