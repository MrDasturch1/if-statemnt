"use strick"

let x = 4,
    y = 1,
    z = 3;

if (x < y && x < z) {
    console.log(`Kichik son x=${x}`);
} else if (y < x && y < z) {
    console.log(`
            Kichik son y = ${y}`);
} else {
    console.log(`kichik son z = ${z} `);
}