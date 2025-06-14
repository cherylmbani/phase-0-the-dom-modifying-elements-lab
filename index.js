// Write your code here!
document.querySelector('main#main').remove();
// creating h1 element
const newHeader = document.createElement("h1");

//setting an attribute
newHeader.id = "victory";

// adding content inside an element
newHeader.textContent = "Cheryl is the champion";

// appending a child element
document.body.appendChild(newHeader);
