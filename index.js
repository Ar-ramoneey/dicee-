const playerOne = document.getElementsByClassName("player-1")[0];
const playerTwo = document.getElementsByClassName("player-2")[0];
const button = document.getElementsByTagName("button")[0];
let text = document.getElementsByTagName("h1")[0];
let firstImage = document.getElementsByTagName("img")[0];
let lastImage = document.getElementsByTagName("img")[1];

button.onclick = addBtn;
function addBtn(){
    let randomNumber1 = Math.random() * 6;
    let randomNumber = Math.floor(randomNumber1) + 1;
    let randomImage = "./images/dice" + randomNumber + ".png";
    firstImage.setAttribute("src", randomImage);
    let randomNumber2 = Math.floor( (Math.random() * 6) + 1)
    let randomImage2 = "./images/dice" + randomNumber2 + ".png";
    lastImage.setAttribute("src", randomImage2);
    if (randomNumber > randomNumber2) {
        text.innerHTML = "🚩Player 1 Wins!"
    } else if (randomNumber < randomNumber2) {
    text.innerHTML = "🚩Player 2 Wins!"
    } else if (randomNumber === randomNumber2) {
        text.innerHTML = "It's a draw!"
    } else {
        text.innerHTML = "well done";
};
}

