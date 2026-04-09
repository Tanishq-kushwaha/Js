
const student = {
    name: "tanishq",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        return `${this.name}, got avg marks = ${avg}`;
    }
};

student.getAvg();


//  object ke andar
const user = {
    name: "tanishq",
    greet: function () {
        console.log(this.name);
    }
};
user.greet();

// normal function me this 

function show() {
    console.log(this);
}

show();


// arrow function me this 

const user1 = {
    name: "tanishq",
    greet: () => {
        console.log(this.name);
    }
};
user1.greet(); // output --> undefined





const obj = {
    name: "tanishq",
    show: function () {
        const inner = () => {
            return this.name;
        };
        return inner();
    }
};

console.log(obj.show());
