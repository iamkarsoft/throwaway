const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const resetButton = document.getElementById('resetButton')

// changing the color of the heading
myButton.addEventListener('click',()=>{
  myHeading.style.color = myTextInput.value;
});

//event listener for reset button
resetButton.addEventListener('click',()=>{
  myHeading.style.color = 'black';
});