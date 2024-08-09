let A = 7;
let B = 7;
let C = 7;
let D = 5;


if (A === B && B === C && A !== D) {
    console.log("D soni boshqa: Dning tartib raqami = 4");
} else if (A === B && B === D && A !== C) {
    console.log("C soni boshqa: Cning tartib raqami = 3");
} else if (A === C && C === D && A !== B) {
    console.log("B soni boshqa: Bning tartib raqami = 2");
} else if (B === C && C === D && B !== A) {
    console.log("A soni boshqa: Aning tartib raqami = 1");
} else {
    console.log("Hech qanday uchta son teng emas yoki barcha sonlar teng.");
}