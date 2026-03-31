let fruits = ["mango", "apple", "banana", "litchi", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}
console.log("backward");
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(i, fruits[i])
}


// nested loops with nested array
let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder women", "flash"]];
for (let i = 0;  i > heroes.length; i++) {
    console.log(`list #${i}`);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(heroes[i][j]);
    }
}


