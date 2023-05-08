let num = 50;

for( let i = 1; i < 10; i++) {
    console.log(num++);
    ++num;
}

for( let i = 1; i < 10; i++) {
    console.log(++num);
    ++num;
}

for( let i = 1; i < 10; i++) {
    console.log(num++);
    num++;
}

for( let i = 1; i < 10; i++) {
    console.log(num);
    ++num;
}

let a = '1, 2, 3';
    b = '1, 2, 3';

console.log(a === b)