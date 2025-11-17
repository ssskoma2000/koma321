// juft tog

// / / let son = 18
// let tub = true

// if (son <= 1) {
//   console.log("Tub mas")
// } else if (son === 2) {
//   console.log("Tub son")
// } else {
//   for (let i = 2; i < son; i++) {
//     if (son % i === 0) {
//       tub = false
//       break
//     }
//   }
//   if (tub) {
//     console.log("Tub ")
//   } else {
//     console.log("Tub mas")
//   }
// }




// // 1. Son 5 dan katta yoki kichik
// // let son = 10;
// // if (son > 5) {
// //   console.log("Son 5 dan katta");
// // } else {
// //   console.log("Son 5 dan kichik yoki teng");
// // }

// 2. Bahoni tekshirish
// let baho = +prompt("Baho");
// if (baho >= 90) alert("A");
// else if (baho >= 80) alert("B");
// else if (baho >= 70) alert("C");
// else if (baho >= 60) alert("D");
// else alert("F");

// // // 3. Kabisa yil
// // let yil = +prompt("Yil:");
// // if (yil % 400 === 0 || (yil % 4 === 0 && yil % 100 !== 0)) {
// //   alert("Kabisa yil");
// // } else {
// //   alert("Kabisa emas");
// // }

// // // 4. Son musbat yoki manfiy
// // let son2 = +prompt("Son");
// // if (son2 > 0) alert("Musbat");
// // else alert("Manfiy");




// // // 1. FizzBuzz
// // function fizzBuzz(son) {
// //   if (son % 15 === 0) {
// //     console.log("fizz buzz");
// //   } else if (son % 5 === 0) {
// //     console.log("fizz");
// //   } else if (son % 3 === 0) {
// //     console.log("buzz");
// //   } else {
// //     console.log(son);
// //   }
// // }
// // fizzBuzz(15);

// // // 2. Bahoni funksiya orqali tekshirish
// // function checkScore(score) {
// //   if (score > 100 || score < 0) {
// //     console.log("Xato!");
// //   } else if (score >= 90) {
// //     console.log("5");
// //   } else if (score >= 80) {
// //     console.log("4");
// //   } else if (score >= 70) {
// //     console.log("3");
// //   } else {
// //     console.log("Yiqildiz");
// //   }
// // }
// // checkScore(75);

// // // 3. Vazn nazorati
// // function weightControl(boy, vazn) {
// //   let farq = boy - vazn;
// //   if (farq === 100) return "Normal";
// //   else if (farq < 90) return "Og‘ir";
// //   else if (farq > 110) return "Yengil";
// //   else return "Normal";
// // }
// // console.log(weightControl(180, 200));

// // // 4. Tezlikni tekshirish
// // function speedControl(speed) {
// //   if (speed >= 70 && speed <= 80) {
// //     console.log("Normal");
// //   } else if (speed === 90) {
// //     console.log("Tez");
// //   } else if (speed === 95) {
// //     console.log("Juda tez");
// //   } else if (speed === 55) {
// //     console.log("Sekin");
// //   } else if (speed === 40) {
// //     console.log("Gaz ishlamayaptimi?");
// //   } else {
// //     console.log("Uchar likopcha");
// //   }
// // }
// // speedControl(75);




// // // 1. Kvadrat callback
// // function square(n) {
// //   return n ** 2;
// // }
// // function sum(callback, n2) {
// //   let kvadrat = callback(5);
// //   console.log(kvadrat + n2);
// // }
// // sum(square, 10);

// // // 2. Ism bilan callback
// // function ism(name, callback) {
// //   callback(name);
// // }
// // ism("Otkur", function(n) {
// //   console.log("Salom " + n);
// // });

// // // 3. Juft yoki toqni callback orqali tekshirish
// // function tekshir(num) {
// //   return num % 2 === 0 ? "Juft" : "Toq";
// // }
// // function checkNumber(num, callback) {
// //   return callback(num);
// // }
// // console.log(checkNumber(7, tekshir));

// // // 4. Eng katta sonni callback
// // let arr = [50, 8, 11, 10000, 100];
// // function engKattasi(a) {
// //   setTimeout(() => console.log(Math.max(...a)), 2000);
// // }
// // function otkrbu(a) {
// //   engKattasi(a);
// // }
// // otkrbu(arr);

// // // 5. Asinxron bosqichlar
// // function step1(callback) {
// //   setTimeout(() => {
// //     console.log("1-qadam");
// //     callback();
// //   }, 2000);
// // }
// // function step2(callback) {
// //   setTimeout(() => {
// //     console.log("2-qadam");
// //     callback();
// //   }, 2000);
// // }
// // function step3() {
// //   setTimeout(() => {
// //     console.log("3-qadam");
// //   }, 2000);
// // }

// // step1(() => step2(() => step3()));


// // // 1️⃣ O‘zgaruvchilar va matematik amallar
// // // Kvadratni topish
// // let son = 5;
// // console.log("Kvadrati =", son * son);

// // // Juft yoki toq
// // let son2 = 7;
// // if (son2 % 2 === 0) console.log("Juft");
// // else console.log("Toq");

