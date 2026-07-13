let btn = document.querySelector("#cat");

btn.addEventListener("click", async()=>{
    let fact = await getFact();
    let para = document.querySelector("#result");
    para.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function  getFact() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("ERROR - ", e);
        return "no fact found";
    }
}



let btn2 = document.querySelector("#dogImg");

let url2 = "https://dog.ceo/api/breeds/image/random";

btn2.addEventListener("click", async()=>{

});


async function getImg() {
    try{
        let res = await axios(url2);
        return res.data;
    }catch(e){
        console.log("ERROR - ", e);
        return "no Image found";
    }
}