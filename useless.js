window.onload = async function () {
    // await getFact();

    document.getElementById("getFact").addEventListener("click", getFact);
};

async function getFact() {
    let url = "https://uselessfacts.jsph.pl/api/v2/facts/random";

    let res = await fetch(url);
    let answer = await res.json();

    let fact = answer["text"];
    console.log(fact);

    document.getElementById("fact-box").innerText = fact;
}
