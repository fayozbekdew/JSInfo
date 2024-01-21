/*
Recursion Function - O'zini o'zi chaqiruvchi funcsiyalarga aytladi.Ular dastur ishlashga yomon tasir qigani uchun kop joyda ishlatilmidi.Shart berilmasa infinite bolib qoladi.
*/
////////////////////////////////////////////////////
 // kamayuvchi recursion
let valKamayuvchi = 0;
const recursionFn = (n) => {
  if (n == 1) {
    return (valKamayuvchi += n);
  } else {
    valKamayuvchi += n;
    return recursionFn(n - 1); // bu qismi paramaetrdagi qiymatni bitta kamaytirib qaytaryapti 
  }
};
// console.log(recursionFn(4));  bu funcsiya 10 natija qaytaradi chunki 4 + 3 + 2 + 1 holatda ishlayapti. 
// =============================
 // O'suvchi recursion
 let valOsuvchi = 0;
 const recursionFnOsuvchi = (n) => {
   if (n == 30) {
     return (valOsuvchi += n);
   } else {
     val += n;
     return recursionFn(n + 1); // bu qismi paramaetrdagi qiymatni bitta kopaytirib yana chaqiryapti 
   }
   // console.log(recursionFnOsuvchii(0));  bu funcsiya 465 natija qaytaradi chunki 0 + 1 +2 +n holatda ishlayapti. 
};
//==============================
 // n factorial yani kopayuvchi
 let valFac = 1;
 const recursionFnFac = (n) => {
   if (n == 3) {
     return (valFac *= n);
   } else {
     val *= n;
     return recursionFn(n + 1); // bu qismi paramaetrdagi qiymatni bitta kopaytirib yana chaqiryapti 
   }
   // console.log(recursionFnFac(0));  bu funcsiya 6 natija qaytaradi chunki 1 * 1 * 2 *3 holatda ishlayapti. 
};