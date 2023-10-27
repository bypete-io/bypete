---
title: AF&V Privilege MasterCard
taster: 'Armed Forces & Veterans is a veterans-led organisation that assists serving and retired members of the British Armed Forces with financial and housing needs. See how they launched their branded prepaid MasterCard'
description: 'Read on to learn about my role in the launch of the Armed Forces & Veterans prepaid MasterCard, an exclusive cashback programme available to serving and retired members of the British Armed Forces and their immediate families.'
keywords: 'How to launch a Prepaid Mastercard, British Armed Forces benefits, Prepaid Mastercard, exclusive cashback, Front-End templates'
opengraph:
    image: 'img/work/afv/og__image.jpg'
date: 2022-09-01
lastmod: 2023-07-01
tags: ['posts', 'fintech']
readtime: 2-3
brand:
    bg: 'bg-[#384c55]'
    color: 'text-[#384c55]'
img:
    credit: 'AFV Estates Limited'
    listing: '/work/afv/listing.jpg'
skillset:
    bg: 'bg-[#384c55]'
    text: 'text-white'
    icon: ''
    heading: 'permalink:text-white permalink:before:text-[#00a3e2]'
    shadow: ''
    areas:
        - title: 'Apps'
          skills:
              - 'Atom'
              - 'Adobe Photoshop'
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
    key: afv
    parent: Work
    title: 'AF&V Privilege MasterCard'
    order: 3
---

{% extends "layouts/work.njk" %}
{% block content %}

{% image { src: "/work/afv/laptop_iphone_front.jpg", alt: "Laptop and iPhone image showing AF&amp;V website", credit:"AF&amp;V Privilege MasterCard", widths: [720, 1920, '2880'], sizes: '(max-width: 64em) 1920px, 2880px', ratio: "pb-super16 md:pb-block", breakout: true } %}

{{macro.toc()}}

## Overview

Armed Forces & Veterans is a veterans-led organisation that provides financial and housing assistance to serving and retired members of the British Armed Forces.

Fifth Dimension was tasked with launching their branded prepaid MasterCard as well as ensuring the success of the AF&V Privilege Card, which was critical given that the program's proceeds go towards other initiatives such as the Homes for Heroes programme.

The website needed to emphasise the benefits of their prepaid AF&V Privilege Card while also promoting the exclusive cashback available at leading retailers.

## My responsibilities

-   The designs and static templates were hosted in a secure listing to keep stakeholders informed throughout the development process. <span class="label label--info !m-0">Project management</span>
-   I took the lead on the website's visual layouts, collaborating closely with in-house designers who were primarily preparing print work assets. To maintain message consistency, assets were shared across digital and print media. The website needed to be instantly recognisable; many users would learn about the programme for the first time at events or through printed materials.
-   I created all of the Front-End HTML templates – working to a mobile-first mindset. These were then handed over to a team of back-end developers, complete with detailed annotations, listing indexes, and support documentation.
-   I collaborated closely with the developers to ensure that the site stayed true to the visuals approved by the client.
-   I assisted in configuring the content management system (Umbraco) and took responsibility for the initial population of all launch content. <span class="label label--info !m-0">collaboration</span>
    {.list .list--bullet .not-prose}

{% set gallery = { data: gScreens, id: 'gScreens', title: 'Images'} %}
{% include "partials/lightbox.njk" %}

{% endblock content -%}
