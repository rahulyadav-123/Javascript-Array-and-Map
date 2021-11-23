var count = 10;
let array = [];

for (i = 0; i < count; i++) {
    array[i] = Math.floor(Math.random() * 899) + 100;
}

console.log("Random numbers are: " +array);

let sortArray = array.sort();
console.log("Sorted number : " +sortArray);

console.log("Second Largest number: " + array[array.length-2]);
console.log("Second Smallest number: " + array[1]);