// B6:
let obj = {
    c,
    read(a,b) {
        return c = {
            value1: a,
            value2: b
        } 
    },
    sum() {
        return this.c.value1 + this.c.value2
    },
    mul() {
        return this.c.value1 * this.c.value2
    }
}
obj.read(5,8)
console.log(obj.c.value1);
console.log(obj.sum());
console.log(obj.mul());