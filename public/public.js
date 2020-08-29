window.onscroll = function () {
  scrollFunction();
};

// changing property of Sticky navbar at the time of scrolling
function scrollFunction() {
  if (document.documentElement.scrollTop > 0) {
    $(".mynav").css("height", "60px");
    $(".logo").css("width", "5rem");
    $(".logo").css("height", "auto");
  } else {
    $(".mynav").css("height", "auto");
    $(".logo").css("width", "7rem");
    $(".logo").css("height", "auto");
  }
}
