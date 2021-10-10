$(document).ready(function () {
  $("img").click(function () {
    if ($(this).attr("src") === "images/erhu1.png") {
      $(this).attr("src", "images/erhu2.png");
    } else if ($(this).attr("src") === "images/erhu2.png") {
      $(this).attr("src", "images/erhu1.png");
    } else if ($(this).attr("src") === "images/movie1.png") {
      $(this).attr("src", "images/movie2.png");
    } else if ($(this).attr("src") === "images/movie2.png") {
      $(this).attr("src", "images/movie1.png");
    } else if ($(this).attr("src") === "images/travel1.png") {
      $(this).attr("src", "images/travel2.png");
    } else {
      $(this).attr("src", "images/travel1.png");
    }
  });
});
