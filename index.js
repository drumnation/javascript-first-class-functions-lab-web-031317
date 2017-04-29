function countdown(callback) {
  setTimeout(callback, 2000)
}

// This exercise demonstrates the use of callbacks for async
// operations. If we didn't use a callback, our program
// would continue right away instead of waiting for the
// callback to be called.

function createMultiplier(num) {
  return (times) => num * times
} // returns a function that multiplies a given value by the multiplierValue

function multiplier(num, times) {
  return num * times
}

// less clean? maybe arrow is new cleaner way that actually is to as close to as clean as using .bind with null ?
var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

// don't have to return an annonymous function
var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
