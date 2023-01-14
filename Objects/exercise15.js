function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');



//variables
/*

bar
arg1
arg2
foo
qux
foo
arg1
arg2
qux (again returned value)

result
bar (again)

=> success

// object prop names

abc
def
ghi
jkl
mno
pqr

0, 1, 2, 3

3[0], 3[1], 3[2], // false?

// primitive values

"hello"
1, 2, 3, 4, 5, 6
null
NaN
Victor
Antonina
abc
def
ghi
jkl
mno
pqr

// forgot about those
0
1
2
3


//objects

function bar
obj qux
array 4, 5, 6
array 1, 2, 3 [4, 5, 6]






*/