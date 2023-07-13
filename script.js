'use strict'

// Carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    nav:false,
    dots: true,
    touchDrag: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// Tabs

const TabBtns = document.querySelectorAll('.tab-btn')
const Tabs = document.querySelectorAll('.tabs')

for (let i = 0; i < TabBtns.length; i++) {
  TabBtns[i].addEventListener('click', function() {
    // Remove active class from all tab buttons
    TabBtns.forEach(btn => btn.classList.remove('active'))
    
    // Add hide class to all all tabs
    Tabs.forEach(tab => tab.classList.add('hide'))

    // Add active class to the clicked tab button
    TabBtns[i].classList.add('active')

    // Remove hide class from the corresponding tab
    Tabs[i].classList.remove('hide')
  })
}

