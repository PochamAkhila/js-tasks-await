function greeting(){
    let msg = "hello";
    function inner(){
        console.log(msg);
    }
    return inner;
}
let output = greeting();
output(); //hello

function rest(...arg){
    var s = 0;
    for(var i of arg){
        s += i;
    }
    console.log(s)
}
rest(1,2,3,4)