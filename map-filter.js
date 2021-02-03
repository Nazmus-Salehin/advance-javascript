const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for(let i=0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
//console.log(output);


// function square(element) {
//     return element * element;
// }
// //or
// const square = element => element * element;
// //or
// const square = x => x * x;


// const result = numbers.map(function (element) {
//     return element * element;
// })
// //or

// const result = numbers.map(x => x * x);

// console.log(result);

////Filter
// const bigger = numbers.filter(x => x < 5);
// console.log(bigger);

/////Find (Pothom-a jeta paabe oita output dibe)
const isThere = numbers.find(x => x > 5);
console.log(isThere);