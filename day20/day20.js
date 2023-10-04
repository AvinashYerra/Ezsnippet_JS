//arrow vs normal function
test(); //test can be called before declaration  this is called hoisting 
function test(){
    console.log('normal');

};
 
//so normal funcn can be hoisted but anonymous cannot

//cannot be called before declaration
const aFunction = ()=>{
    console.log('A function');
};
aFunction();

//this in anony gets value from the surrounding