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