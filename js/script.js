
/**
 * Sticky JS. 
 * Taken from https://johandejong.dev/blog/sticky-header-with-show-hide-on-scroll
 * Slightly modified by me. Original author used pageYOffset property but it is depricated 
 * and wasn't properly reading window scroll pixels, header would not shopw up untill it reached the top.
 */
/* set the element you want to make sticky */
const headerElem = document.querySelector('header');
/* set the offset on which the hide effect has to wait */
const scrollOffset = 200;

/* DO NOT MODIFY BELOW */
/* get the current page position */
let prevScrollpos = window.scrollY;

/* monitor when the page is being scrolled */
window.addEventListener('scroll', () => {
    /* check if the scroll offset is passed */
    if (window.scrollY > scrollOffset) {
        /* get the new page position after scrolling */
        let currentScrollPos = window.scrollY;
        /* check the new page position with the old position */
        if (prevScrollpos > currentScrollPos) {
            /* if scrolling UP, show the sticky element */
            headerElem.style.top = '0';
        } else {
            /* if scrolling DOWN, hide the sticky element */
            headerElem.style.top = '-100%';
        }
        /* set the page position, so it can be checked the next time */
        prevScrollpos = currentScrollPos; 
    }
});