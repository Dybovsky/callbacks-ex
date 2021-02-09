/**
 * Create a function that accepts two numbers,
 * and calls the callback with the sum of those numbers
 * @param {number} x
 * @param {number} y
 * @param {Function} callback
 */
function sumAsync(x, y, callback) {
  callback(y + x); // Your code here
}

export default sumAsync;
