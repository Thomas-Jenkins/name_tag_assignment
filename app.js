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


submit.addEventListener('click', () => {
    const value = userNameInput.value;
    userName.textContent = value;
});
submit.addEventListener('click', () =>{
    const valueTwo = userPronounInput.value;
    userPronouns.textContent = valueTwo;
});
