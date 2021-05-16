var owl = $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        },
        2000:{
            items:7
        }
    }
});
/*Faz com que o carrosel se mova ao rodar o Scroll Mouse*/
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>1) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});