// // // Musbat yoki manfiy
// // let son3 = -10;
// // if (son3 > 0) console.log("Musbat");
// // else console.log("Manfiy");

// // // Ikki sondan kattasini topish
// // let a = 12, b = 25;
// // console.log("Kattasi =", a > b ? a : b);





// // // if else operatorlari
// // // Eng kattasini uch sondan topish
// // let x = 15, y = 5, z = 20;
// // if (x > y && x > z) console.log(x);
// // else if (y > x && y > z) console.log(y);
// // else console.log(z);

// // // Bahoni tekshirish
// // let baho = 85;
// // if (baho >= 90) console.log("A");
// // else if (baho >= 80) console.log("B");
// // else if (baho >= 70) console.log("C");
// // else if (baho >= 60) console.log("D");
// // else console.log("F");

// // // Kabisa yil
// // let yil = 2024;
// // if (yil % 400 === 0 || (yil % 4 === 0 && yil % 100 !== 0)) {
// //   console.log("Kabisa yil");
// // } else {
// //   console.log("Kabisa emas");
// // }

// // // Ternary operator misoli
// // let son4 = 8;
// // console.log(son4 > 10 ? "10 dan katta" : "10 dan kichik yoki teng");




// // // 3️⃣ Massivlar (Arrays)



// // // Massiv yaratish
// // let students = ["Alisher", "Sanjarbek", "Musobek"];

// // // For loop bilan chiqarish
// // for (let i = 0; i < students.length; i++) {
// //   console.log(students[i]);
// // }

// // // Juft yoshlarni chiqarish
// // let ages = [10, 14, 32, 48, 21, 5];
// // for (let i = 0; i < ages.length; i++) {
// //   if (ages[i] >= 18) {
// //     console.log("Voyaga yetgan:", ages[i]);
// //   }
// // }




// // // 4️⃣ For va While tsikllar-->\
// // // 1 dan 10 gacha chiqarish
// // for (let i = 1; i <= 10; i++) {
// //   console.log(i);
// // }

// // // Teskari sanash
// // for (let i = 10; i >= 0; i--) {
// //   console.log(i);
// // }

// // // Juft sonlarni chiqarish (while)
// // let i = 1;
// // while (i <= 20) {
// //   if (i % 2 === 0) console.log(i);
// //   i++;
// // }

// // // Faktorial hisoblash
// // let n = 5, p = 1;
// // for (let i = 1; i <= n; i++) {
// //   p *= i;
// // }
// // console.log("Faktorial =", p);

// // // funcialar


// // // Oddiy funksiya
// // function salomBer() {
// //   console.log("Salom, dunyo!");
// // }
// // salomBer();

// // // Parametrli funksiya
// // function kvadrat(son) {
// //   return son * son;
// // }
// // console.log("Kvadrat:", kvadrat(7));

// // // FizzBuzz
// // function fizzBuzz(son) {
// //   if (son % 15 === 0) console.log("FizzBuzz");
// //   else if (son % 5 === 0) console.log("Fizz");
// //   else if (son % 3 === 0) console.log("Buzz");
// //   else console.log(son);
// // }
// // fizzBuzz(15);

// // // Bahoni funksiya bilan
// // function checkScore(score) {
// //   if (score > 100 || score < 0) console.log("Xato!");
// //   else if (score >= 90) console.log("5");
// //   else if (score >= 80) console.log("4");
// //   else if (score >= 70) console.log("3");
// //   else console.log("Yiqildiz");
// // }
// // checkScore(75);



// // // calback funsiyasi
// // // Kvadrat callback
// // function square(n) {
// //   return n ** 2;
// // }
// // function sum(callback, n2) {
// //   let kvadrat = callback(5);
// //   console.log(kvadrat + n2);
// // }
// // sum(square, 10);

// // // Callback bilan ism
// // function ism(name, callback) {
// //   callback(name);
// // }
// // ism("Otkur", function(n) {
// //   console.log("Salom " + n);
// // });

// // // Juft yoki toq callback
// // function tekshir(num) {
// //   return num % 2 === 0 ? "Juft" : "Toq";
// // }
// // function checkNumber(num, callback) {
// //   return callback(num);
// // }
// // console.log(checkNumber(7, tekshir));



// // // 7️⃣ Asinxron kod (setTimeout va callback hell)


// // // Bosqichma-bosqich asinxron ishlar
// // function step1(callback) {
// //   setTimeout(() => {
// //     console.log("1-qadam");
// //     callback();
// //   }, 1000);
// // }
// // function step2(callback) {
// //   setTimeout(() => {
// //     console.log("2-qadam");
// //     callback();
// //   }, 1000);
// // }
// // function step3() {
// //   setTimeout(() => {
// //     console.log("3-qadam");
// //   }, 1000);
// // }

// // // Asinxron ketma-ketlik
// // step1(() => step2(() => step3()));



// // // string metotlari

// // let text = "  JavaScript Zo‘r  ";

// // // Harflarni katta-kichik qilish
// // console.log(text.toUpperCase());
// // console.log(text.toLowerCase());

// // // Bo‘sh joylarni olib tashlash
// // console.log(text.trim());

// // // So‘z uzunligi
// // console.log(text.length);

