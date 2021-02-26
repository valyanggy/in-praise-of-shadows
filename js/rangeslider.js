$("#opacity-slider").on("change mousemove", function () {
    $("#slider-value").html($(this).val());
    $(".shadows").css({
      opacity: $(this).val()
    });
  });