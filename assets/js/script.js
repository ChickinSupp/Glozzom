//GET CURRENT YEAR
$("#year").text(new Date().getFullYear());

// CAROUSEL SPEED
$("carousel").carousel({
    interval: 6000,
    pause: "hover",
  });

// MODAL VIDEO ---something
$(function () {
    $(".video").click(function () {
      let theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCAuto =
          videoSRC +
          "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
      $(theModal + " iframe").attr("src"), videoSRCAuto;
      $(theModal + " button.close").click(function () {
        $(theModal + " iframe").attr("src"), videoSRC;
      });
    });
  });

// EKKO LIGHTBOX
  $(document).on('click', '[data-toggle="lightbox"]', function(event)  {
    event.preventDefault();
    $(this).ekkoLightbox();
});


