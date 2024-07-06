
let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

shuffle(cards);

// console.log(cards);
// console.log(cards[0]);
cards.forEach(card => console.log(card));

function shuffle(array){
    let currentIndex = array.length;

    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random()*array.length);
        currentIndex--;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}
