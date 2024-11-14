// Function that will increase the size of all the text on the website
function increaseSize() {
    document.body.style.fontSize = 'larger';
}

//Function that will change the site's background colour to dimgrey and the text colour to white
function changeColours() {
    document.body.style.color='white';
    document.body.style.backgroundColor='dimgrey';
}

//Function that adjusts each respective image's empty Alt Text by selecting through their ID
function altText() {
    document.getElementById("image1").innerHTML = "Simba, brown tabby cat and Cajoo, white/brown tabby cat sitting on consecutive steps on a wooden staircase facing the camera.";
    document.getElementById("image2").innerHTML = "Cajoo, brown/white tabby cat sitting on a bamboo chair by a window facing the backyard and Simba, brown tabby cat sitting on the windowsill, both looking outside at the backyard.";
    document.getElementById("image3").innerHTML = "Cajoo, brown/white tabby cat laying sprawled out on a bed on his back with all paws stretched out.";
}
