// 1 SAVOL
// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini
// qaytaradigan funksiya yasang.
// Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1


// JAVOBI
// let num1 = +prompt("1 son kiriting");
// let num2 = +prompt("2 soni kiriting")


// function bolim() {
//     let natija = (num1+num2)-1;
//     return natija;
// }
// console.log(bolim(num1,num2));


// 2 SAVOL

// 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan
// funksiya yasang.

// JAVOBI
// let son1 = +prompt("iltimos 1 soni kiriting");
// let son2 = +prompt("iltimos 2 soni kiriting");


// function qoldiq(son1, son2) {
//     return son1 % son2;
// }

// console.log(qoldiq(son1,son2));



// 3 SAVOL

// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
// qaytaradigan funksiya yasang. Formula S = bo’yi * eni

// JAVOBI
// let boyi = +prompt("iltimos boyini tortburchakdi kiriting");
// let eni = +prompt("iltimos enini tortburchakdi kiriting");


// function tortbutchak(boyi, eni) {
//     return boyi * eni;
// }

// console.log(tortbutchak(boyi,eni));



// 4 SAVOL

// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
// ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
// stringini birlashtirib qaytarsin.

// JAVOBI
// let soz1 = "something";
// let soz2 = prompt("Iltimos soz kiriting");

// function sozlar(soz1, soz2) {
//     return soz1 + " " + soz2;
// }

// console.log(sozlar(soz1, soz2));



// 5 SAVOL

// 14.Quyidagi namunalarga qaragan holatda funksiya yasang.
// Namuna:

// JAVOBI
// let son = +prompt("ILTIMOS SON KIRITING")

// function sozlar(son) {
//     return son * son;
// }

// console.log(sozlar(son));


// 6 SAVOL

// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
// yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.

// JAVOBI
// function noldanKatta() {
//     var raqam = +prompt("Iltimos, bir raqam kiriting:");
//     raqam = parseFloat(raqam); // Kirilgan qiymatni son tipiga o'zgartirish

//
//     if (raqam > 0) {
//         console.log("Rost");
//     } else {
//         console.log("Yolg'on");
//     }
// }

// noldanKatta();


// 7 SAVOL

// 16.Funksiya ko’p burchakli shaklning burchaklar sonini qabul
// qiladi. Natijada funksiya ushbu shaklning ichki burchaklar
// yig’indisini qaytarsin. Formula (n - 2) x 180

// JAVOBI
// function ichkiBurchaklar() {
//     var n = prompt("Ko'p burchakli shaklning burchaklar sonini kiriting:");
//     n = parseInt(n, 10);
//     var yigindi = (n - 2) * 180;
//     console.log(yigindi);
// }

// ichkiBurchaklar();


// 8 SAVOL

// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar
// mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar
// sonini va 2-argument sifatida uch ochkolik gollar sonini qabul
// qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.




// JAVOBI
// function ochkolar() {
//     var x = prompt("Iltimos, ikki ochkolik zarbalar sonini kiriting:");
//     var y = prompt("Iltimos, uch ochkolik zarbalar sonini kiriting:");

//     x = parseInt(x, 10);
//     y = parseInt(y, 10);

//     var umumiyBallar = (x * 2) + (y * 3);
//     console.log("Jamoaning jami ochkosi:", umumiyBallar);
// }

// ochkolar();


