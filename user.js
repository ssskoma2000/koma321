

// ---

// 🧩 Asosiy poydevor

// 1️⃣ O‘zgaruvchilar (let, const, var) – ma’lumot saqlash uchun.
// 2️⃣ Ma’lumot turlari (Data types) – string, number, boolean, object, array, null, undefined.
// 3️⃣ Operatorlar – matematik, taqqoslash va mantiqiy amallar.
// 4️⃣ Shart operatorlari (if, else, switch) – qaror qabul qilish uchun.
// 5️⃣ Sikllar (for, while, do while) – kodni takrorlab bajarish uchun.
// 6️⃣ Function (funksiya) – kodni qayta ishlatish uchun.
// 7️⃣ return – funksiyadan qiymatni qaytaradi.
// 8️⃣ Scope – o‘zgaruvchining amal qilish sohasi.
// 9️⃣ Hoisting – o‘zgaruvchi yoki funksiyani yuqoriga ko‘tarish holati.
// 10️⃣ Closure – ichki funksiya tashqi qiymatni eslab qoladi.


// ---

// 🧠 Ma’lumot tuzilmalari

// 11️⃣ Array (massiv) – bir nechta qiymatni tartibli saqlaydi.
// 12️⃣ Array metodlari (map, filter, reduce, find, sort) – ma’lumotni qayta ishlash.
// 13️⃣ Object (obyekt) – kalit-qiymat shaklida ma’lumot saqlaydi.
// 14️⃣ Map / WeakMap – kalit-qiymat juftliklari, tezkor izlash uchun.
// 15️⃣ Set / WeakSet – faqat noyob qiymatlarni saqlaydi.
// 16️⃣ JSON – ma’lumot almashish formati (server bilan ishlashda).


// ---

// ⚙️ OOP (Obyektga yo‘naltirilgan dasturlash)

// 17️⃣ Class – obyekt yaratish shabloni.
// 18️⃣ Constructor – class ichida boshlang‘ich qiymatlarni beruvchi funksiya.
// 19️⃣ this – obyektning o‘zini bildiradi.
// 20️⃣ Encapsulation – ma’lumotni tashqaridan yashirish (# bilan).
// 21️⃣ Inheritance (meros olish) – bitta classdan boshqasiga xususiyat o‘tadi.
// 22️⃣ Polymorphism – bir xil nomli metodlar turlicha ishlaydi.
// 23️⃣ Abstraction – foydalanuvchiga faqat kerakli qismini ko‘rsatish.


// ---

// ⚡ Asinxronlik

// 24️⃣ Callback – funksiya ichida boshqa funksiyani chaqirish.
// 25️⃣ Promise – kechikkan natijani ifodalaydi (then, catch, finally).
// 26️⃣ async / await – asinxron kodni soddaroq yozish usuli.
// 27️⃣ setTimeout / setInterval – vaqt bilan ishlash.
// 28️⃣ Event Loop – JS asinxron ishlash tartibini boshqaradi.




// 🖥 Node.js va backend

// 43️⃣ fs (File System) – fayllarni o‘qish va yozish.
// 44️⃣ http / Express.js – server yaratish va so‘rovlarni boshqarish.







// "nide js" deb yozgansan — bu Node.js bo‘ladi.
// Keling juda oddiy va qisqa qilib tushuntiraman (senga mos uslubda):

// ✅ Node.js nima? (eng sodda tilda)

// Node.js — bu JavaScript kodini brauzerdan tashqarida, kompyuterning o‘zida ishlatish uchun yaratilgan platforma.

// Oddiy qilib:

// Brauzer → kodni faqat sayt ichida ishlatadi

// Node.js → kodni kompyuterning o‘zida ishlatadi (server, terminal, backend)













// ---

// 🧩 1. O‘zgaruvchilar (let, const, var)

// let yosh = 20;
// const ism = "Ali";
// var shahar = "Toshkent";

// 🟢 let o‘zgaradi, const o‘zgarmaydi, var eski usul.


// ---

// 2. Ma’lumot turlari (Data types)

// let matn = "Salom"; // string
// let son = 10;       // number
// let bor = true;     // boolean
// let user = { ism: "Ali", yosh: 20 }; // object
// let royxat = [1, 2, 3]; // array
// let yoq = null;     // qiymat yo‘q
// let aniqlanmagan;   // undefined

// 🟢 JS’da 7 ta asosiy tur mavjud.


// ---

// 3. Operatorlar

// let a = 5 + 2;   // + qo‘shish
// let b = 10 - 3;  // - ayirish
// let c = 4 * 2;   // * ko‘paytirish
// let d = 8 / 2;   // / bo‘lish
// let e = 10 % 3;  // % qoldiq
// let f = 5 > 3;   // true
// let g = (5 === "5"); // false (tur ham tekshiradi)

// 🟢 Hisob-kitob, solishtirish, mantiqiy amallar uchun.


// ---

// 4. if / else

// let son = 10;
// if (son > 0) {
//   console.log("Musbat");
// } else {
//   console.log("Manfiy");
// }

// 🟢 Shartga qarab turli kodni bajaradi.


// ---

// 5. switch

// let kun = 2;
// switch (kun) {
//   case 1: console.log("Dushanba"); break;
//   case 2: console.log("Seshanba"); break;
//   default: console.log("Boshqa kun");
// }

// 🟢 Ko‘p shartlar bo‘lsa if/else o‘rniga ishlatiladi.


// ---

// 6. for sikl

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// 🟢 Kodni 5 marta takrorlaydi.


