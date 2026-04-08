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

