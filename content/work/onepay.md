---
title: OnePay
taster: "Onepay gives workers a fast, easy and efficient way to get wage payments when they're in the UK."
excerpt: 'A quick, easy, and efficient way to pay and receive wage payments'
description: 'Discover how I contributed to the creation of a website that gives businesses and their employees a quick, easy, and efficient way to pay and receive wage payments.'
keywords: 'Payment solutions for temporary employees, UK bank accounts, wage payments, multilingual website, umbraco, dictionary, project management, keeping the client happy'
opengraph:
    image: 'img/work/onepay/og__image.jpg'
date: 2022-10-01
lastmod: 2023-10-01
tags: ['posts', 'featured', 'responsive', 'fintech']
readtime: 5-6
brand:
    bg: 'bg-[#00a3e2]'
    color: 'text-[#00a3e2]'
img:
    credit: 'OnePay'
    listing: '/work/onepay/listing.jpg'
skillset:
    bg: 'bg-[#00a3e2]'
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
              - 'HTML Templates (convert agency PSDs)'
              - 'HTML Email templates (no source)'
              - 'Content population'
              - 'Wireframes'
              - 'Asset preparation'
              - 'UX/UI'
eleventyNavigation:
    key: Onepay
    parent: Work
    title: 'OnePay'
    order: 2
---

{% extends "layouts/work.njk" %}
{% block content %}
{% image { src: "/work/onepay/laptop_iphone_front.jpg", alt: "Laptop and iPhone image showing Onepay website", credit:"Onepay", widths: [720, 1920, '2880'], sizes: '(max-width: 64em) 1920px, 2880px', ratio: "pb-super16 md:pb-block", breakout: true } %}
{{macro.toc()}}

## Overview

OnePay are one of the UK’s leading providers of alternative payment solutions for temporary employees who can’t open a UK bank account. Their service provides businesses and their workers a fast, easy, and efficient way to pay and receive wage payments.
Applicants are issued a Visa prepaid card, access to an online account and use of an automated telephone service so they can manage their money at any time.

## My responsibilities

-   The static templates were hosted in a secure listing to keep stakeholders informed throughout the development process. <span class="label label--info !m-0">Project management</span>
-   I produced a complete set of Front-End html templates from a small sample of .psd mock-ups (supplied by the client’s branding agency).
-   I created a complete set of email HTML templates that would work with Umbraco's dictionary to handle the multilanguage requirements.
-   Working closely with the client, and drawing on my experience within the prepaid sector, I was able to accommodate their ideas and introduce some key revisions to improve the customer experience. The static templates were then handed over to a team of back-end developers, complete with detailed annotations, listing indexes, and support documentation.
-   I assisted in configuring the content management system (Umbraco) and took responsibility for the initial population of all launch content. <span class="label label--info !m-0">collaboration</span>
    {.list .list--bullet .not-prose}

{% set gallery = { data: gScreens, id: 'gScreens', title: 'Customer views'} %}
{% include "partials/lightbox.njk" %}

{% set gallery = { data: gAgency, id: 'gAgency', title: 'Agency views'} %}
{% include "partials/lightbox.njk" %}

{% set gallery = { data: gCs, id: 'gCs', title: 'Customer Services views'} %}
{% include "partials/lightbox.njk" %}

## Multilanguage

The site was available in six languages and adopted the ‘One to One’ method – requiring only one instance of a page. **Vorto**, a property editor wrapper, converted each property editor into a multilingual property - allowing multiple languages per editable field.
I was responsible for collating the translated content and entering it into the site as it became available, often with multiple revisions to manage. This included cross referencing all the dictionary elements within the .Net templates.

{% set gallery = { data: gEmail, id: 'gEmail', title: 'Email templates', context: 'For the system emails, I used the Sass version of Foundation for emails. The language content was dynamically populated by injecting Umbraco’s dictionary at the point of sending. As with the website, two branded themes as well as unique URLs and image assets were required.'} %}
{% include "partials/lightbox.njk" %}

## Learning points

The responsive pages were built within the Foundation v5 framework, and the custom elements were managed via SCSS. The site was branded into two themes, **customer** (orange), and **forbusiness** (blue). I used two themed settings files ` theme_business.scss` and ` theme_you.scss` to declare all the themed variables before then importing `app.scss` to generate a stylesheet for each theme.

The static templates were composed using Panini, a flat file compiler powered by the Handlebars templating language. This helped to keep the static prototypes consistent and allowed for quick updates between rounds of feedback.

This project required me to collaborate much more closely with the client than I had previously. I wouldn't normally take on as many project-management responsibilities, so the experience was valuable. I enjoyed collaborating with the client to turn their ideas into a useful final product.

All of our existing multilingual websites used sub-sites, but Vorto's 'One to One' method proved to be an excellent resource for CMS content.

## Scope for improvement

I used the Foundation framework to quickly create a prototype site. However, the weight of the generated CSS and JS assets comes at a cost. One area for improvement would be to optimise the build and see how much file weight can be saved.

<p class="lightbox">
{% lightbox {src:'/work/onepay/register.jpg', alt: 'Laptop and iPhone image showing Onepay website', widths:[768, 1440, 2880], sizes:'(max-width: 48em) calc(100vw - 2rem), (max-width: 52em) calc(100vw - 4rem), 768px', classlist:'w-full h-auto', wrapper:'relative', caption: 'caption text' } %}
</p>

## Final thoughts

This was the final client project I worked on before Fifth dimension reformed as **K Wearables**, a start-up focused on launching [K Ring](/work/mykring/), the world's first contactless payment ring.

{% endblock content -%}
