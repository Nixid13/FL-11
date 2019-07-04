let a1 = +prompt('Input value for a1(Xa)', '');
let a2 = +prompt('Input value for a2(Ya)', '');
let b1 = +prompt('Input value for b1(Xb)', '');
let b2 = +prompt('Input value for b2(Yb)', '');
let c1 = +prompt('Input value for c1(Xc)', '');
let c2 = +prompt('Input value for c2(Yc)', '');
const divider = 2;

if (a1 === b1 && a2 === b2) {
    console.log(false);
} else {
    console.log((a1 + b1) / divider === c1 && (a2 + b2) / divider === c2);
}


