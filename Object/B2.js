// B2: 

const isEmpty = (obj) => {
    return (obj.constructor === Object && Object.keys(obj).length === 0) ? true : false
}

let object = {

}
console.log(isEmpty(object));