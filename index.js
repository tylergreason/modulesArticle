import { createEle, newPara } from "./modules/generalFunctions.js"

const myDiv = createEle('div', 'myDiv');
myDiv.style.width = '200px'; 
myDiv.style.height = '20px'; 
myDiv.style.backgroundColor = 'red'; 
myDiv.innerText = "this div has been styled!"
document.body.appendChild(myDiv);

const newP = newPara('hey, this is text!', 'exampleClass');
document.body.appendChild(newP);

const newP2 = newPara('hi Medium!');
document.body.appendChild(newP2);

// import * as GeneralModule from "./modules/generalFunctions.js"

// const myDiv = GeneralModule.createEle('div', 'myDiv');
// myDiv.style.width = '200px'; 
// myDiv.style.height = '20px'; 
// myDiv.style.backgroundColor = 'red'; 
// myDiv.innerText = "this div has been styled!"
// document.body.appendChild(myDiv);

// const newP = GeneralModule.newPara('hey, this is text!', 'exampleClass');
// document.body.appendChild(newP);

// const newP2 = GeneralModule.newPara('hi Medium!');
// document.body.appendChild(newP2);


// import { createEle as createEleRenamed, newPara as newParaAlsoRenamed} from "./modules/generalFunctions.js"

// const myDiv = createEleRenamed('div', 'myDiv');
// myDiv.style.width = '200px'; 
// myDiv.style.height = '20px'; 
// myDiv.style.backgroundColor = 'red'; 
// myDiv.innerText = "this div has been styled!"
// document.body.appendChild(myDiv);

// const newP = newParaAlsoRenamed('hey, this is text!', 'exampleClass');
// document.body.appendChild(newP);

// const newP2 = newParaAlsoRenamed('hi Medium!');
// document.body.appendChild(newP2);
