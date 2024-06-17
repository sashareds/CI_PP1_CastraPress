# CI_PP1_CastraPress
This Repo is for project Portfolio 1 as part of Full Stack Developer diploma at CodeInstitue


# CastraPress


## Specialised and managed WordPress hosting company.



![alt_text](docs/img/design-preview.jpg "Design Preview")



# Table of contents
1. [Footnotes](#footnotes)

## External user’s goals:

Running a WordPress site isn’t that simple or straightforward, despite how WordPress is marketed. It might be easy to create content, but once this content becomes popular you need a decent hosting that is capable of handling a lot of users, swarm of bots and it also needs to be secure to ward off the persistent and relentless hackers. 

Creators, marketers, business owners who are not tech savvy or want to be, wish they had an easy-breezy way to deal with it where they could just focus on their core business.  \
CastraPress sets out to accomplish just that. 

Potential customer’s goals are:



* To find a trustworthy and professional looking company that they can entrust their website to
* To purchase a clearly defined and cost effective product 
* Learn if there is a better way to run WordPress
* Ability to subscribe to the service in an easy way 
* A straightforward method to log-in into their Control Panel
* To find information on the company/service providers
* Quickly sort any of their tech or sales questions in an instant chat forum. 


## Site owner’s goals:

As a business owner, your concern is how to get the word out and deliver the message about your next great idea. This website is going to provide all vital information about the hosting, its tech stack, what it does and how it does it, why it’s better than other providers and most importantly how it’s going to make customers' lives better.

It aims to achieve the following:



* Capture leads through visitors registration
* Answer most common technical questions through the information provided to offload email and phone channels of communication
* Create a site where people can find and subscribe to the service advertised 
* Answer visitors' questions: What? How? and Why?
* Begin to develop a brand which is easily recognisable to customers 


## Features included

The website consists of the following pages; Home, Pricing, About Us, Contacts and Registration

The Home page design was devised by using [AIDA](https://blog.hubspot.com/marketing/aida-model) marketing formula, which is an abbreviation of Attract, Interest, Desire & Action. This formula helps to convey answers to the “What, how and why questions” goal.

In a nutshell this formula allows you to logically structure your content, almost like a sales pitch,  in such a way that boosts your chances of making a lead and conversion.

The Header of the home page, with its eye catching imagery and catchy slogan, serves as the Attract attention step. The section with a feature list helps to build up an Interest, by answering the question of “How?”. Then the section with benefits for the customers and testimonials builds and establishes trust and Desire.This section answers question “Why?” while the customers interest has been raised we offer him a CTA as a way to act on the desire and engage with the business .


### Responsiveness

Mobile-first is a popular design approach to responsive websites, which I wanted to take, however after research of my potential customers, mobile version of the website is not going to be the first they encounter with my business and service, I believe this to be the case with both new and returning customers. Working in WordPress requires you to have a bigger screen, so most of the time clients will be looking for my services on their computers. Therefore, I decided to focus on the desktop-first version. The Mobile site is going to be a secondary point of connection between customers and the business.

All pages on desktops have boxed content of 1104 max-width. Having a 27 inch monitor myself I believe it’s the best width for most textual content oriented websites, where your eyes don’t spread wide left and right to find what you need as it happens with 1280px, 1440px or 100% ones. \
Most modern tablets will fit 1104px content without any issues. For smaller screen flexbox will wrap cards and other related content to fill the screen. I therefore used this format. 


### Animated svg

It’s an amazing tech and I am glad it is finally [supported](https://caniuse.com/svg-smil) across all modern browsers. In my design approach and IA approach I need something eye catchy, but not overbearing or cheesy. This is difficult to achieve and n striking a balance but the animated gradient, consisted of brand colours, definitely gives a pop and coupled with the Unique Selling Point tagline I used this should catch visitors Attention. 


### Sticky header navigation

On long pages It’s a good idea to have the navigation menu stay with you all the way down so that you don’t have to scroll and scroll and scroll back. 

It uses simple css
```css
header {
    position: sticky;
    top:0;
    transition: top 900ms linear;
}
```


While These features would be enough to achieve my primary goals ,  I wanted to make the website more user friendly and hide the navigation completely when the user scrolls down, just to open all the available screen space and the show it on scroll up. I didn't find a way to do that in CSS. However, I [found](https://johandejong.dev/blog/sticky-header-with-show-hide-on-scrol) a small nifty JavaScript that enables this feature. I used the whole code as is, just only had to modify it a little bit. Original author used `pageYOffset` property but it is deprecated and wasn't properly reading window scroll pixels in Safari, the header would not shop up until it reached the top.

Then I added CSS transition effect to smooth the hide/show effect out

### 8px grid

The site is built in 8px grid(well more like base number for dimension calculations). We see our digital world through a pixel prism and one pixel on the screen can show only one pixel(although modern screens have subpixels too), therefore when we use uneven pixel sizes(e.g. 3px. 5px, 7px, 13px etc), we force screen pixels to show half of a pixel which creates pixelation. It’s why modern Vector programs have features that “make it pixel perfect”. 8px grid system helps to avoid this issue and make your whole site crispy clean. If you require additional information on this I have the following link to support my use of this grid . [Read more](https://uxplanet.org/everything-you-should-know-about-8-point-grid-system-in-ux-design-b69cb945b18d) 

### Colour matrix

I decided to play with the new color encoding system in CSS4 - [OKLCH](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch). Old RGB model is limited by the RBG color gammut and not friendly to use. HSL was an atempt to imporve that, but it limited by the RGB color space as well and has anot consistent, menaing changing colour lighntess shifts it's hue. Oklch opens the doors to the LAB colour space, including P3 colors(which used on the most modern screens), it is consistant with lightness. All this gives us an opportunety programatically create predistable and consistant colour plallets with just a few base colours and make it WCAG compatible without hurdles. 

It's supported across all major browsers, however some paramaunt features such as '[from](https://caniuse.com/css-relative-colors)' isn't fully supported in FireFox(although it's already implemented in the nightly version, so we can expect it very soon). With `from` we can take a base color and calculate, by using `calc`, a new variation e.g.
```css
:root {
/* Replace lightness and saturation to a certain lightness */
  --accent: oklch(from (--user-input) 87% 0.06 h);
}
.button:hover {
  /* 10% lighter version */
  background:   oklch(from var(--accent) calc(l + 10%) c h);
}
```

## Bugs and difficulties

Due my previouse experience with CSS and HTML I havent encoutered many bugs worth of mentioning. However, I did encouter some difficulties. Due to my poor initial planing for the site layout(I was designing and ploting site layout on the go, as opposed to plana nd design layout in Figma or likes), I choose wrong layout logic, which led me tweaking a lot for mobile devices. My `.boxed-with` and `.full-width` classes weren't rendering well enough(especially full with elements that had to break away from the boxed-width containers) and caused a lot of horizontal scrolling on mobile screens. I had to refactor my code. If I was doing it all from the cratch I'd be using css grid to map out all the possible layout.

Main goal was to implement features, that used require JavaScript, only CSS. I had to poke around a lot of mobile navigation hamburger icon. I managed tomake it mobile friendly, however failed to impliment X close icon when navigation is openned or user hovers over it. This hasn't worsened user experence in anyway tho, since I'd categorise it as a "goot to have, but not important" type of feature. I do need to learn more in tricky selectors involved ':checked' state

In some cases, I had tricky specificity issues with nested css and had to use `!important`. It's not the end of the world. However, I'd like to spend more time to investigate it and learn how to avoid it. 

## Footnotes <a name="footnotes"></a>

Since I am using a lot of CSS 4 features such as [variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), [nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting), new color encding [oklch](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch) etc, W3C renders my css code as invalidated due to usage of mentioned earlier CSS 4 features. Unfortunatelly this is out of my control and W3C is long known to be way behind of fast paced development of CSS [Reference](https://stackoverflow.com/questions/52930543/8-digit-hex-is-not-a-background-color-value/52931314#52931314). In my opinion, W3C isn't an indictor of a good code, since browser implimentations are vary and as long as the code works in readers browsers your code is valid. 
