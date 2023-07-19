// Returns a call back function

function receivesAFunction(cb){
    return cb();
}

function sayHello(){}

function returnsANamedFunction(){
    return sayHello;
}

function returnsAnAnonymousFunction(){
    return function(){}
}