// Array of image URLs
const images = [
  "https://www.wallpaperup.com/uploads/wallpapers/2014/04/11/346774/2c98e6d98d02c008e6d5c2f9d705db57.jpg", // Image 1
  "https://wallpapercave.com/wp/URJccpL.jpg",  // Image 2 (Replace with your own)
  "https://wallpapercave.com/wp/yUSimAc.jpg",  // Image 3 (Replace with your own)
  // Add as many images as you like
];

// Function to change the background image randomly
function changeBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const backgroundImage = images[randomIndex];
  document.getElementById("parallax-bg").style.backgroundImage = `url(${backgroundImage})`;
}

// Call the function when the page loads
window.onload = changeBackgroundImage;
