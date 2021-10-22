const term = document.querySelector(".term");
const checkButton = document.querySelector(".check");
const definition = document.querySelector(".definition");

const NextButton = document.querySelector(".next");

const pegs = {
    a: "1",
    b: "4",
    c: "3",
    d: "3",
    e: "3",
    f: "4",
    g: "4",
    h: "7",
    i: "8",
    j: "7",
    k: "8",
    l:  "9",
    m:  "7",
    n:   "7",
    0:  "9",
    p: "10",
    q:  "1",
    r:  "4",
    s:  "2",
    t:  "4",
    u:  "7",
    v: "4",
    w:  "w",
    x:  "2",
    y: "7",
    z:  "1",
    ',': "8",
    '.': "9",
    ";": "10",
    '?': "10"

};

var data = Object.entries(pegs);
 function getWord(){
    random = data[Math.floor(Math.random() * data.length)];
    term.innerHTML = `<h3>${random[0]}</h3>`
    definition.innerHTML = `<h3>${random[1]}</h3>`
 }


checkButton.addEventListener('click', function(){
    definition.style.display="block";
});

NextButton.addEventListener('click', function(){
    definition.style.display="none";
    getWord();
});

