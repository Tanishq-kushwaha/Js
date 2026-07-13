let btn = document.querySelector("#cat");

btn.addEventListener("click", async () => {
    let fact = await getFact();
    let para = document.querySelector("#result");
    para.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("ERROR - ", e);
        return "no fact found";
    }
}



let btn2 = document.querySelector("#dogImg");

let url2 = "https://dog.ceo/api/breeds/image/random";

btn2.addEventListener("click", async () => {
    let link = await getImg();
    let img = document.querySelector("#imgResult");
    img.setAttribute("src", link);
    // img.src = link;
});


async function getImg() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        console.log("ERROR - ", e);
        return "no Image found";
    }
}


const joke = "https://icanhazdadjoke.com/";
async function getJoke() {
    try {
        const config = { headers: { Accept: "application/json" } };
        let res = await axios.get(joke, config);
        console.log(res.data.joke);
    } catch (err) {
        console.log(err);
    }
}


let url3 = "http://universities.hipolabs.com/search?name=";

let country = "nepal";
async function getCollege() {
    try{
        let res = await axios.get(url3+country);
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}