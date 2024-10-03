
// ceil() Round up to nearest integer

log(Math.ceil(5.9)) // 6
log(Math.ceil(4.9)) // 5
log(Math.ceil(-3.9)) // -3

// floor() Round Down to nearest integer

log(Math.floor(5.9)); // 5

log(Math.floor(4.9)); // 4

log(Math.floor(-3.9)); // -4


//round() Round to nearest integer

log(Math.round(5.4)); //5
log(Math.round(5.6)); // 6
log(Math.round(-3.3)); //-3

//trunc() Removes decimals

log(Math.trunc(3.24)); // 3
log(Math.trunc(5.2)); // 5
log(Math.trunc(-7.3)); // -7

//max(x, y, x...n) Return Highest value
log(Math.max(3.24, 3)) // 3.24
log(Math.max(5, 10, 0)) // 10
log(Math.max(45, 3, 423)) // 423

//min(x, y, x....n) Return lowewst value

log(Math.min(3.24, 3)); // 3
log(Math.min(5, 10, 0)) // 0
log(Math.min(45, 3, 423)) // 3


//PI() Returns PI value
log(Math.PI); // 3.141592653589793


// sqrt() Returns square root of number
// NaN if negative value

log(Math.sqrt(0)) // 0
log(Math.sqrt(1)) // 1
log(Math.sqrt(9)) // 3
log(Math.sqrt(25)) // 5

//cbrt() Returns cucbic root of number

log.(Math.cbrt(125)) // 5
log.(Math.cbrt(27)) // 5
log.(Math.cbrt(-125)) // -5
log.(Math.cbrt(8)) // 2 

// pow(x, y) Returns value of x to the power of y (x*)

log(Math.pow(0, 1));  // 0 (0*0)
log(Math.pow(1,1)); // 1  (1*1)
log(Math.pow(1,10)); // 1  (1*1*1.. 10 times)
log(Math.pow(2,4)); // 16  (2*2*2*2)


//random() Used with Math.floor() to return random integers most useful

let randomNumber = Math.random() * 10;
//Generate random numbers 0 to 9 (wih decimal)

//To integer
let intRandomNumber = Math.floor(randomNumber);
log(intRandomNumber); // **random numbers


//abs() Returns absolute values 
// NaN if value is not a number
// 0 if value is null

log(math.abs(7.25)); // 7.25
log(math.abs(-7.25)); // 7.25
log(Math.abs(null)); // 0
log(Math.abs("Hello")); // NaN
log(Math.abs(20 - 50)); // 30