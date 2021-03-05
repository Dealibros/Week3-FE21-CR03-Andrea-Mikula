function calculateInvoice(
  starterPrice,
  maindishPrice,
  dessertPrice,
  beveragePrice
) {
  let result = starterPrice + maindishPrice + dessertPrice + beveragePrice;
  return `The starter is ${starterPrice} €, the main dish price will be ${maindishPrice}€, the dessert costs ${dessertPrice}€ and the drink is ${beveragePrice}€. All this equals to ${result} €uros.`;
}

console.log(calculateInvoice(12, 8, 5, 8));

// Menu

// // Starters
let hummus = 6;
let falafel = 8;
let Tabbouleh = 7;
let MezzePlatter = 12;

// // MainDishes
let RoastedCauliflower = 13;
let Shakshuka = 10;
let Sabich = 8;
let RoastedChicken = 15;

// // Desserts
let SemolinaCake = 4;
let AlmondCake = 4;
let MintIcecream = 5;
let Baklava = 5;

// // Beverages
let ColdBrewCoffee = 8;
let Pomegranatejuice = 5;
let CardamomTea = 2.5;
let LemonyGin = 8;

//  Second Exercise

console.log(
  calculateInvoice(falafel, RoastedCauliflower, MintIcecream, CardamomTea)
);

// Third Exercise

console.log(calculateInvoice(Tabbouleh, Shakshuka, SemolinaCake, LemonyGin));

console.log(calculateInvoice(hummus, RoastedChicken, Baklava, CardamomTea));

console.log(
  calculateInvoice(MezzePlatter, Sabich, MintIcecream, Pomegranatejuice)
);

//    Bonus Exercise

function calculateDiscount(
  starterPrice,
  maindishPrice,
  dessertPrice,
  beveragePrice
) {
  //  10 % = 0.10
  //  1 - 0.1 = 0.9
  let result =
    starterPrice * 0.9 +
    maindishPrice * 0.9 +
    dessertPrice * 0.9 +
    beveragePrice;
  return `The starter is ${starterPrice} €, the main dish price will be ${maindishPrice}€, the dessert costs ${dessertPrice}€ and the drink is ${beveragePrice}€. With the student discount for the food, the total costs are ${result.toFixed(
    1
  )} €uros.`;
}

console.log(calculateDiscount(Tabbouleh, Shakshuka, SemolinaCake, LemonyGin));

console.log(calculateDiscount(hummus, RoastedChicken, Baklava, CardamomTea));

console.log(
  calculateDiscount(MezzePlatter, Sabich, MintIcecream, Pomegranatejuice)
);

// console.log(calculateInvoice(6, 8, 7, 12));

// console.log(calculateInvoice(8, 13, 5, 2.5));

// console.log(calculateInvoice(7, 15, 5, 5));

// console.log(calculateInvoice(6, 10, 5, 8));
