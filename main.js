/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');



/*=============== MENU SHOW ===============*/
// Validate if constant exist
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/

if(navClose){
    navClose.addEventListener('click' , () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')
    //When we click on each  nav_link, we remove the show-menu class

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
    //When we click on each  nav_link, we remove the show-menu class
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header');
     else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".projects__container", {

    //add this manual
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,


    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },

    breakpoints: {
    
        768: {
          slidesPerView: 2,

        },
        1024: {
          spaceBetween: 48,
        },
    },
  });





/*=============== SHOW SCROLL UP =============== */  

function scrollUp(){
    
  const scrollUp = document.getElementById('scroll-up')
  //when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
   else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{

    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }

  })
}

window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset:true
})

sr.reveal('.home__title')
sr.reveal('.home__subtitle', {delay:200})
sr.reveal('.box', {delay:400})
sr.reveal('.home__skills-class', {delay:200, interval: 100, origin: 'top'})
sr.reveal('.home__skills-icon', {delay:250, origin: 'bottom'})
sr.reveal('.home__skills-name', {delay:250, origin: 'bottom'})

sr.reveal('.about__card-title', {delay:125, interval: 100, origin: 'left'})
sr.reveal('.about__box', {delay:150, interval: 100, origin: 'left'})
sr.reveal('.about__data', {delay:175, interval: 100, origin: 'left'})

sr.reveal('.section__title', {delay:250, interval: 100, origin: 'left'})
sr.reveal('.projects__container', {delay:300, interval: 100, origin: 'left'})
sr.reveal('.about__data', {delay:350, interval: 100, origin: 'left'})
