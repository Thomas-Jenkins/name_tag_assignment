// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const userNameInput = document.getElementById('text');
const submit = document.getElementById('submit');
const userName = document.getElementById('name');

submit.addEventListener('click', () => {
    const value = userNameInput.value;
    userName.textContent = value;
    console.log(value);
});