// // // So‘zlarni ajratish
// // console.log("salom dunyo".split(" "));

// // // Matndan qism olish
// // console.log("Frontend".slice(5));

// // // Matnni almashtirish
// // console.log("Hello World".replace("World", "JS"));

// // // IndexOf
// // console.log("Javascript is fun".indexOf("fun"));



// // // 9️⃣ While o‘yin misollari

// // // Parol tekshirish
// // let haqiqiyParol = "sekret";
// // let urinish = 0;

// // while (urinish < 3) {
// //   let kiritilgan = prompt("Parolni kiriting:");

// //   if (kiritilgan === haqiqiyParol) {
// //     alert("Tizimga kirdingiz!");
// //     break;
// //   } else {
// //     urinish++;
// //     if (urinish === 3) {
// //       alert("Bloklandi!");
// //     } else {
// //       alert("Xato parol");
// //     }
// //   }
// // }

// // 1. Son kvadrati
// let son = +prompt("Son:");
// alert(son * son);

// // 2. Juft yoki toq
// let son2 = +prompt("Son:");
// alert(son2 % 2 === 0 ? "Juft" : "Toq");

// 3. Musbat yoki manfiy
// let son3 = +prompt("Son:");
// alert(son3 > 0 ? "Musbat" : "Manfiy");

// // 4. Uch son ichidan eng kattasi
// let a = +prompt("a:");
// let b = +prompt("b:");
// let c = +prompt("c:");
// if (a > b && a > c) alert(a);
// else if (b > a && b > c) alert(b);
// else alert(c);

// // 5. Ikki son ichidan kattasi
// let x = +prompt("a:");
// let y = +prompt("b:");
// alert(x > y ? x : y);

// // 6. Baho tekshirish
// let baho = +prompt("Baho:");
// if (baho >= 90) alert("A");
// else if (baho >= 80) alert("B");
// else if (baho >= 70) alert("C");
// else if (baho >= 60) alert("D");
// else alert("F");

// // 7. Kabisa yil
// let yil = +prompt("Yil:");
// if (yil % 400 === 0 || (yil % 4 === 0 && yil % 100 !== 0)) alert("Kabisa yil");
// else alert("Kabisa yil emas");

// // 8. 10 dan katta yoki kichik
// let son4 = +prompt("Son:");
// alert(son4 > 10 ? "10 dan katta" : "10 dan kichik");

// // 9. Son yoki son emas
// let qiymat = prompt("Qiymat:");
// alert(isNaN(qiymat) ? "Bu son emas" : "Bu son");

// // 10. Ikki son farqi
// let n1 = +prompt("1-son:");
// let n2 = +prompt("2-son:");
// let farq = n1 - n2;
// alert(farq > 0 ? "Musbat" : "Manfiy");

// // 11. Sonlar tengligi
// let m1 = +prompt("a:");
// let m2 = +prompt("b:");
// alert(m1 === m2 ? "Teng" : "Teng emas");

// // 12. Yosh tekshirish
// let yosh = +prompt("Yosh:");
// alert(yosh >= 18 ? "Voyaga yetgan" : "Voyaga yetmagan");

// // 13. Dam olish kuni yoki ish kuni
// let kun = prompt("Kun nomi:").toLowerCase();
// if (kun === "shanba" || kun === "yakshanba") alert("Dam olish kuni");
// else alert("Ish kuni");

// // 14. Nol yoki nol emas
// let son5 = +prompt("Son:");
// alert(son5 === 0 ? "Nol" : "Nol emas");

// // 15. Oy fasli
// let oy = prompt("Oy:").toLowerCase();
// if (["mart","aprel","may"].includes(oy)) alert("Bahor");
// else if (["iyun","iyul","avgust"].includes(oy)) alert("Yoz");
// else if (["sentyabr","oktyabr","noyabr"].includes(oy)) alert("Kuz");
// else if (["dekabr","yanvar","fevral"].includes(oy)) alert("Qish");
// else alert("Xato");

// // 16. Raqamdan hafta kuni
// let r = +prompt("1-7 gacha raqam:");
// if (r === 1) alert("Dushanba");
// else if (r === 2) alert("Seshanba");
// else if (r === 3) alert("Chorshanba");
// else if (r === 4) alert("Payshanba");
// else if (r === 5) alert("Juma");
// else if (r === 6) alert("Shanba");
// else if (r === 7) alert("Yakshanba");
// else alert("Xato");

// // 17. Kalkulyator
// let s1 = +prompt("a:");
// let s2 = +prompt("b:");
// let amal = prompt("Amal (+,-,*,/):");
// if (amal === "+") alert(s1 + s2);
// else if (amal === "-") alert(s1 - s2);
// else if (amal === "*") alert(s1 * s2);
// else if (amal === "/") alert(s1 / s2);
// else alert("Xato amal");

// // 18. Rang
// let rang = prompt("Rang:").toLowerCase();
// if (rang === "qizil") alert("Qizil issiq rang");
// else if (rang === "kok" || rang === "ko'k") alert("Ko'k sovuq rang");
// else alert("Ma'lumot yo'q");

