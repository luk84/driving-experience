//carousel init
$("#mainCarousel").carousel({
  pause: "hover"
});

//changing car cards with carousel
let count = 0;
$("#mainCarousel").on("slide.bs.carousel", function(e) {
  const cars = $(".car-card");
  const carsNumber = cars.length - 1;
  if (e.direction === "left") {
    count < carsNumber ? count++ : (count = 0);
    cars
      .removeClass("show")
      .eq(count)
      .addClass("show");
  } else if (e.direction === "right") {
    count > 0 ? count-- : (count = carsNumber);
    cars
      .removeClass("show")
      .eq(count)
      .addClass("show");
  }
});

//scroll spy
$("body").scrollspy({
  target: "#mainNav",
  offset: 58
});

//smooth scrolling
$("#mainNav a, #showcase a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 57
      },
      750
    );
  }
});

//automatic year date for footer
$("#currentYear").text(new Date().getFullYear());
