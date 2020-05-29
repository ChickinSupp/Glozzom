function getYear() {
    $("#year").text( (new Date).getFullYear() );
}

function carousel() {
    $('carousel').carousel({
        interval: 6000,
        pause: 'hover'
    })
}

function getVideo() {
   $(function () {
       $('.video').click(function () {
           let theModal = $(this).data('target'),
           videoSRC = $(this).attr('data-video'),
           videoSRCAuto = videoSRC `watch?v=M_PwLvFDB2Y`;
           $(theModal + ' iframe').attr('src'),videoSRCAuto;
           $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src'), videoSRC;
           })

       })
   }) 
}