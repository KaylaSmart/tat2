const pics = [
    "/images/IMG_2737.jpg", "/images/IMG_2630.jpg", "/images/IMG_2713.jpg", "/images/IMG_2751.jpg",

]

const showImage;

// Count will keep track of the index of the currently displaying picture.
const count = 0;


function displayImage() {
    $("#image-holder").html("<img src=" + pics[count] + " width='100%'>");
  }
  
  function nextImage() {
    //  TODO: Increment the count by 1.
    count++;
  

  
    // TODO: Use a setTimeout to run displayImage after 1 second.
    setTimeout(displayImage, 1000);
  
    // TODO: If the count is the same as the length of the image array, reset the count to 0.
    if (count === pics.length) {
      count = 0;
    }
  }



function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 3000);

}


displayImage()