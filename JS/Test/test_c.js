
// Ten of the same incremtented function
let test1 = window.app;
test1.increment();
test1.increment();
test1.increment();
test1.increment();
test1.increment();
test1.increment();
test1.increment();
test1.increment();
test1.increment();
test1.increment();

console.log(`The first increment function = ${test1.getcounter}`);



let test2 = window.app.createIncrement();
let test3 = window.app.createIncrement();


test2.setIncrement();
test2.setIncrement();
test2.setIncrement();
test2.setIncrement();
test2.setIncrement();

console.log(`The first set of the set increment function is = ${test2.count}`);


test3.setIncrement();
test3.setIncrement();
test3.setIncrement();
test3.setIncrement();
test3.setIncrement();
test3.setIncrement();
test3.setIncrement();
test3.setIncrement();
test3.setIncrement();
test3.setIncrement();
test3.setIncrement();
test3.setIncrement();
test3.setIncrement();
test3.setIncrement();
test3.setIncrement();

console.log(`The second set of the set increment function is = ${test3.count}`);

console.log(`The Grand Total between all the different functions of incrementing is ${test2.count + test3.count + test1.getcounter}`);