// // 19. Oydagi kunlar
// let oy2 = +prompt("Oy raqami:");
// if (oy2 === 2) alert("28 yoki 29");
// else if ([4,6,9,11].includes(oy2)) alert("30");
// else if ([1,3,5,7,8,10,12].includes(oy2)) alert("31");
// else alert("Xato");

// // 20. Faslga qarab kiyim tavsiya
// let fasl = prompt("Fasl:").toLowerCase();
// if (fasl === "qish") alert("Palto kiying");
// else if (fasl === "yoz") alert("Yengil kiyim");
// else if (fasl === "bahor") alert("Kurtka");

// else if (fasl === "kuz") alert("Sharf");
// else alert("Xato");

// // 🧩 1. FizzBuzz (callback bilan)
// function fizzBuzzAll(callback) {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 15 === 0) callback("FizzBuzz");
//         else if (i % 3 === 0) callback("Fizz");
//         else if (i % 5 === 0) callback("Buzz");
//         else callback(i);
//     }
// }
// fizzBuzzAll((natija) => console.log(natija));


// // 🔢 2. Eng katta va kichik son topish
// function Otkur(sonlar) {
//   let katta = sonlar[0];
//   let kichik = sonlar[0];

//   for (let son of sonlar) {
//     if (son > katta) katta = son;
//     if (son < kichik) kichik = son;
//   }

//   console.log("Eng katta:", katta);
//   console.log("Eng kichik:", kichik);
// }
// Otkur([4, 7, 1, 9, 3]);


// // 🔄 3. Sonlarni teskari yozish
// function checkEl(son) {
//     let teskari = 0;
//     while (son > 0) {
//         let qoldiq = son % 10;
//         teskari = teskari * 10 + qoldiq;
//         son = Math.floor(son / 10);
//     }
//     return teskari;
// }
// function reverseAll(sonlar) {
//     for (let num of sonlar) {
//         console.log(num, "teskarisi:", checkEl(num));
//     }
// }
// let numbers1 = [123, 5050, 90, 10, 678];
// reverseAll(numbers1);


// // ➕ 4. Raqamlar yig‘indisini hisoblash
// let numbers2 = [21, 345, 90, 7, 1234];
// function checkYigindi(son) {
//     let yigindi = 0;
//     while (son > 0) {
//         yigindi += son % 10;
//         son = Math.floor(son / 10);
//     }
//     return yigindi;
// }
// function hisoblaaa(numbers, callback) {
//     for (let num of numbers) {
//         console.log(num, "raqamlar yig‘indisi:", callback(num));
//     }
// }
// hisoblaaa(numbers2, checkYigindi);


// // 💰 5. Oyliklarni yig‘ish (object)
// let salaries = {
//   javohir: 1200,
//   otkury: 1500,
//   shodyor: 10,
//   sanjarbek: 18,
//   musobek: 150,
//   alisher: 100
// };
// function hisobla(obj) {
//   let jami = 0;
//   for (let ism in obj) {
//     jami += obj[ism];
//   }
//   return jami;
// }
// function natija(obj) {
//   console.log("Jami oylik:", hisobla(obj));
// }
// natija(salaries);


// // 👴 6. Eng katta yoshli o‘quvchini topish
// let students = {
//   alisher: 14,
//   sanjar: 13,
//   musobek: 14,
//   shodiyor: 14,
//   otkir: 14,
//   javohir: 15,
//   suxrob: 16
// };
// function findOldest(obj) {
//   let maxYosh = 0;
//   let kattaIsm = "";
//   for (let ism in obj) {
//     if (obj[ism] > maxYosh) {
//       maxYosh = obj[ism];
//       kattaIsm = ism;
//     }
//   }
//   if (kattaIsm) console.log(`Eng katta yosh: ${kattaIsm} (${maxYosh} yosh)`);
//   else console.log("Xato!");
// }
// findOldest(students);


// // 🔁 7. Object ichidagi sonlarni teskari yozish
// let sonlarObj = {son1: 12, son2: 45, son3: 89};
// function teskari(obj) {
//   for (let kalit in obj) {
//     let s = obj[kalit], t = 0;
//     while (s > 0) {
//       t = t * 10 + s % 10;
//       s = Math.floor(s / 10);
//     }
//     console.log(kalit + ":", t);
//   }
// }
// teskari(sonlarObj);


// // 🧮 8. Takrorlangan sonlarni hisoblash
// let sonlar = [1, 2, 3, 2, 4, 1, 2, 5, 1];
// let hisob = {};
// for (let son of sonlar) {
//   hisob[son] = (hisob[son] || 0) + 1;
// }
// for (let kalit in hisob) {
//   if (hisob[kalit] === 1) delete hisob[kalit];
// }
// console.log("Takrorlangan sonlar:", hisob);


// // 🌍 9. Scope tushunchasi (global, local)
// let ism = "Javohir"; // global
// function salom() {
//   console.log("Salom,", ism);
// }
// salom();
// function test() {
//   let yosh = 18; // local
//   console.log("Yosh:", yosh);
// }
// test();
// if (true) {
//   let xabar = "Ichkarida";
//   console.log(xabar); // block scope
// }


