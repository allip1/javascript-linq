require('./ArrayExtend.js');

var rangeTest = Array.range(1, 5);

var repeatTest = Array.repeat(7, 10);

console.log(rangeTest);

console.log(repeatTest);

var testi = [2, 3, 4,5,6,4,3,5];

console.log(testi);

var take3 = testi.take(3);

var concatted = testi.concat(take3);

console.log(concatted);

console.log(take3);

var skip2 = testi.skip(2);

console.log(skip2);

var skipWhileTest = testi.skipWhile(x=> x < 4);

console.log(skipWhileTest);


var test2 = testi.where(x => x > 5);

console.log(test2);

var selectTest = test2.select(x => x + 1);

console.log(selectTest);


var first_1 = testi.firstOrDefault(x => x > 4);

console.log(first_1);


var first_1_null = testi.firstOrDefault(x => x > 44);

console.log(first_1_null);

console.log(testi.sum(x=> x + 3));

var test_dic = testi.toDictionary(x=> x+1);

console.log(test_dic);

var test22 = testi.where(x => x > 3)
                  .select(x => x + 6);

console.log(test22);
