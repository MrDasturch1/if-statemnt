let A = 3;
let B = 5;
let C = 7;


if ((A < B && B < C) || (A > B && B > C)) {

    A *= 2;
    B *= 2;
    C *= 2;
} else {

    A = -A;
    B = -B;
    C = -C;
}


console.log("A =", A);
console.log("B =", B);
console.log("C =", C);