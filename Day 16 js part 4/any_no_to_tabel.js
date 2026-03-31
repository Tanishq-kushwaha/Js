let num = prompt("enter a no");
num = parseInt(num);
for (let i = num; i <= num * 10; i = i + num) {
    console.log(i);
}