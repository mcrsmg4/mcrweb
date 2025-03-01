document.addEventListener('DOMContentLoaded', function() {
  // List of image URLs for the random background
  const images = [
    'https://www.pexels.com/photo/river-between-green-leafed-tree-1766838/',
    'https://wallpapercave.com/wp/QDnTRHS.jpg',
    'https://cdn.discordapp.com/attachments/1238523854373261444/1327588161303609364/IMG_0181.png'
  ];

  // Get a random image from the list
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // Set the random image as the background of the #parallax-bg element
  document.getElementById('parallax-bg').style.backgroundImage = `url(${randomImage})`;

  // Parallax Effect on Mouse Movement
  document.addEventListener("mousemove", function(event) {
    let x = (window.innerWidth - event.pageX) / 100;
    let y = (window.innerHeight - event.pageY) / 100;
    document.getElementById("parallax-bg").style.transform = `translate(${x}px, ${y}px)`;
  });
});
