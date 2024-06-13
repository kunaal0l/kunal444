/*
crazy
amazing

fire

SHOP NAME:
ENGINE
FOODS
GARMENTS
Another Words
Bros
limited
hub
*/
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    // fullName: function() {
    //   return this.firstName + " " + this.lastName;
    // }
  };
  let text=""
for(x in person){
    text=text+person[x]+" "
}
console.log(text)
const myarray=Object.values(person)
console.log(myarray)
const marray=["banana","apple","orange","rohan"]
console.log(marray.toString())
//console.log(marray.pop())
marray.push("kiwi")
marray.unshift("pineapple")
console.log(marray.length)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3,arr1);
console.log(myChildren)
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits)