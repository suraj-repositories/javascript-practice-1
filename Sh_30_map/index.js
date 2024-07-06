// Map = Object that holds key-value pairs of any data type

const store = new Map([
    ["t-shirt",20],
    ["jeans",30],
    ["socks",10],
    ["underware",40],
]);

/*
let shoppingCart = 0;           // setting total selected items to zero
shoppingCart += store.get("t-shirt");           // adding two items in the shopping cart
shoppingCart += store.get("underware");

console.log("Total price = $"+shoppingCart);
*/

store.set("hat",35);            // we can set the element and key in the map object
store.delete("hat");            // delete the element from the map
console.log(store.has("hat"));      // to check any element is available in map object
console.log(store.size);            // to see the size of map


store.forEach((value,key) => console.log(`${key} $${value}`));      // using for each method to iterate the key value pairs


