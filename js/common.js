$(window).on("scroll", function () {
  //스크롤 값의 변화가 생기면
  var scroll = $(window).scrollTop(); //스크롤의 거리
  var win_height = $(window).height();
  var header_height = $("header").height();

  if (scroll > win_height) {
    //300이상의 거리가 발생되면
    $(".topMove").fadeIn("slow"); //top보여라~~~~
  } else {
    $(".topMove").fadeOut("fast"); //top안보여라~~~~
  }

  if (scroll > win_height - header_height) {
    //300이상의 거리가 발생되면
    $("header").css("background", "#000"); //top보여라~~~~
    $("header").css("border-bottom", "2px solid #333");
  } else {
    $("header").css("background", "rgba(0, 0, 0, 0.4)"); //top안보여라~~~~
    $("header").css("border-bottom", "none");
  }
});

$(".topMove").click(function (e) {
  e.preventDefault();
  //상단으로 스르륵 이동합니다.
  $("html,body").stop().animate({ scrollTop: 0 }, 1000);
});