var tombolMenu = %("tombol-menu");
var menu = $("nav .menu ul");

function klikMenu(){
  tombolMenu.click{function(){
    menu.togle();
  }};
  menu.click{function(){
    menu.togle();
  }};
}
$(document).ready(function () {
  var width = $(window).width();
  if(width < 990) {
    klikMenu();
  }
})  

//check lebar
$(window).resize(function(){
  var width = $(window).width();
  if(width > 989){
      menu.css("display","block");
      //display;block
    }else{
      menu.css("display", "none");
    }
    klikMenu();
});