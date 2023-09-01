function playGame(){

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1)+1;


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2)+1;

var randomDiceNumber1 = "dice-" + randomNumber1 +".png";
var randomImageNumer1 = "./assests/images/"+ randomDiceNumber1;
var image1 = document.getElementsByClassName("img1")[0];
image1.setAttribute("src",randomImageNumer1);

var randomDiceNumber2 = "dice-" + randomNumber2 +".png";
var randomImageNumer2 = "./assests/images/"+ randomDiceNumber2;
var image1 = document.getElementsByClassName("img2")[0];
image1.setAttribute("src",randomImageNumer2);


if(randomDiceNumber1>randomDiceNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}

else if(randomDiceNumber1<randomDiceNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else {
    document.querySelector("h1").innerHTML = "🏳️Draw🏳️";
}

}