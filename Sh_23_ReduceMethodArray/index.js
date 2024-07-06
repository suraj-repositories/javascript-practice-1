// array.reduce() = reduces an array to a single value

let prices = [5, 10, 15, 20, 25];

let total = prices.reduce(checkOur);

console.log(`The total is : $${total}`);

function checkOur(total, element){
    return total + element;
}