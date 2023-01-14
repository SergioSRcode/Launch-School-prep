false || (true && false); // false or false = false

true || (1 + 2); // true (only true is checked)

(1 + 2) || true; // 3 (ony 1+2 is checked)

true && (1 + 2); // 3 (3 is the last evaluation, therefore the return value)

false && (1 + 2); // false (first value is false)

(1 + 2) && true; // true (both values return "true")

(32 * 4) >= 129; // false (32 * 4 === 128)

false !== !true; // false (false !== false = false)

true === 4; // false (4 === 4)

false === (847 === '847'); // true (847 !== "847")

false === (847 == '847'); // false (847 == "847")

(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true
/*
100 / 5 = 20;
328 / 4 = 82;
=> 
(!true || (!20 === 20) || (82 === 82)) || false;

!20 === 20 => false
82 === 82 => true
=>
(!true || false || true) || false;

!true || false => false
=>
(false || true) || false;

true || false => true
*/