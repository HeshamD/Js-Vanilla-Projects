//array of colors

const colorsArray = ["green","red","rgba(133,122,200)","#f15025"];

//targeting the btn

const btn = document.querySelector("#btn");

const color = document.querySelector(".color");


// click events

btn.addEventListener('click', function(){

    //get random number between 0 and 3 >> size of my array is 4
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colorsArray[randomNumber];
    color.textContent = colorsArray[randomNumber];

}); // that will listen to click event // for each time i click on that btn variable, the background change it's color

function getRandomNumber()
{
    return Math.floor(Math.random()*colorsArray.length); 
}