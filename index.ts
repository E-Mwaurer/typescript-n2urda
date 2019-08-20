// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function absoluteValuesSumMinimization(a: number[]): number {
  const isEven = a.length % 2 === 0;
  let medianIndex: number;
  if(isEven === true){
     medianIndex = (a.length /2) -1;
     return a[medianIndex];
  } else {
    medianIndex = Math.floor((a.length/2));
    return a[medianIndex];
  }
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
