// Làm bài tập tại đây
// var currentCourse='Javascript co bản';
// newCourse=currentCourse;
// alert(currentCourse);
// alert(newCourse);
// newCourse='Javascript nâng cao';
// alert(newCourse);
/** */
// console.log(currentCourse)
// prompt('xacs nhan');
// setInterval(function() {
//     console.log('day la'+ Math.radnom())
// },1000)
// var a = 5,
//     b = 5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a**b);
// console.log(a/b);
// console.log(a%b);
// console.log(a++);
// output1 = ++a;
// console.log(a)
// console.log(output1);

// output2 = b++;
// console.log(output2);
// console.log(b);
// function decrease(number) {
// number +=2;
//     // không sửa phần dưới này
//  console.lognumber
// var age = 16;
// var isAccessible;
//     if (age>=16) {
//         isAccessible=true;
//     } else {
//         isAccessible=false;
//     }
// console.log(isAccessible);
// var a = 1 , b=2;
// var description = 'Học Javascript cơ bản tại F8',
//     title = 'a Jaavascript funny';
// if ((title.search('Javascript') >0)&&(description.search('Javascript') >0)) {
//     result=true;
// } else {
//     result=false;
// }
// console.log(title.indexOf("8") );
// console.log(typeof '');
// //         result = true;
//     } else {
//         result = false;
//     }

// function sum(a,b) {
//     if ((typeof a == 'number')&& (typeof b == 'number')) {
//         return a+b;
//     } else {
//         return false;
//     }
// // }
// console.log(sum(NaN,0.5463456));
// function calculateTriangleArea(a, h) {
//     // if (((a)>0)&& (typeof a == 'number')&& (typeof b == 'number')) {
//         // s=(a*h);
//         result a+h;
// //     } else {
// //         result false;
// //     }
// }
// console.log(calculateTriangleArea(2,8));
// function stringInString(needle, haystack) {
//     a = haystack.indexOf(needle);
//     b = typeof haystack == 'string';
//     c = typeof needle == 'string';
//     d = needle !='' && haystack !='';
//     if ((a>0) && b && c && d ) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(stringInString('0', '0 Học Javascript tại F8'))
// if () {
    
// } else if {

// } else {

// // }
// var isFree = cousrse.forEach(function(cousrse, index){

// });
// var formValues =[
//     { field: 'name', value: 'Sơn Đặng' },
//     { field: 'age', value: 18 },
//     { field: 'address', value: 'Hà Nội' },
// ];
// formValues.reduce((result, item) => {
//     result[item.field] = item.value;
//     return result;
// }, {});
// console.log(result);
// var number = ;

// function reduce2(number){
//     var total = 0;
//     for (var i =0 ;i< number.length; i++ ) {
//          total += number[i];}
//     return total;
// }
// console.log(reduce2([1, 2, 3, 4]));
// // [1, 2, 3, 4].reduce2(function reducer(total, number) { return a =total + number })
// // console.log(a)
// Array.prototype.reduce2 = function (callback, result){
//     let i = 0
//     if (arguments.length <2){
//         i = 1
//         result=this[0]
//     }
//     for ( ; i< this.length; i++ ) {
//         result = callback(result, this[i], i ,this)
//     }
//         return result
// }

// /////////////////

// var result = numbers.reduce((total, number) =>{
//     return total +number;
// },0)
// //////
// function getSumOfGrades(grades) {
//     return grades.reduce(function(total, grade) {
//          return total + grade;
//      },0);
//  }
var span = document.getElementById("born");
console.log(span.tagName);
console.log(span.nextElementSibling())
