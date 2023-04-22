let msg= prompt('what is your name?')
let msg1 = "welcome to java script , "
let output = msg1+msg
//alert(msg)
document.write(msg)
document.getElementById("message").innerHTML=msg
console.log(typeof(msg));
console.log(msg)
console.log(output)
let val = "test"
let num = 0
function test1(){
    add();
    console.log(val+num);
}
function add(){
    num++;
}
add();
add();
add();
console.log(val+num);
test1();
console.log(val+num);
test1();
console.log(val+num);