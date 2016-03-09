//Fades in header and body-text content
//2000 is time in ms
$("header").fadeIn(2000, function() {
  $(".body-text").fadeIn();
});

//Function that toggles display for caption
var toggleRiseCaption = function() {
  $("div.rise-caption").fadeToggle("slow");
};

//Triggers toggle caption function on hover entry and exit
$(".rise").hover(toggleRiseCaption, toggleRiseCaption);
