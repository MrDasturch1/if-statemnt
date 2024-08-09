"use strick"

let a = 5,
    b = 7,
    c = 9;

if (a + b > a + c && a + b > b + c) {
    console.log(`Yigindisi eng kichigi a + b = 5 + 9`);
} else if (a + c > a + b && a + c > b + c) {
    console.log(`Yigindisi eng kichigi a + b = 5 + 7`);
} else {

    console.log(`Yigindisi eng kattasi b + c = 7 + 9`);
}

if (a + b > a + c && a + b < b + c) {
    console.log(`Yigindisi eng kichigi a + b = 5 + 7`);
} else if (a + c > a + b && a + c < b + c) {
    console.log(`Yigindisi eng kattasi a + c = 5 + 9`);
} else {
    console.log(`Yigindisi eng kattasi b + c = 7 + 9`);
}