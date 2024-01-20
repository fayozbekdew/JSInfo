/* O'zgaruvchilar 3 turga bolinadi let, var, const 
let - block scope da ishlidi,elon qilishdan oldin chaqirilsa(hoisting) before initalisation hatoligini beradi,overwrite ham ishlidi  ya'ni ustiga yozish 
let a = 1
a = 2
///////////////////////////////
var - ES6 dan  oldin faqat var bo'lgan js d ES6 da let va const qo'shilgan. Function scope da ishlidi,elon qilishdan oldin chaqirilsa(hoisting) undefined hatoligini beradi.var da redeclering ishlidi ya'ni 
var a = 1
var a = 2  bunday vaziyatda js tepadan pasga qarab o'qiganligi sababli eng oxirgi qiymatni oladi.overwrite ham ishlidi, var bilan elon qilinganda window(global) obyektga yoziladi 
bu esa uning kamchiligi hisoblanadi ES6 dan oldin buni bartaraf etish uchun IIFE(Immediately Invoked Function Expression) ishlatilgan.
    function Scope
function(){
    var name = 'Fayozbek'
}
console.log(name)  undefined
==========
    block scope
if(shart){
    var name = 'Fayozbek'
}
console.log(name)  'Fayozbek' sabab bu block scope lekin var ni faqat function scope ushlab qololidi.
///////////////////////////////
const - block scoope da ishlidi, elon qilishdan oldin chaqirilsa(hoisting) before initalisation hatoligini beradi.overwrite ishlamidi sabab constant variable belginalanadi istisno non-primitiv ma'lumotlarda ishlidi sabab ularda ichida qiymatni o'zgartiradi malumotni o'zini emas 
const obg = {name: 'Fayozbek'}
obg = 'aa' qilinsa non-primitivlarda ham hatolik beradi.
*/
////////////////////////////////
/*
variable  declaration     initialisation 
   let      name      =    'Fayozbek'
=================
Hoisting bu - o'zgaruvchilaring declaration larini tepaga ko'tarish hisonlanadi.
let name;     hoistingda shu ko'rinishda boladi
const age;    hoistingda shu ko'rinishda boladi
var from = undefined;   var hoistingda undefined qiymat biriktiriladi

let name = 'Fayozbek';
const age = 22;
var from = 'Namangan'

 */
//////////////////////////////
/*
TDZ  temporal dead zone
TDZ - o'zgarubchini elon qilinishidan oldin chaqirilsa tdz ga tushadi yani error qaytaradi elon qilishigaca bolgan barcha joy u o'zgaruvchi uchun o'lik hudud.Hoisting tepaga kotarganligi uchun initialisation qismi pasda bolsa ham decloration qismi tepada shuning uchun before initialization hatolik beradi.

TDZ a = 'aziz' TDZ da turganligi uchun hatolik beradi
let name = 'Fayozbek'

*/
///////////////////////////
//! Ex:
// const
console.log(example) // before initialisaton error becouse it be hoisting 
const example = 10 
console.log(example) // 10

//let 
console.log(example2) // before initialisaton error becouse it be hoisting 
let example2 = 10 
console.log(example2) // 10
//var
console.log(example3) // undefined
const example3 = 10 
console.log(example3) // 10