// ////////////////////////////////////////////////////////////////////////////////////////////////
// 40 -misol ///////////////////////////////////////////////////////////////////////////////////////
// function findMiddle(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.length % 2 !== 0) {
//       let middleIndex = Math.ceil(arr.length / 2);
//       return middleIndex;
//     } else {
//     }
//     let midindex1 = arr.length / 2;
//     let midindex2 = arr.length / 2 - 1;
//     let middleNumber = (arr[midindex1] + arr[midindex2]) / 2;
//     return middleNumber;
//   }
// }
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3, 4];
// console.log(findMiddle(arr1));
// console.log(findMiddle(arr2));

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 41-misol ///////////////////////////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     read: false,
//   },
//   {
//     title: "Dunyoning ishlari",
//     author: "O'tkir Hoshimov",
//     read: true,
//   },
//   {
//     title: "Iymon",
//     author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//     read: true,
//   },
// ];

// function printReadingStatus(books) {
//   books.forEach((book, index) => {
//     if (book.read) {
//       console.log(
//         `${index + 1}. ${book.author} ning ${book.title} kitobi o'qilgan`
//       );
//     } else {
//       console.log(
//         `${index + 1}. ${book.author} ning ${book.title} kitobi o'qilmagan`
//       );
//     }
//   });
// }
// console.log(printReadingStatus(books));
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 42-misol ////////////////////////////////////////////////////////////////////////////////////////////////
// let arr = ["text", "world", "laptop"];
// let obj = {};

// for (let key in arr) {
//   obj[arr[key]] = arr[key].length;
// }
// console.log(obj);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 43-misol ///////////////////////////////////////////////////////////////////////////////////////////////////////

// function createObject() {
//   const obj = { a: 2, b: 3, c: 4 };
//   for (let key in obj) {
//     obj[key] = obj[key] * 3;
//   }
//   console.log(obj);
// }
// createObject(3);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 44-misol ////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getLevel(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(Math.pow(2, i));
//   }
//   return arr;
// }

// console.log(getLevel(4));
// console.log(getLevel(5));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 45-misol //////////////////////////////////////////////////////////////////////////////////////////////
// function countWords(arr) {
//   const wordCount = {};
//   arr.forEach((word) => {
//     if (wordCount[word]) {
//       wordCount[word]++;
//     } else {
//       wordCount[word] = 1;
//     }
//   });
//   return wordCount;
// }

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// const result = countWords(animals);
// console.log(result);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 46 -misol ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let arr = [1, 2, 3, 4, 5]
// let newarr = []
// for(let i = 1; i <= arr.length; i++){
//   newarr.push(Math.pow(i,2))
// }
// console.log(newarr)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 47-misol ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const numbers = [1, -4, 12, 0, -3, 29, -150];
// const positiveSum = numbers
//   .filter((num) => num > 0)
//   .reduce((item, sum) => item + sum, 0);

// console.log(positiveSum);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 48-misol /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const getFirstLetter = (str, order) => {
//   let result = str
//     .split(" ")
//     .map((el) => el[order - 1])
//     .join("");
//   console.log(result);
// };

// getFirstLetter("George Raymond Richard Martin", 1);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 49-misol ///////////////////////////////////////////////////////////////////////////////////////////////////////
// function ageDiff( people){
//     let diffAge = []
//     for(let i = 0; i < people.length; i++){
//       let person = people[i]
//       diffAge.push(person.age )
//     }
//     diffAge.sort( function (a,b){
//       return a - b
//     })
//     let young = diffAge[0]
//     let oldest = diffAge[diffAge.length - 1]
//     let  result = oldest - young
//     return result
//   }
//   let arr =  [
//   {name: 'John', age: 13},
//   {name: 'Mark', age: 56},
//   {name: 'Rachel', age: 45},
//   {name: 'Nate', age: 67},
//   {name: 'Jeniffer', age: 65}
//   ];
//   console.log(ageDiff(arr))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 50 -misol ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function singleNumber(arr) {
//   let new_arr = [];
//   let result = [];
//   for (let nums of arr) {
//     if (!new_arr[nums]) {
//       new_arr[nums] = 1;
//     } else {
//       delete new_arr[nums];
//     }
//   }
//   for (let key in new_arr) {
//     result.push(Number(key));
//   }
//   return result;
// }
// let arr = [4, 1, 2, 1, 2, 9];
// console.log(singleNumber(arr));