// // 🚀 10. Hoisting, pure va impure funksiyalar
// console.log(son); // undefined
// var son = 5;

// function plus(a, b) {
//   return a + b; // pure
// }
// let count = 0;
// function increase() {
//   count++; // impure
// }
// increase();
// console.log("Count:", count);


// // 🔄 11. Closure (ichki funksiya misoli)
// function hisoblagich() {
//   let son = 0;
//   function oshir() {
//     son++;
//     console.log("Hisob:", son);
//   }
//   return oshir;
// }
// let natija2 = hisoblagich();
// natija2();
// natija2();
// natija2();


// // 🕒 12. Sana va vaqtni chiqarish
// let vaqt = new Date();
// console.log(
//   `Bugun: ${vaqt.getFullYear()}-yil ${vaqt.getMonth() + 1}-oy ${vaqt.getDate()}-kun, ` +
//   `${vaqt.getHours()}:${vaqt.getMinutes()}:${vaqt.getSeconds()}:${vaqt.getMilliseconds()}`
// );


// // 👶 13. Yosh hisoblovchi funksiya
// function counTage(yil) {
//   let hozir = new Date().getFullYear();
//   return hozir - yil;
// }
// console.log("Yosh:", counTage(2017));

// brhil somnni chiqarish set
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4, 5, 6, 7]);
// let result = new Set();








// 🔹 1. Ikkita set orasidagi o‘xshash sonlarni topish
// function findSimilar() {
//   let set1 = new Set([1, 2, 3, 5, 4])
//   let set2 = new Set([4, 9, 10, 15, 3])
//   let result = new Set()

//   for (let num of set1) {
//     if (set2.has(num)) result.add(num)
//   }

//   console.log("O‘xshash sonlar:", result)
// }

// findSimilar()


// 🔹 2. Foydalanuvchi login / logout tizimi
// let users = new Set(["Javohir", "Otkir", "Shodyor", "Sanjar"])

// function login(user) {
//   if (users.has(user)) {
//     console.log(user + " logged in")
//   } else {
//     console.log("Bunday foydalanuvchi yo‘q")
//   }
// }

// function logout(user) {
//   if (users.delete(user)) {
//     console.log(user + " logout qildi")
//   } else {
//     console.log("Bu foydalanuvchi allaqachon o‘chirilgan")
//   }
// }

// function showUsers() {
//   console.log("Qolgan foydalanuvchilar:")
//   for (let u of users) console.log(u)
// }

// login("Javohir")
// logout("Javohir")
// showUsers()





// 🔹 3. Ikkita array orasidagi farqni topish (faqat 2-da bor sonlar)
// function farq(arr1, arr2) {
//   let set1 = new Set(arr1)
//   let natija = new Set()

//   for (let son of arr2)
//     if (!set1.has(son)) natija.add(son)

//   return natija
// }

// let arr1 = [1, 2, 3, 5, 4]
// let arr2 = [4, 9, 10, 15, 3]
// console.log("Farq:", farq(arr1, arr2))




// 🔹 4. WeakSet bilan login tizimi
// let foydalanuvchilar = new WeakSet()

// function login(user) {
//   if (foydalanuvchilar.has(user)) {
//     console.log(user.username, "allaqachon kirilgan")
//   } else {
//     foydalanuvchilar.add(user)
//     console.log(user.username, "login muvaffaqiyatli")
//   }
// }

// let user1 = { username: "javohir" }
// login(user1)
// login(user1)



// 🔹 5. So‘zdagi takroriy harflar sonini hisoblash (Set bilan)
// function harflarSoni(soz) {
//   let set = new Set()
//   let dubl = new Set()

//   for (let harf of soz) {
//     if (set.has(harf)) dubl.add(harf)
//     else set.add(harf)
//   }

//   console.log("Takroriy harflar soni:", dubl.size)
// }
// let mevalar = new Map([
//   ["Olma", 80],
//   ["Banan", 120],
//   ["Anor", 100],
//   ["Uzum", 90],
//   ["Apelsi", 150]
// ]);

// let meva = "Olma";
// console.log(meva, mevalar.get(meva), "som");

// 1️⃣ Map bilan ishlash
// let user = new Map([
//     ['name', "Javohir"],
//     ["age", 14]
// ]);

// console.log(user); // Map(2) {'name' => 'Javohir', 'age' => 14}

// // Element qo'shish
// user.set("surname", "Nuraliyev");
// console.log(user);

// // Element olish
// let username = user.get("name");
// console.log(username); // Javohir

// // Map uzunligi
// console.log(user.size); // 3

// // Mapda kalit bor-yo‘qligini tekshirish
// console.log(user.has("name")); // true

// // Elementni o‘chirish
// user.delete("name");
// console.log(user);

// // Mapni tozalash
// user.clear();
// console.log(user); // Map(0) {}

// set(key, value) – yangi element qo‘shadi yoki mavjudini yangilaydi.

// get(key) – qiymatni olish.

// size – Mapdagi elementlar soni.

// has(key) – kalit bor-yo‘qligini tekshiradi.

// delete(key) – elementni o‘chiradi.

// clear() – barcha elementlarni o‘chiradi.







// 2️⃣ Map bilan object kalit ishlatish

