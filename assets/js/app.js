function changeNav(){
  document.getElementById("sidemenu").classList.toggle("open");
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$('#git').mouseover(function(){
  $('#p_git').css('display', 'block');
});

$('#git').mouseout(function(){
  $('#p_git').css('display', 'none');
});



$('#github').mouseover(function(){
  $('#p_github').css('display', 'block');
});

$('#github').mouseout(function(){
  $('#p_github').css('display', 'none');
});



$('#bootstrap').mouseover(function(){
  $('#p_bootstrap').css('display', 'block');
});

$('#bootstrap').mouseout(function(){
  $('#p_bootstrap').css('display', 'none');
});



$('#javascript').mouseover(function(){
  $('#p_javascript').css('display', 'block');
});

$('#javascript').mouseout(function(){
  $('#p_javascript').css('display', 'none');
});