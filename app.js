// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const userNameInput = document.getElementById('userName');
const userPronounInput = document.getElementById('userPronoun');
const submit = document.getElementById('submit');
const userName = document.getElementById('name');
const userPronouns = document.getElementById('pronouns');

const buttonOne = document.getElementById('red');
const buttonTwo = document.getElementById('blue');
const buttonThree = document.getElementById('green');
const buttonFour = document.getElementById('yellow');
const tagColorOne = document.getElementById('greeting');
const tagColorTwo = document.getElementById('bottom');

submit.addEventListener('click', () => {
    const value = userNameInput.value;
    userName.textContent = value;
    const valueTwo = userPronounInput.value;
    userPronouns.textContent = valueTwo;
    if (buttonOne.checked){
        tagColorOne.style.backgroundColor = buttonOne.value;
        tagColorTwo.style.backgroundColor = buttonOne.value;
    } else if (buttonTwo.checked){
        tagColorOne.style.backgroundColor = buttonTwo.value;
        tagColorTwo.style.backgroundColor = buttonTwo.value;
    } else if (buttonThree.checked){
        tagColorOne.style.backgroundColor = buttonThree.value;
        tagColorTwo.style.backgroundColor = buttonThree.value;
    } else if (buttonFour.checked){
        tagColorOne.style.backgroundColor = buttonFour.value;
        tagColorTwo.style.backgroundColor = buttonFour.value;
    }
});
// submit.addEventListener('click', () =>{
//     const valueTwo = userPronounInput.value;
//     userPronouns.textContent = valueTwo;
// });

// function changeColorRed() {
//     const bgColor = tagColorOne;
//     bgColor.style.backgroundColor = '#FF0000';
// }

// function changeColorRedTwo() {
//     const bgColor = tagColorTwo;
//     bgColor.style.backgroundColor = '#FF0000';
// }
  
// function changeColorBlue() {
//     const bgColor = tagColorOne;
//     bgColor.style.backgroundColor = '#0000FF';
// }

// function changeColorBlueTwo() {
//     const bgColor = tagColorTwo;
//     bgColor.style.backgroundColor = '#0000FF';
// }

// function changeColorGreen() {
//     const bgColor = tagColorOne;
//     bgColor.style.backgroundColor = '#008000';
// }

// function changeColorGreenTwo() {
//     const bgColor = tagColorTwo;
//     bgColor.style.backgroundColor = '#008000';
// }

// function changeColorYellow() {
//     const bgColor = tagColorOne;
//     bgColor.style.backgroundColor = '#FFFF00';
// }
// function changeColorYellowTwo() {
//     const bgColor = tagColorTwo;
//     bgColor.style.backgroundColor = '#FFFF00';
// }


// submit.addEventListener('click', () =>{
//     if (buttonOne.checked) {
//         changeColorRed();
//         changeColorRedTwo();
//     } else if (buttonTwo.checked) {
//         changeColorBlue();
//         changeColorBlueTwo();
//     } else if (buttonThree.checked) {
//         changeColorGreen();
//         changeColorGreenTwo();
//     } else if (buttonFour.checked) {
//         changeColorYellow();
//         changeColorYellowTwo();
//     }
// });