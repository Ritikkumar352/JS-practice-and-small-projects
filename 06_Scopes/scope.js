if(true){
    // block scope
    let a=10
    const b=20     
    var c=30
}

console.log(c)  // c is var -- should not be acc outside this function if used c=10 or var c=10 both should be avoided

c=100  // globla scope

console.log(c)


one()  // no error
function one(){
    const username ="rone"
    console.log("function one");
}

// fun()-- error
const fun=function(){
    console.log("function // expression");
}
fun()
