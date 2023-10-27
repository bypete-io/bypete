---
title: Kalixa
taster: 'See how the award winning Kalixa Pay used highly targeted landing pages to convert prospects into cardholders. The site had to accommodate over 150,000 card holders and a global affiliate network that was driving traffic towards it from the UK, Austria, Germany and Italy.'
excerpt: 'Highly targeted, affiliate focused landing pages to convert prospects into cardholders'
description: 'Discover how I helped to create highly targeted landing pages that converted prospects into Kalixa Pay cardholders. The site had to accommodate over 150,000 card holders as well as a global affiliate network.'
keywords: 'Award winning product, contactless prepaid Mastercard, exclusive travel benefits, secure PCI environment, highly targeted landing pages, global affiliate network, multilingual site. '
opengraph:
    image: 'img/work/kalixa/og__image.jpg'
date: 2022-09-01
lastmod: 2023-07-01
tags: ['posts', 'fintech']
readtime: 2-3
brand:
    bg: 'bg-[#ee8822]'
    color: 'text-[#ee8822]'
img:
    credit: 'Kalixa Pay Ltd.'
    listing: '/work/kalixa/listing.jpg'
overview:
    title: 'Summary'
    circa: '2015'
    summary: 'About the project'
skillset:
    bg: 'bg-[#ee8822]'
    text: 'text-white'
    icon: ''
    heading: 'permalink:text-white permalink:before:text-[#00a3e2]'
    shadow: ''
    areas:
        - title: 'Apps'
          skills:
              - 'Atom text editor'
              - 'Adobe Photoshop'
              - 'Adobe Illustrator'
        - title: 'Frameworks'
          skills:
              - 'Skeleton (Responsive CSS)'
              - 'jQuery and vanilla js'
        - title: 'My responsibilities'
          class: 'col-span-full'
          skills:
              - 'HTML Templates'
              - 'HTML Email templates'
              - 'Content population'
              - 'Asset preparation'
              - 'UX/UI'
eleventyNavigation:
    key: Kalixa
    parent: Work
    title: 'Kalixa Pay Mastercard'
    order: 3
---

{% extends "layouts/work.njk" %}
{% block content %}
{% image { src: "/work/kalixa/laptop_iphone_front.jpg", alt: "Laptop and iPhone image showing Kalixa website", credit:"Kalixa", widths: [720, 1920, '2880'], sizes: '(max-width: 64em) 1920px, 2880px', ratio: "pb-super16 md:pb-block", breakout: true } %}
{{macro.toc()}}

## Overview

Kalixa Pay was marketed as a cost-effective contactless prepaid Mastercard with exclusive travel benefits. The site had to sell the product to potential customers, deliver relevant content to existing customers, and give access to accounts in a secure PCI environment.

Highly targeted landing pages were used to convert prospects into cardholders. The site had to accommodate a global affiliate network that was driving traffic towards it from the UK, Germany and Italy.

The landing pages had to be consistent, quick and easy to implement, and responsive on smaller devices.

## My responsibilities

-   The static templates were hosted in a secure listing to keep stakeholders informed throughout the development process. <span class="label label--info !m-0">Project management</span>
-   The first designs were created in-house and delivered as Photoshop PSD files. I then extrapolated a full site of templates from these, using my experience to improve the UX/UI as needed.
-   The static templates were then handed over to a team of back-end developers, complete with detailed annotations, listing indexes, and support documentation. They built the CMS, which I would use to produce new campaigns.
-   I created a set of multilingual email HTML templates to support each campaign.
-   I assisted in configuring the content management system (EPiServer) and took responsibility for the initial population of all launch content. <span class="label label--info !m-0">collaboration</span>
-   Briefs for landing pages were typically delivered as `.ppt` documents with composed artwork. I'd convert them into suitable assets and then build the pages in EPiServer, an enterprise-grade CMS. Most campaigns required multilingual versions, and some were regionalized as well.
    {.list .list--bullet .not-prose}

The website was the central hub of all Kalixa’s marketing activity. The content needed to be updated rapidly but also accurately in accordance with any regulatory requirements.

{% set gallery = { data: gScreens, id: 'gScreens', title: 'Layouts'} %}
{% include "partials/lightbox.njk" %}

{% set gallery = { data: gVariations, id: 'gVariations', title: 'Campaign variations'} %}
{% include "partials/lightbox.njk" %}

{% set gallery = { data: gEmail, id: 'gEmail', title: 'Email campaigns'} %}
{% include "partials/lightbox.njk" %}

{% endblock content -%}
