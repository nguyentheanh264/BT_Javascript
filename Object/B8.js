
// B8:

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        let input = prompt("Hãy nhập số: ",this.value)
        if(!isNaN(Number(input))) {
            this.value += Number(input)
            this.read();
            console.log(this.value);
        } else {
            return this.value
        }
    }
}
let a = new Accumulator(0)
a.read()