// ---

// 7. while sikl

// let i = 1;
// while (i <= 3) {
//   console.log(i);
//   i++;
// }

// 🟢 Shart rost bo‘lsa, takrorlanadi.


// ---

// 8. function

// function salom(ism) {
//   return "Salom, " + ism;
// }
// console.log(salom("Javohir"));

// 🟢 Kodni qayta ishlatish uchun.


// ---

// 9. Arrow function

// const plus = (a, b) => a + b;
// console.log(plus(3, 4));

// 🟢 Qisqaroq yozilishi.


// ---

// 10. return

// function kvadrat(x) {
//   return x * x;
// }
// console.log(kvadrat(5));

// 🟢 Funksiya natijasini tashqariga qaytaradi.


// ---

// 11. Massiv (Array)

// let sonlar = [1, 2, 3, 4];
// console.log(sonlar[0]); // 1

// 🟢 Bir nechta qiymatni saqlaydi.


// ---

// 12. Array metodlari

// let arr = [1, 2, 3];
// arr.push(4);   // oxiriga qo‘shadi
// arr.pop();     // oxirini o‘chiradi
// arr.shift();   // boshini o‘chiradi
// arr.unshift(0);// boshiga qo‘shadi
// let yangi = arr.map(x => x * 2); // har birini 2 ga ko‘paytiradi

// 🟢 Ro‘yxatlar bilan ishlashni osonlashtiradi.


// ---

// 13. Object

// let user = { ism: "Ali", yosh: 25 };
// console.log(user.ism);
// user.yosh = 30;

// 🟢 Ma’lumotni kalit-qiymat shaklida saqlaydi.


// ---

// 14. Destructuring

// let { ism, yosh } = user;
// console.log(ism, yosh);

// 🟢 Obyektdan qiymatlarni tez ajratadi.


// ---

// 15. Spread va Rest

// let sonlar = [1, 2, 3];
// let yangi = [...sonlar, 4, 5];
// console.log(yangi); // [1,2,3,4,5]

// function yigindi(...raqamlar) {
//   return raqamlar.reduce((a, b) => a + b);
// }
// console.log(yigindi(1, 2, 3));

// 🟢 Ma’lumotni kengaytirish yoki yig‘ish.


// ---

// 16. Template literal

// let ism = "Ali";
// console.log(Salom, ${ism}!);

// 🟢 Dinamik matn yozish.


// ---

// 17. Callback

// function bajar(ish, callback) {
//   console.log("Ish:", ish);
//   callback();
// }
// bajar("Dars", () => console.log("Tugadi!"));

// 🟢 Funksiya ichida boshqa funksiyani chaqirish.


// ---

// 18. Promise

// let so‘z = new Promise((resolve, reject) => {
//   let x = true;
//   x ? resolve("Tugadi!") : reject("Xato!");
// });
// so‘z.then(res => console.log(res)).catch(err => console.log(err));

// 🟢 Asinxron (kechikkan) ishni bajaradi.


// ---

// 19. async / await

// async function yuklash() {
//   let javob = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await javob.json();
//   console.log(data);
// }
// yuklash();

// 🟢 Promise ni osonroq yozish usuli.


// ---

// 20. setTimeout / setInterval

// setTimeout(() => console.log("3 soniyadan keyin"), 3000);
// setInterval(() => console.log("Har 2 soniyada"), 2000);

// 🟢 Kechikkan yoki takroriy bajarish uchun.


// ---

// 21. DOM

// document.querySelector("h1").innerText = "Yangilandi!";

// 🟢 HTML elementini JS orqali o‘zgartiradi.

// > KOMA:
// ---

// 22. Event

// let btn = document.querySelector("button");
// btn.addEventListener("click", () => alert("Bosildi!"));

// 🟢 Foydalanuvchi harakatiga javob beradi.


// ---

// 23. JSON

// let user = { ism: "Ali" };
// let json = JSON.stringify(user);
// let obj = JSON.parse(json);

// 🟢 Ma’lumotni server bilan uzatishda ishlatiladi.


// ---

// 24. try / catch

// try {
//   throw "Xato!";
// } catch (x) {
//   console.log(x);
// }

// 🟢 Xatolarni ushlab olish uchun.


// ---

// 25. LocalStorage

// localStorage.setItem("ism", "Ali");
// console.log(localStorage.getItem("ism"));

// 🟢 Brauzerda ma’lumotni saqlaydi.


// ---

// 26. Date

// let hozir = new Date();
// console.log(hozir.getFullYear());

// 🟢 Sana va vaqt bilan ishlaydi.


// ---

// 27. Math

// let tasodif = Math.floor(Math.random() * 10);
// console.log(tasodif);

// 🟢 Tasodifiy sonlar va matematik amallar.


// ---

// 28. Strict mode

// "use strict";
// let x = 10; // qat’iy rejim, xatoni tez ko‘rsatadi


// ---

// 29. Class (OOP)

// class Odam {
//   constructor(ism, yosh) {
//     this.ism = ism;
//     this.yosh = yosh;
//   }
//   salom() {
//     return Salom, men ${this.ism};
//   }
// }
// let ali = new Odam("Ali", 25);
// console.log(ali.salom());

// 🟢 Obyekt yaratish uchun shablon.


// ---

// 30. Inheritance (Meros olish)

// class Ota {
//   gap() { console.log("Men otaman"); }
// }
// class Bola extends Ota {}
// let b = new Bola();
// b.gap();

// 🟢 Bitta classdan boshqasiga xususiyat o‘tadi.


