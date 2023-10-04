'use strict';

function test(){
    console.log(this);
}

test();

//in strict mode this is undefined it can be logged outside ....in strict mode we are not allowed to do some silly mistakes
//undeclared variable cannot be used

