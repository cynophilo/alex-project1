let rest = 10 - 6.78;
let value;
console.log(Math.floor(rest / 10), 'x 10$');
rest = rest % 10;
console.log(Math.floor(rest / 5), 'x 5$');
rest = rest % 5;
console.log(Math.floor(rest / 2), 'x 2$');
rest = rest % 2;
console.log(Math.floor(rest / 1), 'x 1$');
rest = rest % 1;
console.log(Math.floor(rest / 0.25), 'x .25$');
rest = rest % 0.25;
console.log(Math.floor(rest / 0.10), 'x .10$');
rest = rest % 0.10;
console.log(Math.floor(rest >= 0.03 ? 1 : 0), 'x .05$')
rest = rest % 0,05