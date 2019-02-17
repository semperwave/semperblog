$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

jQuery(document).ready(function() {
   $('header').mousemove(function(e) {
     var xoff = (e.pageX - this.offsetLeft-$(this).width()/2);
     var yoff = (e.pageY - this.offsetTop-$(this).height()/2);
     $('h1.title').css('text-shadow', +yoff/8+'px '+xoff/50+'px rgba(246,81,247,1), '+yoff/20+'px '+xoff/20+'px rgba(246,220,81,1), '+xoff/70+'px '+yoff/18+'px rgba(46,96,250,1)');
   });
});