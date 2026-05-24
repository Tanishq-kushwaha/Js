# JavaScript Practice Questions
### (Strictly based on Chapter 14 & 15 Notes)

---

## 🟢 EASY — Concept Warmup

**Q1. Template Literals**
Yeh 2 variables hain:
```js
let item = "Pizza";
let price = 150;
```
Template literal use karke print karo:
`"Item: Pizza, Price: 150 rupees"`

---

**Q2. Arithmetic Operators**
```js
let a = 20;
let b = 6;
```
Alag alag console.log mein print karo: a+b, a-b, a*b, a%b, a**b

---

**Q3. Comparison — Predict the Output**
Pehle socho kya aayega, phir run karo:
```js
console.log(10 > 5);
console.log(10 === "10");
console.log(10 == "10");
console.log(7 !== 7);
```

---

**Q4. if Statement**
```js
let temperature = 42;
```
Agar temperature 40 se zyada ho toh print karo: `"It's too hot!"`

---

**Q5. String — trim & toUpperCase**
```js
let city = "   mumbai   ";
```
Trim karo aur uppercase mein print karo: `"MUMBAI"`

---

**Q6. Array Basics**
```js
let fruits = ["mango", "apple", "banana", "grape", "litchi"];
```
Print karo:
- Pehla fruit
- Teesra fruit
- Array ki total length

---

## 🟡 MEDIUM — Logic Building

**Q7. if-else — Voting**
```js
let age = 17;
```
- 18+ → `"You can vote"`
- 18 se kam → `"You cannot vote"`

---

**Q8. else-if — Grade System**
```js
let marks = 45;
```
- 80+ → `"A+"`
- 60-79 → `"A"`
- 33-59 → `"B"`
- 33 se kam → `"F"`

---

**Q9. Logical AND (&&)**
```js
let num = 35;
```
Check karo: num 10 se bada **aur** 50 se chhota ho
- Dono sahi → `"Number is in range"`
- Warna → `"Out of range"`

---

**Q10. Logical OR (||)**
```js
let color = "black";
```
Agar color `"red"` **ya** `"black"` ho → `"Dark color"`
Warna → `"Light color"`

---

**Q11. Switch — Traffic Light**
```js
let signal = "green";
```
- `"red"` → `"Stop"`
- `"yellow"` → `"Slow down"`
- `"green"` → `"Go"`
- default → `"Broken light"`

---

**Q12. String — indexOf & slice**
```js
let str = "I Love Coding";
```
- `"Love"` ka index nikalo
- Index 7 se aage ka part slice karo → `"Coding"`

---

**Q13. String — replace & repeat**
```js
let str = "I love Coding";
```
- `"love"` ko `"enjoy"` se replace karo
- `"Ha"` ko 4 baar repeat karo

---

**Q14. Array Methods — push, pop, unshift, shift**
```js
let cars = ["audi", "bmw", "maruti"];
```
- `"toyota"` end mein add karo
- Start se ek item hata do (aur print karo kya hata)
- `"ferrari"` beginning mein add karo
- Final array print karo

---

**Q15. Array — includes & indexOf**
```js
let languages = ["HTML", "CSS", "JavaScript", "Python"];
```
- `"CSS"` included hai? (true/false print karo)
- `"JavaScript"` ka index kya hai?
- `"Java"` included hai?

---

## 🔴 HARD — Real World Problems

**Q16. Popcorn Price System**
*(Yeh tumhare notes ka Q hi hai — ab khud karo bina dekhe!)*
```js
let size = "M"; // XL=250, L=200, M=100, S=50
```
Sahi price console mein print karo using if-else if.

---

**Q17. ATM Machine**
```js
let balance = 5000;
let withdraw = 2000;
```
- withdraw > 0 **&&** withdraw <= balance → `"Success. Remaining: ₹XXXX"`
- withdraw > balance → `"Insufficient balance"`
- withdraw <= 0 → `"Invalid amount"`

---

**Q18. Shopping Cart**
```js
let cart = ["apple", "bread", "milk", "eggs"];
```
- `"butter"` end mein add karo
- `"bread"` ka index nikalo, phir usse `"cheese"` se replace karo (splice use karo)
- Final cart print karo

---

**Q19. Password Checker**
```js
let password = "Hello@123";
```
Check karo (&& use karo):
- `password.length > 8`
- `password.includes("@")`

Dono sahi → `"Strong password"`
Warna → `"Weak password"`

---

**Q20. Marks Sorter**
```js
let scores = [45, 12, 89, 34, 67, 23, 99, 56];
```
- Ascending order mein sort karo (chote se bade) → `scores.sort((a,b) => a-b)`
- Descending order mein sort karo (bade se chote) → `scores.sort((a,b) => b-a)`
- Dono print karo

---

*Happy Coding! 🚀 Har question browser console ya VS Code mein khud run karo.*
