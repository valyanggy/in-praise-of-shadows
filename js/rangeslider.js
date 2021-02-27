$("#opacity-slider").on("change", function () {
    // $("#slider-value").html($(this).val());
    $(".shadows").css({
      opacity: $(this).val()
    });
  });