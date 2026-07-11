let btn = document.querySelector("button");
let para = document.querySelector("p");


btn.addEventListener("click", ()=>{
  let fact =  getFact();
});

let url = "https://catfact.ninja/fact";

async function  getFact() {
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);
    }catch(e){
        console.log("ERROR - ", e);
    }
}