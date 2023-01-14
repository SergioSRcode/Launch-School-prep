let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

// iterating over the ARRAY of KEYS (not the object)
// -> comparing the array values with keys of original obj
// -> if match found, value of matching keys will be copied to the new Obj.
function copyObj(obj, arrKeys) {
  let secondObj = {};

  if (arrKeys) {
    arrKeys.forEach(function(key) {
    secondObj[key] = obj[key];
    });

    return secondObj;
  // func should allow to omit the "arr of keys"-argument upon invokation 
  // -> copy all existing keys from object.
  } else {
    return secondObj = Object.assign(secondObj, obj);
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

console.log(objToCopy);


