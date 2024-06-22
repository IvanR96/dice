let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage = 'dice' + randomNumber1 + '.png';

let randomImage2 = 'dice' + randomNumber2 + '.png';

document.querySelector('.img1').setAttribute('src', randomImage);

document.querySelector('.img2').setAttribute('src', randomImage2);

if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "Player 1 Wins!!!";
}

if (randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML = "Player 2 Wins!!!";
    
}

if (randomNumber1 === randomNumber2){
    document.querySelector('h1').innerHTML = "Draw!!!"
}