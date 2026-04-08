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
            console.log(this.name)
        };
        inner();
    }
};

console.log(obj.show());
