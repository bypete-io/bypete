---
title: MyKRing App
excerpt: 'See how Xamarin.Forms was used to create a cross-platform app to improve the customer experience and make authentication easier.'
taster: 'At launch, K Ring users could only manage their rings online. Despite having an advanced responsive framework the website, customers still anticipated a separate app and all the simplicity it provides. See how we created a cross-platform solution with Xamarin.Forms.'
description: 'See how I helped to create a cross-platform app to improve the customer experience and make authentication easier.'
keywords: 'Contactless payment ring, Wearable tech, cross-platform App development, iOS, Android, Xamarin.Forms, Azure DevOps, authentication, validation'
opengraph:
    image: 'img/work/mykringapp/og__image.jpg'
date: 2023-10-01
lastmod: 2023-10-18
tags: ['featured', 'posts', 'app', 'xamarin.forms', 'fintech']
readtime: '4'
brand:
    bg: 'bg-[#FF0069]'
    color: 'text-[#FF0069]'
img:
    credit: 'K Wearables'
    listing: '/work/mykringapp/listing.jpg'
skillset:
    bg: 'bg-[#FF0069]'
    text: 'text-white'
    icon: ''
    heading: 'permalink:text-white permalink:before:text-[#00a3e2]'
    shadow: ''
    areas:
        - title: 'Apps'
          skills:
              - 'Visual Studio - Xamarin.Forms'
              - 'Adobe Photoshop'
              - 'Adobe Illustrator'
              - 'Azure DevOps'
              - 'Subversion (SVN) version control'
        - title: 'Development'
          skills:
              - 'XAML Templates'
              - 'App support page templates'
              - 'Content population'
              - 'Asset preparation'
              - 'UX/UI'
eleventyNavigation:
    key: mykringapp
    parent: Work
    title: 'myKRing App'
    order: 1
---

