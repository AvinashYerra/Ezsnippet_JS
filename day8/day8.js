//let var const

let firstName = "avi";
firstName = "god";  //reassignable but let is local scope within the block-scope
console.log(firstName);


var age = 31;
age = 30;  //this also reassignable but var is global scope can be accessible outside the block
console.log(age);


const pin = 1234;
pin = 12; //reassignment is not possible and this throws an error 
console.log(pin);


//The final difference is let,var can be declared and can stay unassigned but const should be assigned with a value


