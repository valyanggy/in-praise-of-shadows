$("#opacity-slider").on("change", function () {
  // $("#slider-value").html($(this).val());
  $(".shadows").css({
    opacity: $(this).val()
  });
});


// scroll animation
// window.addEventListener('scroll', () => {
//   document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
// }, false);





let didScroll = false;
let paralaxTitlesA = document.querySelectorAll('.paralax-title-left');
let paralaxTitlesB = document.querySelectorAll('.paralax-title-right');

const scrollInProgress = () => {
  didScroll = true
}

const raf = () => {
  if (didScroll) {
    paralaxTitlesA.forEach((element, index) => {
      element.style.transform = "translateX(" + window.scrollY / 10 + "%)"
    })
    paralaxTitlesB.forEach((element, index) => {
      element.style.transform = "translateX(" + window.scrollY / 14 + "%)"
    })
    didScroll = false;
  }
  requestAnimationFrame(raf);
}


requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)