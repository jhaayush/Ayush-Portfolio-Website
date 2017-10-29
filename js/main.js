$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // Time taken to scroll is 800ms
      $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
    
//Make icon-bars red on hover
$('.navbar-toggle').mouseenter(function(){
      $('.icon-bar').css('background-color','#e83f29');
  })
  .mouseleave(function(){
      $('.icon-bar').css('background-color','#494C4E');
  });  
});


// When the user scrolls down 20px from the top of the document, show the 'Top' button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top-link").style.display = "block";
    } else {
        document.getElementById("top-link").style.display = "none";
    }
}

// On clicking the fixed 'Top' button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}