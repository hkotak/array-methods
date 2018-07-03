// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

var nameArray = [];
nameArray.push("Harsh", "Kotak"); //.push method will push values into the array

genericNumberArray.push(6,7,8,9,10);

var popResult = colors.pop(); //.pop method will remove the last value from the array

scrambledWords.reverse(); //.reverse method will reverse the order of the elements in the array
phoneNumber.reverse();

var nextOrder = orderQueue.shift(); //.shift will remove the first value of the array 

mixedNums.sort(); //.sort will sort the number array by the value of the first integer, can produce errors as 10 gets sorted before 2 since the first integer is still 1.  

mixedWords.sort();

var notFruit = fruitCollection.splice(1,3); //.splice can remove elements ("index position","number of elements to remove")

var notGems = gemBox.splice(5,2); //.splice second example.  
console.log("First Splice: " + gemBox);
var notGems2 = gemBox.splice(6,5);

var addNums = upToTen.splice(2,0, 3,4,5,6,7,8); //.splice can also add elements.  ("index postion where elements should be inserted",number of elements to remove, (elements that should be added))

//INPUT: var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
brownOnly.splice(1,5, "brown", "brown", "brown");
//OUTPUT" var brownOnly = ['brown', 'brown', 'brown', 'brown', 'brown'];

var orderedValuesNewLength = orderedValues.unshift(1,2,3); //.unshift will add elements to the begenning of an array

var randomThingsArray = genericNumberArray.concat(colors); //.concat will concatante two arrays and return the values all in one array

var newOrders = [{takeOut: "Cheese Pizza"}, {takeOut: "CheeseBurger"}];
var updatedOrders = orderQueue.concat(newOrders);

var sentence = scrambledWords.join(" ");
console.log(sentence);
var myFruits = fruitCollection.join(" + "); //.join will join the elements as a string sperated by a comma unless specified on how string should be seperated (eg. spaces, space with a plus sign)
console.log(myFruits);

var favoriteFriends = friends.slice(1,3); //.slice will remove part of an array and return a new array.  Must specify starting and ending index positions.
var owesMoney = friends.slice(3,6)

var monthNameString = monthNames.toString(); //.toString will convert array elements to a string
console.log(monthNameString); 

var favoriteColor = colors.indexOf('Red'); //.indexOf will return index of specified value
var favoriteEvenNumber = mixedNums.indexOf(76);

var lastNine = bulkNumbers.lastIndexOf(9); //.lastIndexOf will return the last index positon of specified value or will return -1 if there is no value specified
var lastFive = bulkNumbers.lastIndexOf(5);