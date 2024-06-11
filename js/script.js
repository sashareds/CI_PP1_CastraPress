
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


/* SCROLLUP BUTTON 
*  Taken from: https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/
*/

// We select the element we want to target
var target = document.querySelector("#testimonials");

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

// Next we want to create a function that will be called when that element is intersected
function callback(entries, observer) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.add("showBtn");
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn");
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
let observer = new IntersectionObserver(callback);
// Finally start observing the target element
observer.observe(target);
