// cat fact API section
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

// Dog images API section

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

// Dad joke API section 

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

// University API section 

let url3 = "http://universities.hipolabs.com/search?name=";

let buTon = document.querySelector("#country");
let input = document.querySelector("input");

buTon.addEventListener("click", async () => {
    let country = input.value;
    console.log(country);
    let colArr = await getColleges(country);
    let names = show(colArr);
    let ul = document.querySelector("#list");
    ul.innerText = names;
});

function show(colArr) {
    for (let col of colArr) {
        return col.name;
    }
}
async function getColleges(country) {
    try {
        let res = await axios.get(url3 + country);
        return res.data;
    }
    catch (err) {
        console.log(err);
        return [];
    }
}
