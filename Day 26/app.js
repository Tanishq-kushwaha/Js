let btn = document.querySelector("button");


let url = "https://catfact.ninja/fact";

async function  getFact() {
    try{
        let res = await axios.get(url);
        console.log(res);
    }catch(e){
        console.log("ERROR - ", e);
    }
}