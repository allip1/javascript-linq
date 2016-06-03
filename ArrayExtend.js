var identity = function(x) { return x; }
var assert = function(expression) {
  if(!expression) {
    throw "Assert violation"
  }
}

Array.prototype.where = function(func) {
  var newArray = [];
  for(var i = 0; i < this.length; i++) {
    var elememnt = this[i];
    if(func(elememnt)) {
      newArray.push(elememnt);
    }
  }
  return newArray;
};

Array.prototype.select = function(func) {
  return this.map(func);
}

Array.prototype.firstOrDefault = function(func) {
  func   = func   || identity;
  for(var i = 0; i < this.length; i++) {
    var element = this[i];
    if(func(i)) {
      return element;
    }
  }
  return null;
}

Array.prototype.first = function(func) {
  func   = func   || identity;
  var result = this.firstOrDefault(func);
  if(result == null) {
    throw "No Element";
  }
}

Array.prototype.sum = function (func) {
  var sum = 0.0;
  for(var i = 0; i < this.length; i++) {
    sum += func(this[i]);
  }

  return sum;
};

Array.prototype.last = function (func) {
  func   = func   || identity;
  for(var i = 0; this.length - 1; i--) {
    var element = this[i];
    if(func(i)) {
      return element;
    }
  }
  if(result == null) {
    throw "No element";
  }

}

Array.prototype.toDictionary = function(keySelector, valueSelector) {
  var dic = {};

  keySelector   = keySelector   || identity;
  valueSelector = valueSelector || identity;

  for(var i = 0; i < this.length; i++) {

    var origValue = this[i];

    var value = valueSelector(origValue);
    var key = keySelector(value);

    dic[key] = value;
  }

  return dic;
}

Array.prototype.take = function(number) {
  var newArray = [];
  var index = 0;
  while(index < this.length &&  index < number) {
    newArray.push(this[index++]);
  }
  return newArray;
}

Array.prototype.skip = function(number) {
  var newArray = [];
  var index = number;
  while(index < this.length) {
    newArray.push(this[index++]);
  }
  return newArray;
}

Array.prototype.skipWhile = function(func) {
  var newArray = [];
  var index = 0;
  while(index < this.length) {
    var testElement = this[index++];
    if(!func(testElement)) {
      break;
    }
  }
  while(index < this.length) {
    newArray.push(this[index++]);
  }
   return newArray;
}

Array.prototype.takeWhile = function(func) {
  var newArray = [];
  var index = 0;
  while(index < this.length) {
    var testElement = this[index++];
    if(!func(testElement)) {
      break;
    }
    newArray.push(testElement);
  }
  return newArray;
}

Array.prototype.concat = function(anotherArray) {
  var newArray = []
  var index = 0;
  while(index < this.length) {
    newArray.push(this[index++]);
  }
  index = 0;
  while(index < anotherArray.length) {
    newArray.push(anotherArray[index++]);
  }
  return newArray;
}

Array.repeat = function(obj, times) {
  var newArray = [];
  var i = 0;
  while(i++ < times){
    newArray.push(obj);
  }
  return newArray;
}

Array.range = function(start, count) {
  var newArray = [];
  var i = 0;
  while(i < count) {
    newArray.push(start + i );
    i++;
  }
  return newArray;
}
