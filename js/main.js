$(document).ready(function(){
 $("#hamburger").click(function(){
   $(".main-nav").addClass("open-nav");
   console.log($(".main-nav"));
 });

$("#close").click(function(){
  $(".open-nav").removeClass("open-nav");
});



$("nav a").click(function(e){
 $("nav a").removeClass("active");
 $(this).addClass("active");
});

});
