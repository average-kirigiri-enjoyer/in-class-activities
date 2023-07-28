// selects the div which displays the pictures as they're being cycled
var carousel = document.querySelector(".carouselbox");
// selects the next & previous image buttons
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/id/10/300/200",
  "https://picsum.photos/id/20/300/201",
  "https://picsum.photos/id/30/300/202",
  "https://picsum.photos/id/47/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// when you click the image directly, it opens the image at the original URL
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// when you click the next button, the image switches to the next one in the array
next.addEventListener("click", function(event) {
  // prevents the click event from bubbling up to the image display
  event.stopPropagation();

  navigate(1);
});

// when you click the previous button, the image switches to the pervious one in the array
prev.addEventListener("click", function(event) {
    // when you clicked the previous button it would also perform the click event for the carousel
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
