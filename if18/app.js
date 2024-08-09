let A = 5;
let B = 7;
let C = 5;


if (A === B && A !== C) {
    console.log("C soni boshqa: Cning tartib raqami = 3");
} else if (A === C && A !== B) {
    console.log("B soni boshqa: Bning tartib raqami = 2");
} else if (B === C && B !== A) {
    console.log("A soni boshqa: Aning tartib raqami = 1");
} else {
    console.log("Hamma sonlar o'zaro teng yoki birorta ham teng son yo'q.");
}