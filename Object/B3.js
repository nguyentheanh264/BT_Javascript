//  B3: 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Lena: 120
};

let values = Object.values(salaries)
let sum;
if (values.length !== 0) {
    sum = values.reduce((acc,int) => {
        return acc += int
    },0)
} else {
    sum = 0;
}
console.log(sum);


// function sumSalary(obj) {
//     let values = Object.values(obj)
//     let sum;
//     if (Object.keys(obj).length !== 0) {
//         sum = values.reduce((acc,int) => {
//             return acc += int
//         },0)
//     } else {
//         sum = 0;
//     }
//     console.log(sum)   
// }
// sumSalary(salaries);