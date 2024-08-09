'use strict'



function determin(x, y) {
    if (x > 0 && y > 0) {
        return `Birinchi chorak (I chorak)`;
    } else if (x < 0 && y > 0) {
        return `Ikkinchi chorak (II chorak)`;
    } else if (x < 0 && y < 0) {
        return `Uchinchi chorak (III chorak)`;
    } else if (x > 0 && y < 0) {
        return `To‘rtinchi chorak (IV chorak)`;
    } else if (x === 0 && y === 0) {
        return `Nuqta koordinata boshida joylashgan (0, 0)`;
    } else if (x === 0) {
        return `Nuqta OY o‘qida joylashgan`;
    } else if (y === 0) {
        return `Nuqta OX o‘qida joylashgan`;
    }
}

const x = 4;
const y = -5;

const quadrant = determin(x, y);

// Natijani konsolga chiqarish
console.log(`Nuqta ${quadrant}.`);