const dogs = [
 { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
 { weight: 8, curFood: 200, owners: ['Matilda'] },
 { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
 { weight: 32, curFood: 340, owners: ['Michael'] }
];

//1
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 *28)));

//2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Con chó của Sarah cũng đang ăn ${dogSarah.curFood > dogSarah.recFood ? 'nhiều' : 'ít'}`);

//3
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dogSarah.recFood).flatMap(dog => dog.owners).flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood > dogSarah.recFood).flatMap(dog => dog.owners).flat();
console.log(ownersEatTooLittle);

//4 
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

//5
console.log(dogs.some(dog => dog.curFood === dog.recFood));

//6
const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood > dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));
//7
console.log(dogs.filter(checkEatingOkay));

//8
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