// let objKey = {id:1};
// user.set(objKey, "Bu object kalit");
// console.log(user.get(objKey)); // "Bu object kalit"


// 3️⃣ Matndagi so‘zlarni sanash


// let matn = "hello bro hello how are you im okey bro wossab bro";
// let sozlar = matn.split(" "); // matnni so‘zlarga bo‘lamiz
// let natija = new Map();

// for (let soz of sozlar) {
//   if (natija.has(soz)) {
//     natija.set(soz, natija.get(soz) + 1);
//   } else {
//     natija.set(soz, 1);
//   }
// }

// for (let [soz, soni] of natija) {
//   console.log(`${soz} -> ${soni} marta`);
// }



// split(" ") – matnni bo‘shliq bo‘yicha arrayga ajratadi.

// Map yordamida har bir so‘z nechta marta ishlatilganini sanaymiz.



// 4️⃣ Array bilan ishlash

// let mevalar = ["olma", "banan"];
// mevalar.push("anor"); // oxiriga qo‘shadi
// console.log(mevalar); // ["olma", "banan", "anor"]

// mevalar.reverse(); // teskari tartib
// console.log(mevalar);

// mevalar.sort(); // alfavit bo‘yicha tartib
// console.log(mevalar);

// let numbers = [3, 6, 12, 34];
// console.log(numbers.find(a => a > 10)); // 12 -> birinchi 10dan katta son

// // reduce bilan yig‘indi
// console.log(numbers.reduce((a, b) => a + b)); // 55

// console.log(mevalar.includes("olma")); // true
// console.log(mevalar.includes("anor")); // true

// console.log(mevalar.length); // 3

// mevalar.shift(); // birinchi elementni o‘chiradi
// console.log(mevalar);

// mevalar.unshift("gilos"); // boshiga qo‘shadi
// console.log(mevalar);

// mevalar.pop(); // oxirgi elementni o‘chiradi
// console.log(mevalar);

// // filter bilan shart bo‘yicha elementlarni ajratish
// let juft = numbers.filter(son => son % 2 === 0);
// console.log(juft); // [6, 12, 34]

// // join bilan array elementlarini stringga aylantirish
// console.log(numbers.join('')); // "361234"



// Izoh:

// push() – oxiriga qo‘shadi

// pop() – oxiridan o‘chiradi

// shift() – boshidan o‘chiradi

// unshift() – boshiga qo‘shadi

// reverse() – teskari tartib

// sort() – alfavit yoki son tartibi

// filter() – shart bo‘yicha yangi array

// join() – array elementlarini stringga aylantiradi




// 5️⃣ Arraylarni birlashtirish va flat qilish


// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9];

// let all = arr1.concat(arr2, arr3); // arraylarni birlashtirish
// console.log(all); // [1,2,3,4,5,6,7,8,9]

// let arr = [1, 2, [3, 4], [5, 6]];
// console.log(arr.flat()); // [1, 2, 3, 4, 5, 6] -> nested arrayni tekislaydi


// concat() – arraylarni birlashtiradi

// flat() – ichki arraylarni 1 darajaga tekislaydi


// hammasini qoshish oop
// class Kalkulyator {
//   plus(a, b) {
//     return a + b;
//   }

//   minus(a, b) {
//     return a - b;
//   }

//   multiply(a, b) {
//     return a * b;
//   }

//   modulo(a, b) {
//     return a % b;
//   }
// }

// const calc = new Kalkulyator();

// console.log( calc.plus(5, 4));        
// console.log( calc.minus(10, 3));     
// console.log(calc.multiply(6, 7));    
// console.log( calc.modulo(10, 3));



// let  sonlar = [34, 5, 6, 6];

// function findNumber(num) {
//   for (let i = 0; i < sonlar.length; i++) {
//     if (sonlar[i] === num) {
//       return "Topildi";
//     } 
//   }
//   return undifined;
// }

// console.log(findNumber(6)); 



// Bubble Sort funksiyasi111111

// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let i = 0; i < n - i - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// let numbers = [5, 3, 8, 4, 2];
// console.log("Sortdan oldin:", numbers);

// let sortNumbers = bubbleSort(numbers);
// console.log("Sortdan keyin:", sortNumbers);



// Ota klass (Parent)

// class Ota {
//     constructor(rangi, ovozi) {
//         this.rangi = rangi;
//         this.ovoz = ovozi;   
//     }

//     otaMalumot() {
//         console.log(`Ota rangi: ${this.rangi}, Ota ovozi: ${this.ovoz}`);
//     }
// }

// class Bola extends Ota {
//     constructor(rangi, ovozi, ismi) {
//         super(rangi, ovozi); 
//         this.ismi = ismi;     
//     }

//     bolaMalumot() {
//         console.log(`Bola ismi: ${this.ismi}, Bola rangi (otadan): ${this.rangi}, Bola ovozi (otadan): ${this.ovoz}`);
//     }
// }

// let ota = new Ota("qora", "chuqur ovoz");
// ota.otaMalumot(); 

// let bola = new Bola("qora", "chuqur ovoz", "Javohir");
// bola.bolaMalumot(); 


