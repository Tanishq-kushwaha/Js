async function greet() {
    // throw "error";
    return "hello";
}


greet().then((result) => {
    console.log("fulfilled");
    console.log("Result was:",result);
})
.catch(()=>{
        console.log("some error");
    });


    let demo = async ()=>{
        return 5;
    }