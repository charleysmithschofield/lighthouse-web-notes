/*
 THE LOGIC:
  In this activity, we will be writing tests to make sure the car buying
  function works the way Steve expects it to.

  Here are Steve's specifications for an acceptable car to buy:

  - The car must have fuel efficiency between 6 and 11 litres/100km
  - The car must cost $5,000 or less

  - If the car's color is pink, then he will buy it no matter what the
    price or litres/100km.

  - If it's a hatchback, he will not buy it even if it's pink.
  - The function should also return undefined if no car is passed in.
*/

const shouldBuyCar = function(car) {
  if (!car) {
    return undefined;
  }
  if (car.type && car.type.toLowerCase() === "hatchback") {
    return false;
  }

  if (car.color && car.color.toLowerCase() === "pink") {
    return true;
  }
  
  const goodLitres = car.litresPer100km && car.litresPer100km >= 6 && car.litresPer100km <= 11;
  const goodPrice = car.price && car.price <= 5000;

  if (goodLitres && goodPrice) {
    return true;
  }

  return false;
};

module.exports = shouldBuyCar;