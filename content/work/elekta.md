---
title: Elekta
taster: 'The company intranet required a significant upgrade to improve the user experience of over 3,000 employees. The brief specified that the site be adaptable, have low operational costs, be quick to publish, and provide quick search results.'
excerpt: 'See how this enterprise intranet was upgraded to improve the user experience of 3,000+ employees.'
description: 'How did I help to turn a slow intranet into a quick and flexible resource for over 3,000 employees? See the visuals I created, as well as the Front-End templates I developed to optimise the site.'
keywords: 'Enterprise intranet, healthcare company, improve the user experience, flexible solution, site optimisation, improved performance, aesthetics, user experience, upgrade'
opengraph:
    image: 'img/work/elekta/og__image.jpg'
date: 2022-09-01
lastmod: 2023-07-01
tags: ['posts', 'Intranet']
readtime: 2-3
brand:
    bg: 'bg-[#747474]'
    color: 'text-[#747474]'
img:
    credit: 'Elekta'
    listing: '/work/elekta/listing.jpg'
skillset:
    bg: 'bg-[#747474]'
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
              - 'Asset preparation'
              - 'UX/UI'
eleventyNavigation:
    key: elekta
    parent: Work
    title: 'Elekta'
    order: 3
---

{% extends "layouts/work.njk" %}
{% block content %}
{% image { src: "/work/elekta/tablet.jpg", alt: "iPad image showing Elekta website", credit:"Elekta", widths: [720, 1920, '2880'], sizes: '(max-width: 64em) 1920px, 2880px', ratio: "pb-super16 md:pb-block", breakout: true } %}
{{macro.toc()}}

## Overview

Elekta is a forward-thinking Swedish healthcare company that provides precision radiation therapy solutions. They asked Fifth Dimension to improve their current intranet solution, Elekta.biz. The previous solution relied on obsolete technology, which hampered editorial efficiency. The upgrade would need to significantly improve the user experience and site speeds for over 3,000 employees.
Our solution needed to be more flexible, reduce operational costs, reduce publishing delays, and provide faster search results.

## My responsibilities

-   The designs and static templates were hosted in a secure listing to keep stakeholders informed throughout the development process. <span class="label label--info !m-0">Project management</span>
-   I designed the visual layouts in Photoshop and oversaw any revisions to ensure the client was satisfied with the proposed solution.
-   I created all of the Front-End HTML templates. These were then handed over to a team of back-end developers, complete with detailed annotations, listing indexes, and support documentation.
-   I assisted in configuring the content management system (EPiServer) and oversaw the testing of the transferred site content throughout the development process. <span class="label label--info !m-0">collaboration</span>
    {.list .list--bullet .not-prose}

{% set gallery = { data: gSales, id: 'gSales', title: 'Site visuals (Sales)'} %}
{% include "partials/lightbox.njk" %}

{% set gallery = { data: gService, id: 'gService', title: 'Site visuals (Service)'} %}
{% include "partials/lightbox.njk" %}

## Final comments

Fifth Dimension's upgrade resulted in a **67% increase** in site usage, a **90% decrease** in pages viewed during a search, and a **51% reduction** in the time it takes users to find target documents.

The client was very pleased with the improved performance, aesthetics, and user experience that we achieved with the upgrade.

> Just wanted to drop you a line to say how amazing the new portal looks and acts. So many over here are more than impressed with the design, the ease of use and how much different their experience is with this, than with the previous site. So congratulations on all the hard work you put in to making this site a roaring success.
> **Andrew Rodgers, Global Web & Multimedia Manager**

These images have been captured from static templates, but they accurately represent the site that was launched. Fifth dimension (the agency) reformed as K Wearables, a start-up focused on launching the world’s first contactless payment ring, [K Ring](/work/mykring), and this site has since been relinquished.

Client quotes and performance metrics originally published at fifthdimension.com{ .note .text-base }

{% endblock content -%}
