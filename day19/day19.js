const obj = {
  name: 'Avinash',
  gender:'Male',
  yearofBirth:1997,
  calculate :function(){
    return 2023-this.yearofBirth;
  } ,
};

console.log(obj.name);
console.log(obj.calculate()); //this is dot notation as these are fixed but when you want to access a variable then we have to use bracket notation

let key="gender";
console.log(obj[key]);

//similarly you can access functions

let key2='calculate';
console.log(obj[key2]());