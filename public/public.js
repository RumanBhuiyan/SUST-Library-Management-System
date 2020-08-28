window.onscroll = function () {
  scrollFunction();
};

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
  // if (document.documentElement.scrollTop >= 187.5) {
  //   $(".quotediv").css("margin-left", "");
  // } else {
  //   $(".quotediv").css("margin-left", "-400px");
  // }
}
