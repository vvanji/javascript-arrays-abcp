var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}
addElementToBeginningOfArray(chocolateBars, "twix");

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
addElementToEndOfArray(chocolateBars, "twix");

function addElementToEndOfArray(array, element){
  return [...array, element];
}
addElementToEndOfArray(chocolateBars, "twix");

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
destructivelyAddElementToEndOfArray(chocolateBars, "twix");

function accessElementInArray(array, index){
  return array[index];
}
accessElementInArray(chocolateBars, [2]);


function destructivelyRemoveElementFromBeginningOfArray(array){
  array.slice();
  return array;
}
destructivelyRemoveElementFromBeginningOfArray(chocolateBars);

