---
title: Eastside Locks
taster: 'Eastside Locks commissioned this aspirational brochure site to communicate their vision and attract prospective clients for their 650,000 square foot urban development.'
excerpt: 'Aspirational brochure site to communicate a vision and attract prospective clients'
description: "Discover how I helped to produce an aspirational brochure site to communicate Eastside Lock's vision and attract prospective clients for their 650,000 sq. ft urban development."
keywords: 'Aspirational brochure site, Communicate the vision, prospective clients, urban development, Prime Grade A office space, stick to the brand guidelines'
opengraph:
    image: 'img/work/eastsidelocks/og__image.jpg'
date: 2022-09-01
lastmod: 2023-07-01
tags: ['posts']
readtime: 3
brand:
    bg: 'bg-[#6ab53f]'
    color: 'text-[#6ab53f]'
img:
    credit: 'Eastside Locks'
    listing: '/work/eastsidelocks/listing.jpg'
skillset:
    bg: 'bg-[#6ab53f]'
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
        - title: 'My responsibilities'
          class: 'col-span-full'
          skills:
              - 'HTML Templates (convert agency PSDs)'
              - 'HTML Email templates (no source)'
              - 'Content population'
              - 'Asset preparation'
              - 'UX/UI'
eleventyNavigation:
    key: Eastside
    parent: Work
    title: 'Eastside Locks'
    order: 3
---

{% extends "layouts/work.njk" %}
{% block content %}
{% image { src: "/work/eastsidelocks/laptop_iphone_front.jpg", alt: "laptop image showing Eastside Locks website", credit:"Eastside Locks, Goodman", widths: [720, 1920, '2880'], sizes: '(max-width: 64em) 1920px, 2880px', ratio: "pb-super16 md:pb-block", breakout: true } %}
{{macro.toc()}}

## Overview

Eastside Locks, Birmingham was an urban development of over 650,000 sq ft of prime Grade A office space within three distinct developments at the time of its launch. An inspiring brochure site was commissioned to help deliver their vision and secure prospective clients.

## My responsibilities

-   The static templates were hosted in a secure listing to keep stakeholders informed throughout the development process. <span class="label label--info !m-0">Project management</span>
-   I extrapolated a complete set of Front-End html templates from a sample of .psd mock-ups (supplied by the client’s branding agency). It was critical that the finished product matched the supplied branding exactly - the website needed to reflect the company's distinctive branding across multiple media channels.
-   I was able to make some usability suggestions, but for the most part, the designs had to adhere closely to the supplied visuals.
-   The static templates were then handed over to a team of back-end developers, complete with detailed annotations, listing indexes, and support documentation.
-   I assisted in configuring the content management system (Umbraco) and took responsibility for the initial population of all launch content. <span class="label label--info !m-0">collaboration</span>
    {.list .list--bullet .not-prose}

<figure class="not-prose">
<div class="grid grid-cols-1 items-center bg-gray-50 gap-4 md:gap-8 {{utilities.tramline.all}}" >
    <div class="transition-all duration-300" >
    {% image { src: "/work/eastsidelocks/home--detail.jpg", widths:[1440], classlist:'w-full h-auto shadow-md border border-gray-200', alt: "Homepage view"} %}
    </div>
    <div class="transition-all duration-300" >
    {% image { src: "/work/eastsidelocks/vision--detail.jpg", widths:[1440], classlist:'w-full h-auto shadow-md border border-gray-200', alt: "Map showing the development plan"} %}
    </div>
  </div>
  <figcaption class="border-b border-gray-200 pb-4 mt-4 text-sm flex justify-between {{utilities.tramline.x}}">
    Clear branding was required across all media formats <span class="text-xs">Eastside Locks, Goodman</span>
  </figcaption>
</figure>

{% set gallery = { data: gScreens, id: 'gScreens', title: 'Site visuals'} %}
{% include "partials/lightbox.njk" %}

{% set gallery = { data: gUi, id: 'gUi', title: 'UI/UX'} %}
{% include "partials/lightbox.njk" %}

## Learning points

The website was commissioned after a significant amount of traditional printed media had already been published. As a result, it was critical that I adhere to all the brand guidelines in order to ensure consistent delivery across all channels. For example, the development's print brochure pdf is available as downloadable content on the website.

I was able to work quickly within the strict guidelines and helped deliver a responsive site that complemented Eastside's emerging position as the city's knowledge, innovation and business quarter.

{% endblock content -%}
