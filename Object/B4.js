// B4:
let menu = {
    width: 200,
    height: 300,
    title: "My menu CafeDev"
};

function multiplyNumberic(obj) {
    for(key in obj) {
        if (!isNaN(obj[key])) {
           obj[key] = obj[key] * 2
        }
    }

    // let value = Object.values(obj);
    // let key = Object.keys(obj);
    // let a = value.map((e) => {
    //     return typeof e === 'number' ? e * 2 : e; 
    // })
    // key.forEach((el, index) => {
    //     obj[el] = a[index]
    // });
    
}
multiplyNumberic(menu)
console.log(menu);