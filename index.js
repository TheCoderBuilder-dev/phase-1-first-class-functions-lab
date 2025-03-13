// Code your solution in this file!
// Step 1: Return First Two Drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// Step 2: Return Last Two Drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Step 4: Higher-Order Function
const createFareMultiplier = function(multiplier) {
  return function(fare) {
      return fare * multiplier;
  };
};

// Step 5: Fare Doubler
const fareDoubler = createFareMultiplier(2);

// Step 6: Fare Tripler
const fareTripler = createFareMultiplier(3);

// Step 7: Select Different Drivers
const selectDifferentDrivers = function(drivers, selectingFunction) {
  return selectingFunction(drivers);
};
