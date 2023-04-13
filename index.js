// Arrays are a basic data structure.
// Data structures are structures that hold data
// Think of an array as a train, where ever car holds something

const arr = ["apples", "oranges", 1, 2];
console.log(arr);
// To print out the print element we start at 0
console.log(arr[0]);

// To print out the last one we can use .length - 1
console.log(arr[arr.length - 1]);

// .length prints out the length of the array
// but when using the index we start at 0 not 1
console.log(arr.length);
console.log(arr[4]);
console.log(arr[arr.length]);

// To start an empty array
const emptyArr = [];
console.log(emptyArr);

// To add an element to the array
emptyArr.push("Not empty");
console.log(emptyArr);

// This will always add an element to the end of the array
emptyArr.push("Another Element");
console.log(emptyArr);

// pop removes the element from then end of the array
emptyArr.pop();
console.log(emptyArr);

// pop returns the value of the last element in the array
const element = emptyArr.pop();
console.log(element);
console.log(emptyArr);

const shiftyArray = ["milk", "water", "apples juice"];

// unshift adds an element to the front
shiftyArray.unshift("orange juice")
console.log(shiftyArray)

// shift removes the first element from the array
const liquid = shiftyArray.shift()
console.log(liquid)
console.log(shiftyArray)


// slice returns a slice of the array but doesn't change the array
// Start at the 0 element and the second number is the total amount of elements
const tempArr = arr.slice(0, 2);
console.log(tempArr)
console.log(arr)


// Splice does change the array
const newArr = arr.splice(1, 2);
console.log(newArr);
console.log(arr);


//Copying over array can be tricky
const animalArray = ["dog", "cat", "rabbit", "horse"];
const newAnimalArray = animalArray;
newAnimalArray.push("Lizard");
console.log(animalArray);

// This is why we use the spread operator to make a deep copy
const spreadAnimalArray = [...animalArray];
spreadAnimalArray.pop();
console.log(animalArray);
console.log(spreadAnimalArray);

// We can use something similar in parameters
const method = (animal, ...rest) => {
  console.log(animal);
  console.log(rest);
};

method("animal", "food", "drink");


// for loop
for (let i = 0; i < animalArray.length; i++) {
  const animal = animalArray[i];
  console.log(animal);
}

let counter = 0;


// while loop
while (counter < 5) {
  console.log(counter);
  counter++;
}
