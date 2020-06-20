$(function () {
  $(".slider__inner").slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false,
  });

  $("[name='mail']").keyup(function () {
    if ($(this).val().length > 0) {
      $("[name='phone']").attr("disabled", false);
    } else {
      $("[name='name']").attr("disabled", true);
    }
  });

  $(".header-btn__menu").on("click", function () {
    $(".header__menu ul").slideToggle();
  });
});