// inheritance (extends) — bitta class boshqasidan meros oladi.
// ya'ni pastdagisi yuqoridagi classdagi xususiyatlarni ishlata oladi.

// // 1. odam  talaba
// class Odam {
//   constructor(ism, yosh) {
//     this.ism = ism
//     this.yosh = yosh
//   }
//   salom() {
//     console.log("salom", this.ism, "yosh", this.yosh)
//   }
// }

// class Talaba extends Odam {
//   dars() {
//     console.log(this.ism, "dars qilyapti")
//   }
// }

// let otkr = new Talaba("Javohir", 17)
// otkr.salom()
// otkr.dars()


// // 2. hayvon  mushuk
// class Hayvon {
//   constructor(nom) {
//     this.nom = nom
//   }
//   tovush() {
//     console.log(this.nom, "tovush chiqaryapti")
//   }
// }

// class Mushuk extends Hayvon {
//   tovush() {
//     console.log(this.nom, "miyov")
//   }
// }

// let db = new Mushuk("BarESS")
// db.tovush()


// // 3. mashina sportmashina
// class Mashina {
//   constructor(nom, tez) {
//     this.nom = nom
//     this.tez = tez
//   }
//   yur() {
//     console.log(this.nom, "yurdi tezlik", this.tez)
//   }
// }

// class SportMashina extends Mashina {
//   turbo() {
//     console.log(this.nom, "turbo yoqildi")
//   }
// }

// let mash = new SportMashina("SUPRA", 120)
// mash.yur()
// mash.turbo()


// // 4. bank  karta
// class Bank {
//   constructor(ism, balans) {
//     this.ism = ism
//     this.balans = balans
//   }
//   balansniKorsat() {
//     console.log(this.ism, "balans:", this.balans)
//   }
// }

// class Karta extends Bank {
//   yech(s) {
//     if (this.balans >= s) {
//       this.balans -= s
//       console.log("yechildi", s)
//     } else {
//       console.log("pul yetarli emas")
//     }
//   }
// }

// let kart = new Karta("Utkur", 300)
// kart.yech(100)
// kart.balansniKorsat()


// // 5. hayot bola
// class Hayot {
//   constructor(ism) {
//     this.ism = ism
//   }
//   yashayapti() {
//     console.log(this.ism, "yashayapti")
//   }
// }































































// 1️⃣ Meros olish (extends) — Bola va Hayot
// // 1) Meros olish

// class Hayot {
//   constructor(ism) {
//     this.ism = ism
//   }

//   yashayapti() {
//     console.log(this.ism, "yashayapti")
//   }
// }

// class Bola extends Hayot {
//   oki() {
//     console.log(this.ism, "kitob o‘qiyapti")
//   }
// }

// let talaba = new Bola("Bekzod")
// talaba.yashayapti()
// talaba.oki()

// 2️⃣ BankAccount — Obyekt, private field, depozit/yech
// // 2) BankAccount

// class BankAccount {
//   #balans = 0

//   constructor(boshlangich = 0) {
//     this.#balans = boshlangich
//   }

//   depozit(sum) {
//     if (sum > 0) {
//       this.#balans += sum
//       console.log(sum, "qo‘shildi")
//     }
//   }

//   yech(sum) {
//     if (sum > 0 && this.#balans >= sum) {
//       this.#balans -= sum
//       console.log(sum, "yechildi")
//     } else {
//       console.log("Pul yetarli emas!")
//     }
//   }

//   getBalans() {
//     return this.#balans
//   }
// }

// let hisob = new BankAccount(100)
// hisob.depozit(50)
// console.log(hisob.getBalans())
// hisob.yech(30)
// console.log(hisob.getBalans())
// hisob.yech(200)
// console.log(hisob.getBalans())

// 3️⃣ OvqatAparat — Private metodlar
// // 3) Ovqat aparat

// class OvqatAparat {
//   #addGosh() {
//     console.log("Go‘sht qo‘shildi")
//   }

//   #addSuv() {
//     console.log("Suv qo‘shildi")
//   }

//   #addMakaron() {
//     console.log("Makaron qo‘shildi")
//   }

//   #addTuz() {
//     console.log("Tuz qo‘shildi")
//   }

//   tayyorla() {
//     console.log("Ovqat tayyorlanmoqda...")
//     this.#addGosh()
//     this.#addSuv()
//     this.#addMakaron()
//     this.#addTuz()
//     console.log("Ovqat tayyor!")
//   }
// }

// let aparat = new OvqatAparat()
// aparat.tayyorla()

// 4️⃣ Paynet — yashirin jarayon
// // 4) Paynet

// class Paynet {
//   constructor() {
//     this.balance = 0
//   }

//   addMoney(sum) {
//     this.#jarayon()
//     this.balance += sum
//     console.log("Pul o'tdi. Balans:", this.balance)
//   }

//   #jarayon() {
//     console.log("Jarayon boshlandi...")
//     console.log("Pul tushyapti...")
//   }

//   getPayment() {
//     console.log("Jami pul:", this.balance)
//   }
// }

// let pay = new Paynet()
// pay.addMoney(10000)
// pay.getPayment()

