// B1

const styles = ["Jazz", "Blues"]
styles.push("Rock-n-Roll");
if (styles.length % 2 !== 0 && styles.length > 1 ) {
    styles.splice((styles.length / 2) -0.5,1,"Classics")
    console.log(styles);
}
// console.log(styles.shift())

styles.splice(styles.length - 1,0,"Rap","Reggage")
console.log(styles);




// B3: 
function filterRange(arr,a,b) {
    let arr3 = arr.filter((e) => {
        return e > a && e < b
    })
    console.log(arr3);
}
let arrB3 = [2,5,6,7,8,11,22,89]
filterRange(arrB3,4,10)




// B4:
function filterRangeInPlace(arr,a,b) {
    let newArr = arr.filter((e) => {
        return e >= a && e <= b
        
    })
    
    arrb4 = newArr

    console.log(newArr);
}
let arrb4 = [1,2,3,4,5,6,7,8,9]
filterRangeInPlace(arrb4, 2, 6)
console.log(arrb4);


// B5:
function copySorted(arr) {
    let sorted = [...arr].sort() // Sử dụng Rest Parameters trong ES6
    console.log(sorted);
}

let arrB5 = ['JS','ReactJS','NodeJS']
copySorted(arrB5)
console.log(arrB5);