{% extends "layouts/work.njk" %}
{% block content %}
{{ macro.toc() }}

  <p class="lead">
    At launch, K&nbsp;Ring users could only manage their rings online. Although a responsive framework was used during the development of the website, customers still anticipated a separate app and all the benefits it provides.
  </p>
  With no prior app development experience, the learning curve was steep. [Xamarin.Forms](https://dotnet.microsoft.com/en-us/apps/xamarin/xamarin-forms) was chosen because it offers a cross-platform framework with a single code base. The main website already used the .NET developer platform, so extending that to the app made sense.
  Although an initial wireframe document was provided, it was essentially an imitation of the mykring.com responsive pages. Rather than simply replicating what we had, we wanted to improve the user experience wherever possible.

{% blocktype { overflow: true, breakout: true, wrapper: 'bg-neutral-100 outline-none ' + utilities.margin.y, legibility: 'text-gray-700'  } -%}
<img src="/img/details/contour__16--cr.svg"
       class="absolute inset-0 object-cover w-full h-full"
       width="1920"
       height="1080"
       alt="countour lines">

  <div class="relative grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-block60 min-h-block gap-8 max-w-container mx-auto">
    <div class="md:order-2 self-center rte {{ utilities.tramline.y }}">
      <blockquote class="not-prose italic pl-0 m-0 text-xl md:text-2xl xl:text-3xl">
        <p class="font-headline mb-4">
          <strong>So glad there's finally an app for K&nbsp;Ring!</strong>
        </p>
        <p>
          Good user experience: same interface style you're used to from the website, but not just a web shell. Easy to navigate and use. Notifications through the app are a plus!
        </p>
        <p class="cite">
          <span class="text-yellow-500 text-sm mr-1"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span> James, 26 November 2021 (Play store)
        </p>
      </blockquote>
    </div>
    <div class="md:order-1 self-end">
      {%- image { src: "/work/mykringapp/iPhone__hand.png", alt: "Hand holding an iPhone with mykring app in use", widths: [320, 400], sizes:'(max-width: 48em) calc(100vw - 2rem), 400px', classlist: 'relative mt-8 object-contain w-full h-[480px] lg:h-[640px]' } %}
    </div>
  </div>
{% endblocktype %}

## My responsibilities

-   Re-design the supplied `.ppt` wireframes to make use of the xaml display collections in Xamarin.Forms.
-   I created the static layouts directly in Visual Studio - using temporary static pages to speed up development. A developer would then duplicate these pages into the appropriate locations and assign the required dynamic properties. Subversion (SVN) was used to control the development versioning.
-   I oversaw the image library, ensuring that all assets were available in the appropriate resolutions for iOS and Android devices. This was a combination of converting existing assets and creating new artwork for the app.
-   I assisted in the configuration of the content management system (Umbraco) and was in charge of the initial populating of all app-specific launch content. <span class="label label--info !m-0">collaboration</span>
-   I helped with the testing, creating user test scripts and reporting any bugs as issues within **Azure DevOps**
-   After launch, I began a review process of the product website to see what updates could be applied to provide a consistent user experience across the app and site.
    {.list .list--bullet .not-prose}

The '**Auto top-up**' feature is a good example of a user path that was enhanced during the app development process. It was previously a load method but is now only available as an action for validated cards (a prerequisite of the auto top-up service) in the Manage Cards section.
Each card has its own set of available actions, which update as the user swipes through their collection. Cards that have not been validated will show a button to begin the validation process. This is followed by a 'Complete validation' state and, finally, a 'Validated' indicator. At this point the 'Auto top-up' button becomes active. Cards used for auto top-up cannot be removed until auto top-up has been turned off. As a result, the 'Remove' option is set to disabled.
By controlling visibility, we can remove redundant options, resulting in a smoother experience.

<figure class="not-prose">
  <div class="grid grid-cols-3 auto-rows-auto gap-4 md:gap-8 my-8">
    {% image { src: "/work/mykringapp/web-autotopup.jpg", widths:[768], classlist:'w-full m-0 border border-gray-200 rounded md:rounded-xl shadow-sm', alt: "Auto topup website view"} %}
    {% image { src: "/work/mykringapp/1.1.0_auto-topup.jpg", widths:[768], classlist:'w-full border border-gray-200 rounded md:rounded-xl shadow-sm', alt: "Auto topup inactive"} %}
    {% image { src: "/work/mykringapp/1.1.0_auto-topup-open.jpg", widths:[768], classlist:'w-full border border-gray-200 rounded md:rounded-xl shadow-sm', alt: "Auto topup open"} %}
  </div>
  <figcaption class="border-b border-gray-200 pb-4 mt-4 text-sm flex justify-between">
    Unnecessary elements from the online responsive version (left) were stripped out to streamline the app layout (middle and right) <span class="text-xs">App v1.0.1, K Wearables Ltd.</span>
  </figcaption>
</figure>

The Auto top-up form was also streamlined and only appears when 'Use Auto top-up' is toggled to on. The input sliders were removed as they became too fiddley within the mobile viewport. The minimum and maximum values are now displayed alongside the input field.
{% image { src: "/work/mykringapp/app1.1__autotopup.jpg", widths:[768,2100], sizes: '(max-width: 48em) 100vw, 100vw', credit: 'App v1.0.1, K Wearables Ltd.', caption: ' Users can manage Auto top-up functionality using a simple toggle. ', classlist:'w-full', alt: "Screengrab of a listing index", wrapper:'my-4 md:my-8', breakout: true} %}

{% set gallery = { data: gScreens, id: 'gScreens', title: 'App screens'} %}
{% include "partials/lightbox.njk" %}

{% set gallery = { data: gUx, id: 'gUx', title: 'UX details'} %}
{% include "partials/lightbox.njk" %}

## Ratings and Reviews

<p>
  <a href="https://apps.apple.com/gb/app/mykring/id1578688520?see-all=reviews"
     class="link external"
     target="_blank"><span class="text-4xl font-black">4.6</span></a> out of 5 <span class="text-sm">(Sept &rsquo;22)</span>
</p>

{% include "partials/swiper/reviews.njk" %}

{% image { src: "/work/mykringapp/floating-handsets.jpg", alt: "Laptop and iPhone image showing K Ring website", credit:"K Wearables Ltd.", widths: [720, 1920, '2880'], sizes: '(max-width: 64em) 1920px, 2880px', ratio: "pb-super16 md:pb-widescreen", breakout: true } %}
{% endblock content -%}
