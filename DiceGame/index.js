// IMAGE 1:-
// Image 1 random Number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// random image 1 source in the images folder using the image Number
var randomImage1Source = "images/dice" + randomNumber1 + ".png";

// image 1 selector using javascript
var image1 = document.querySelectorAll("img")[0];

// setting image 1 to the random image 
image1.setAttribute("src", randomImage1Source);


// // IMAGE 2:- 
// similarly first find a random number 
// then select the random image out of the six images
// then change the image source thereby changing the finaly outcome/source of the image in html
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2Source = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2Source);


//  Changing the h1 title according to the comparison of number 1 and number 2
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}