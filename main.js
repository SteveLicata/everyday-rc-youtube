$(document).ready(function(){
  console.log("DOM loaded");

  // materialize collapsable nav
  $(".button-collapse").sideNav();

  // materialize slider
  $('.slider').slider({
    full_width: true,
    interval: 3000
  });


  //array of images for top of page
  // var imageArray = [
  //   "images/928864_789215804530760_650768113_n.jpg",
  //   "images/10268877_885030344898322_1289899834_n.jpg",
  //   "images/10598346_212420859095957_776904866_n.jpg",
  //   "images/11349188_1652634454976010_1243277426_n.jpg",
  //   "images/11419079_1483078935340592_824063844_n.jpg",
  //   "images/11856665_1633057870306615_455846559_n.jpg",
  //   "images/12080690_1001872646541739_1598367128_n.jpg",
  //   "images/12139639_1746942438861226_1516396050_n.jpg",
  //   "images/12139872_523300554497345_1952360623_n.jpg",
  //   "images/12142012_1509686399354712_318063818_n.jpg",
  //   "images/12142515_1516534831998569_1236649327_n.jpg",
  //   "images/12328511_1763538360543744_103221783_n.jpg",
  //   "images/12338962_876537109133747_2104930899_n.jpg",
  //   "images/12353819_1049081138476461_1939862155_n.jpg",
  //   "images/12393641_1530603427256736_848444779_n.jpg",
  //
  //   "images/12751207_667340596737955_562020924_n.jpg",
  //
  //   "images/13129581_361086274015652_2065562489_n.jpg",
  //   "images/13150801_1712536538964562_505493500_n.jpg",
  //   "images/13166765_490948077766188_1527362782_n.jpg",
  //   "images/13183383_1776149882618782_2120293128_n.jpg",
  //   "images/13256682_921545884638351_1209995283_n.jpg",
  //   "images/13712154_162016740874247_1940715078_n.jpg",
  //   "images/13731188_329598920762630_396417538_n.jpg",
  //   "images/14156658_1057462607685332_152500883_n.jpg",
  //   "images/14448260_202232026872156_7983368571377942528_n.jpg",
  //   "images/14566625_262380837492648_8488039288926109696_n.jpg",
  //   "images/14607075_204397163348099_1582276792343855104_n.jpg",
  //
  //   "images/14730756_140794086384537_7160361371840806912_n(1).jpg",
  //
  //   "images/15034820_1031835426942699_7027407326298505216_n.jpg",
  //   "images/15259018_1983711841856169_3532160982308618240_n.jpg",
  //   "images/15802139_1815319675392545_4732831468001165312_n.jpg",
  //   "images/16110514_221710758236792_701904944449454080_n.jpg",
  //   "images/16123378_583415005176945_3581504401283481600_n.jpg",
  //   "images/16906262_1743558289288380_1002423346589073408_n.jpg"
  // ];

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

  setTimeout(openModal, 5000);

  //modal close button
  var modalCloseBtn = document.querySelector('#closebtn');

  modalCloseBtn.addEventListener('click', function() {
    modal.style.display = "none";
  });


});//end document ready
