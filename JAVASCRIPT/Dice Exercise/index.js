
var randomNumber1;
var randomNumber2;



function imageClicked() {
    //Dice 1
    var newImage1;
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    // Select the image
    const img1 = document.querySelector(".img1");
    newImage1 = "dice" + randomNumber1;
    img1.setAttribute("src", "./images/" + newImage1 + ".png");


    //Dice 2
    var newImage2;
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    // Select the image
    const img2 = document.querySelector(".img2");
    newImage2 = "dice" + randomNumber2;
    img2.setAttribute("src", "./images/" + newImage2 + ".png");

    //Choosing the winner;

    if (randomNumber1 > randomNumber2) {
        document.querySelector(".title-refresh").textContent = "🚩 Player 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector(".title-refresh").textContent = "Player 2 Wins 🚩";
    } else {
        document.querySelector(".title-refresh").textContent = "Draw";
    }


}
// Use setAttribute to add onclick
const img = document.querySelector(".container");
img.setAttribute("onclick", "imageClicked()");

