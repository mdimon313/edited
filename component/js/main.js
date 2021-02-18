

$(document).ready(function(){

    $('.slider-active').owlCarousel({
        loop:true, 
        margin:10,
        autoplay:true,
        autoplaySpeed:600,
        smartSpeed:200,
        autoplayHoverSpeedPause:true,
        nav:true,
        dots:true,
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

    $('.testimonial-active').owlCarousel({
        loop:true, 
        margin:10,
        autoplay:true,
        autoplaySpeed:600,
        smartSpeed:200,
        autoplayHoverSpeedPause:true,
        nav:false,
        dots:true,
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

    new WOW().init();
//counter up
    $('.counters').counterUp({
        delay: 10,
        time: 1000
    });

    //magnificPopup
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
          }
        
        
      });
//video popup
      $('.video-popup').magnificPopup({
        type: 'iframe',
        
      });
   
   
});

// scroll
window.addEventListener("scroll", headFixed);

function headFixed() {
	let header, scrollY;
	
	header = document.getElementById("header");
	scrollY = window.pageYOffset;

	if (scrollY>100) {
		header.classList.add('sticky');
	} 
	if (scrollY<=99) {
		header.classList.remove('sticky');
	}
};

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

