const numbers = [3, 4, 5, 6, 7];

// const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// function square (element){
//     return element * element;
// }

// const square =element => element * element;

// const result = numbers.map(function(element){
//    return element * element;
// })
// console.log(result);


const bigger = numbers.filter(x => x < 5);
console.log(bigger);