// 5️⃣ Try–Catch — Xatolarni tutish
// 5.1 foydalanuvchi ismi
// // 5.1) Error bilan ishlash

// function foydalanuvchiIsmi(ism) {
//   try {
//     if (!ism) throw new Error("Ism majburiy!")
//     console.log("Ism:", ism)
//   } catch (xato) {
//     console.log("Xato:", xato.message)
//   } finally {
//     console.log("Tugadi\n")
//   }
// }

// foydalanuvchiIsmi("Javohir")
// foydalanuvchiIsmi()

// 5.2 bo‘lish funksiyasi
// // 5.2) Bo‘lish

// function bolish(a, b) {
//   try {
//     if (b === 0) throw new Error("0 ga bo‘linmaydi!")
//     console.log(a / b)
//   } catch (xato) {
//     console.log("Xato:", xato.message)
//   }
// }

// bolish(24, 0)

// 6️⃣ CustomError, parol tekshirish, balansdan pul yechish
// // 6) MyCustomError

// class MyCustomError extends Error {
//   constructor(message) {
//     super(message)
//     this.name = "MyCustomError"
//   }
// }

// class Account {
//   #balance = 1000
//   #password = 1111

//   checkPassword(input) {
//     if (input !== this.#password) {
//       throw new MyCustomError("Parol noto‘g‘ri!")
//     }
//   }

//   withdraw(sum, pass) {
//     try {
//       this.checkPassword(pass)

//       if (sum <= 0) throw new MyCustomError("Noto‘g‘ri summa")
//       if (sum > this.#balance) throw new MyCustomError("Pul yetarli emas")

//       this.#balance -= sum
//       console.log("yechildi:", sum)
//       console.log("qolgan balans:", this.#balance)
//     } catch (xato) {
//       console.log("Xato:", xato.message)
//     } finally {
//       console.log("Jarayon tugadi.\n")
//     }
//   }
// }

// let user = new Account()
// user.withdraw(500, 1111)
// user.withdraw(2000, 1111)
// user.withdraw(100, 1234)
// user.withdraw(-50, 1111)

// 7️⃣ Promise — random raqam
// // 7) Random raqam

// let randomRaqam = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(Math.floor(Math.random() * 10))
//   }, 2000)
// })

// randomRaqam.then(result => console.log("Random:", result))

// 8️⃣ Promise — FizzBuzz
// // 8) FizzBuzz

// function fizzBuzz(n) {
//   return new Promise((res, rej) => {
//     if (n % 3 === 0 && n % 5 === 0) res("FizzBuzz")
//     else if (n % 3 === 0) res("Fizz")
//     else if (n % 5 === 0) res("Buzz")
//     else rej("Bu 3 tasidan emas")
//   })
// }

// fizzBuzz(15).then(console.log).catch(console.error)
// fizzBuzz(7).then(console.log).catch(console.error)

// 9️⃣ Uchta Promise — ketma-ket bajarish
// // 9) Ketma-ket promise

// function qadam(ms, text) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(text)
//       resolve(text + " tugadi")
//     }, ms)
//   })
// }

// qadam(1000, "qadam 1")
//   .then(() => qadam(1500, "qadam 2"))
//   .then(() => qadam(2000, "qadam 3"))
//   .then(() => console.log("Hammasi tugadi!"))

// 🔟 Async/Await — login tizimi
// // 10) Login

// function login(user, pass) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!user || !pass) return reject("Ism yoki parol kiritilmagan")

//       let db = [
//         { username: "javohir", password: "1111" },
//         { username: "otkir",   password: "2222" }
//       ]

//       let ok = db.find(u => u.username === user && u.password === pass)
//       ok ? resolve("Kirdi") : reject("Xato")
//     }, 500)
//   })
// }

// async function run() {
//   try {
//     let natija = await login("javohir", "1111")
//     console.log(natija)
//   } catch (xato) {
//     console.log(xato)
//   }
// }

// run()






// let sonlar = [1, 2, 3, 2, 4, 1, 2, 5, 1];
// let hisob = {};
// for (let son of sonlar) {
//   hisob[son] = (hisob[son] || 0) + 1;
// } bj/;;;;;;;;;;;l;;
// for (let kalit in hisob) {
//   if (hisob[kalit] === 1) delete hisob[kalit];
// }
// console.log(hisob);h


// menga 


// const express = require("express")
// const app = express()

// const cars = [
//   { id: 1, nom: "BMW", nomber: "01A777AA" },
//   { id: 2, nom: "Mercedes", nomber: "01B999BB" },
//   { id: 3, nom: "Cobalt", nomber: "01V123CD" }
// ]

// app.get("/", (req, res) => {
//   res.send(cars)
// })


const express = require("express")
const app = express()

let users = [
  { id: 1, ism: "javohir", yosh: 20 },
  { id: 2, ism: "otkir", yosh: 22 },
  { id: 3, ism: "ali", yosh: 19 }
]

app.get("/:id", (req, res) => {
  let userId = Number(req.params.id)
  let topildi = users.find(el => el.id === userId)
  res.send(topildi)
})

app.listen(3000)




// app.get('/', (req, res) => {
//     res.end('salom xush kelipsiz')

// })

// app.get


