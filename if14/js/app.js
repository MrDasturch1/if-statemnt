"use strick"

let a = 4,
    b = 8,
    c = 3;

if (a < b && a < c) {
    console.log(`Kichik son a = 4`);
} else if (b < a && b < c) {
    console.log(`Kichik son b = 8`);
} else {
    console.log(`kichik son c = 3`);
}


if (a > b && a > c) {
    console.log(`Kattasi a = 4`)
} else if (b > a && b > c) {
    console.log(`Kattasi b = 8`);
} else {
    console.log(`Kattasi c = 3`);
}