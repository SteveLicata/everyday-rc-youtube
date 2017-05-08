$(document).ready(function(){
  console.log("DOM loaded");

  // materialize collapsable nav
  $(".button-collapse").sideNav();

  // materialize slider
  $('.slider').slider({
    full_width: true,
    interval: 5000
  });

  var imageArray = [
    "images/Screen Shot 2017-03-13 at 4.43.23 PM.png",
    "images/Screen Shot 2017-03-13 at 4.43.43 PM.png",
    "images/Screen Shot 2017-03-13 at 4.44.11 PM.png",
    "images/Screen Shot 2017-03-13 at 4.44.32 PM.png",
    "images/Screen Shot 2017-03-13 at 4.45.57 PM.png",
    "images/Screen Shot 2017-03-13 at 4.46.38 PM.png",
    "images/Screen Shot 2017-03-13 at 4.46.56 PM.png",
    "images/Screen Shot 2017-03-13 at 4.47.20 PM.png",
    "images/Screen Shot 2017-03-13 at 4.47.47 PM.png",
    "images/Screen Shot 2017-03-13 at 4.49.04 PM.png",
    "images/Screen Shot 2017-03-13 at 4.49.32 PM.png",
    "images/Screen Shot 2017-03-13 at 4.49.48 PM.png",
    "images/Screen Shot 2017-03-13 at 4.50.14 PM.png",
    "images/Screen Shot 2017-03-13 at 4.50.34 PM.png",
    "images/Screen Shot 2017-03-13 at 4.50.54 PM.png",
    "images/Screen Shot 2017-03-13 at 4.51.22 PM.png",
    "images/Screen Shot 2017-03-13 at 4.51.46 PM.png",
    "images/Screen Shot 2017-03-13 at 4.52.41 PM.png",
    "images/Screen Shot 2017-03-13 at 4.53.04 PM.png",
    "images/Screen Shot 2017-03-13 at 4.53.28 PM.png",
    "images/Screen Shot 2017-03-13 at 4.54.22 PM.png",
    "images/Screen Shot 2017-03-13 at 4.54.54 PM.png",
    "images/Screen Shot 2017-03-13 at 4.55.19 PM.png",
    "images/Screen Shot 2017-03-13 at 4.55.37 PM.png",
    "images/Screen Shot 2017-03-13 at 4.55.52 PM.png",
    "images/Screen Shot 2017-03-13 at 4.56.16 PM.png",
    "images/Screen Shot 2017-03-13 at 4.58.35 PM.png",
    "images/Screen Shot 2017-03-13 at 4.59.06 PM.png",
    "images/Screen Shot 2017-03-13 at 4.59.24 PM.png",
    "images/Screen Shot 2017-03-13 at 4.59.41 PM.png",
    "images/Screen Shot 2017-03-13 at 4.59.56 PM.png",
    "images/Screen Shot 2017-03-13 at 5.00.20 PM.png",
    "images/Screen Shot 2017-03-13 at 5.00.40 PM.png",
    "images/Screen Shot 2017-03-13 at 5.00.51 PM.png",
    "images/Screen Shot 2017-03-13 at 5.01.13 PM.png",
    "images/Screen Shot 2017-03-13 at 5.01.57 PM.png",
    "images/Screen Shot 2017-03-13 at 5.02.25 PM.png",
    "images/Screen Shot 2017-03-13 at 5.02.56 PM.png"
  ];

  //grab DOM element for images at top of page
  var topImages = document.getElementById('topimg');

  //JS logic displays images in array in one second intervals
  if (imageArray !== null){
    var i = 0;
    setInterval(function(){
      if (i == imageArray.length) {
        i = 0;
      }
      topImages.src = imageArray[i];
      i++;
    }, 1000);
  }; //end if statement


  //modal pop up
  var modal = document.querySelector('#modal');
  function openModal() {
    modal.style.display = "block";
  };
  setTimeout(openModal, 10000);

  //modal close button
  var modalCloseBtn = document.querySelector('#closebtn');
  modalCloseBtn.addEventListener('click', function() {
    modal.style.display = "none";
  });

  //modal x button
  var modalXButton = document.querySelector('#close-btn');
  modalXButton.addEventListener('click', function() {
    modal.style.display = "none";
  });


});//end document ready
