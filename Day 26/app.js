let btn = document.querySelector("button");


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