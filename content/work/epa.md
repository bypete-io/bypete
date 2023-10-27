---
title: Emerging Payments Association
taster: 'The EPA needed a public resource for industry news and events, as well as members-only access to projects, whitepapers, and resources across a network of over 3,700 businesses.'
excerpt: 'A public resource for industry news and events, as well as secure members-only access to projects, whitepapers, resources'
description: 'Discover how I helped launch this public resource for industry news and events, whitepapers, and resources - all within a network of over 3,700 businesses.'
keywords: 'Payments innovation, networking, membership, whitepapers, funnel prospects to become members, public resource, keeping the client informed, case study, Front-End development'
opengraph:
    image: 'img/work/epa/og__image.jpg'
date: 2022-09-01
lastmod: 2023-07-01
tags: ['posts', 'fintech']
readtime: 3-4
brand:
    bg: 'bg-[#651731]'
    color: 'text-[#651731]'
img:
    credit: 'Emerging Payments Association'
    listing: '/work/epa/listing.jpg'
skillset:
    bg: 'bg-[#651731]'
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
              - 'Foundation for sites'
              - 'Foundation for emails'
              - 'jQuery and vanilla js'
              - 'Gulp'
        - title: 'My responsibilities'
          class: 'col-span-full'
          skills:
              - 'HTML Templates'
              - 'HTML Email templates'
              - 'Content population'
              - 'Wireframes'
              - 'Asset preparation'
              - 'UX/UI'
eleventyNavigation:
    key: EPA
    parent: Work
    title: 'Emerging Payments Association'
    order: 3
---

{% extends "layouts/work.njk" %}
{% block content %}
{% image { src: "/work/epa/laptop_iphone_front.jpg", alt: "Laptop and iPhone image showing Emerging Payments Association website", credit:"Emerging Payments Association", widths: [720, 1920, '2880'], sizes: '(max-width: 64em) 1920px, 2880px', ratio: "pb-super16 md:pb-block", breakout: true } %}
{{macro.toc()}}

## Overview

The Emerging Payments Association was founded with the goal of making the United Kingdom a global leader in payments innovation. Membership in the EPA provided access to resources to promote innovation, growth, and advocacy.

The client required a public resource for industry news and events, as well as secure members-only access to projects, whitepapers, resources, and an EPA network of over 3,700 companies. The high quality of the public content would funnel prospects to sign up for memberships.

## My responsibilities

-   The designs and static templates were hosted in a secure listing to keep stakeholders informed throughout the development process. <span class="label label--info !m-0">Project management</span>
-   Working from a brief wireframe document, I used Photoshop to design six core layouts. Paying close attention to the client's feedback, I was able to keep revisions to a minimum.
-   I created all of the Front-End HTML templates – working to a mobile-first mindset. These were then handed over to a team of back-end developers, complete with detailed annotations, listing indexes, and support documentation.
-   I collaborated closely with the developers to ensure that the site stayed true to the visuals approved by the client.
-   I assisted in configuring the content management system (Umbraco) and took responsibility for the initial population of all launch content. <span class="label label--info !m-0">collaboration</span>
    {.list .list--bullet .not-prose}

As new sections became available for review, the index listings were updated to keep the client informed. This reactive approach allowed me to hand over the initial templates to developers without having to wait for the entire set. It also prevented any client surprises because they were viewing a realistic 'working' version of the site.

<figure class="not-prose">
<div class="grid grid-cols-1 items-center bg-gray-50 gap-4 md:gap-8 {{utilities.tramline.all}}" >
    {% image { src: "/work/epa/listing-01.jpg", widths:[1440], classlist:'w-full h-auto shadow-md border border-gray-200', alt: "Listing page"} %}
    {% image { src: "/work/epa/listing-02.jpg", widths:[1440], classlist:'w-full h-auto shadow-md border border-gray-200', alt: "Homepage"} %}
    {% image { src: "/work/epa/listing-03.jpg", widths:[1440], classlist:'w-full h-auto shadow-md border border-gray-200', alt: "Article"} %}
  </div>
  <figcaption class="border-b border-gray-200 pb-4 mt-4 text-sm flex justify-between {{utilities.tramline.x}}">
    Clear branding was required across all media formats <span class="text-xs">EPA</span>
  </figcaption>
</figure>

I collaborated closely with the developers to ensure that the site stayed true to the visuals approved by the client.
Umbraco was used to create the development website. I was able to populate the site with real content from the first instance and continued to do so until the live site was launched.

{% set gallery = { data: gScreens, id: 'gScreens', title: 'Layouts'} %}
{% include "partials/lightbox.njk" %}

{% set gallery = { data: gEmail, id: 'gEmail', title: 'Email newslettter'} %}
{% include "partials/lightbox.njk" %}

{% set gallery = { data: gAwards, id: 'gAwards', title: 'EPA Awards'} %}
{% include "partials/lightbox.njk" %}

## Final comments

These images have been captured from static templates, but they accurately represent the site that was launched. Fifth dimension (the agency) reformed as K Wearables, a start-up focused on launching the world’s first contactless payment ring, [K Ring](/work/mykring), and the live site has since been redesigned.

{% endblock content -%}
