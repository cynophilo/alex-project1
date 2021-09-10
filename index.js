let rest = 10 - 6.78;
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
// nbr de piece à retourner: Math.floor(rest / 0.05);
// reste apres: rest % 0.05;
// Plus grand que 0 et plus petit 0.05 => ]0, 0.05[
// {0.01, 0.02, 0.03, 0.04}
// 0      0     1     1
// (rest >= 0.03 ? 1 : 0)

