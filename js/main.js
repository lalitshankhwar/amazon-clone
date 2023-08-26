$('#hero-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 5000,
    margin:10,
    nav:true,
    dots: false,
    navText: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('#slider-1').owlCarousel({
    stagePadding: 30,
    loop:false,
    margin:20,
    nav:true,
    dots: false,
    navText: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('#slider-2').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    dots: false,
    navText: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:7
        }
    }
})

$('#slider-7').owlCarousel({
    loop:true,
    stagePadding: 50,
    margin:20,
    nav:true,
    dots: false,
    navText: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#product-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    navText: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// let barValue = document.getElementById('bar-value');
// console.log(barValue.innerHTML)
// document.getElementById('bar-meter').style.width = barValue.innerHTML;

//open side-menu
$('.menubtn').on('click', ()=>{
    $('.side-menu').css('display','block')
})
$('.menu').on('click', ()=>{
    $('.side-menu').css('display','block')
})
//close side-menu
$('.closebtn').on('click', ()=>{
    $('.side-menu').css('display','none')
})

// cart section
$('.laterbtn').on('click', ()=>{
    $('.laterbtn').toggleClass('selected')
    $('.againbtn').removeClass('selected')
    $('.buy-again').css('display','none')
    $('.save-later').css('display','block')
})
$('.againbtn').on('click', ()=>{
    $('.againbtn').toggleClass('selected')
    $('.laterbtn').removeClass('selected')
    $('.buy-again').css('display','block')
    $('.save-later').css('display','none')
})

    