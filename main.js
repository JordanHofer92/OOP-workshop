   ////////////
  //Method 1//
 ////////////

// function Apple(type) {
//     this.type = type;
//     this.color = "red";
//     this.getInfo = getAppleInfo;
// }
    
// function getAppleInfo() {
//     return `${this.type} is ${this.color}. YAAY!`;
// }

// const apple1 = new Apple('mac')
// const apple2 = new Apple('deli')

   /////////////////////////////////////////////////////////////////////
  //Problem with this method is the pollution of the global namespace//
 /////////////////////////////////////////////////////////////////////


//    ////////////
//   //Method 2//
//  ////////////

// function Apple(type) {
//     this.type = type;
//     this.color = "red";
//     this.getInfo = function() {
//         return `${this.type} is ${this.color}. YAAY!`;
//     }
// }

// const apple1 = new Apple('mac')
// const apple2 = new Apple('deli')

// console.log(apple1.getInfo())
// console.log(apple2.getInfo())

     //////////////////////////////////////////////////////////////////////////////
    //Problem with this method is the function getInfo is recreated for each new//
   //instance. This is bad for memory!                                         //
  //////////////////////////////////////////////////////////////////////////////

//    ////////////
//   //Method 3//
//  ////////////

// function Apple(type) {
//     this.type = type;
//     this.color = "red";
// }

// Apple.prototype.getInfo = function() {
//     return `${this.type} is ${this.color}. YAAY!`;
// }

// const apple1 = new Apple('mac')
// const apple2 = new Apple('deli')

// console.log(apple1.getInfo())
// console.log(apple2.getInfo())

//    /////////////////////////////////////////////////////////////////////
//   //Problem with this method is that there is no silver bullet!      //
//  /////////////////////////////////////////////////////////////////////

   ////////////
  //Method 4//
 ////////////

//  const apple1 = {}
//  const apple1 = new Object

//  const apple1 = {
//      type: "mac",
//      color: "red",
//      getInfo = function() {
//         return `${this.type} is ${this.color}. YAAY!`;
//      }
//  };

   /////////////////////////////////////////////////////////////////////////////
  //Problem with this method is that it is a 'singleton'. Have to constantly //
 //recreate.                                                                //
 ////////////////////////////////////////////////////////////////////////////


// function Apple(type) {
//     this.type = type;
// }

// Apple.prototype.getInfo = function() {
//     return `${this.type} is delicious.`
// }

// let apples = []

// for (let i = 0; i <1000; i++) {
//     apples[i] = new Apple ('red')
//     apples[i].getInfo()
// }

// // PROTYPE METHODS
// function Apple(type, i) {
//   (this.color = "red"), (this.position = i), (this.type = type);
// }
// Apple.prototype.getInfo = function() {
//   return `We have a ${this.color} ${this.type} apple. This apple is in position ${this.position}`;
// };
// let apples = [];
// for (let i = 0; i < 10000; i++) {
//   apples[i] = new Apple(`mac`, i);
//   console.log(apples[i].getInfo());
// }

// STATIC METHODS
// function Apple(type, i) {
//   (this.color = "red"),
//     (this.position = i),
//     (this.type = type),
//     (this.getInfo = () => {
//       return `We have a ${this.color} ${this.type} apple. This apple is in position ${i}`;
//     });
// }
// let apples = [];
// for (let i = 0; i < 10000; i++) {
//   apples[i] = new Apple(`mac`, i);
//   console.log(apples[i].getInfo());
// }

function Gardener(specialty) {
    this.specialty = specialty,
    this.task = "pruned"
    this.taskAtHand = function() {
        return `My ${this.specialty} need to be ${this.task}`
    }
};

const gardener1 = new Gardener('conifers')
const gardener2 = new Gardener('flowers')
const gardener3 = new Gardener('orchards')