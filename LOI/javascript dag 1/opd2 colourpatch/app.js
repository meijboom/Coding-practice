const sliderContainer = document.getElementById("slidercontainer");
const sliderR = document.getElementById("r");
const sliderG = document.getElementById("g");
const sliderB = document.getElementById("b");
const sliderA = document.getElementById("a");
const outputR = document.getElementById("outR");
const outputG = document.getElementById("outG");
const outputB = document.getElementById("outB");
const outputA = document.getElementById("outA");
const myBody = document.getElementsByTagName("body")[0];
const btnRandom = document.getElementById("randomizer");
sliderContainer.addEventListener("input", generateRGBA);

btnRandom.addEventListener("click", function(){
    //get 3 random values
    rr = getRandomArbitrary(0, 255);
    gg = getRandomArbitrary(0, 255);
    bb = getRandomArbitrary(0, 255);
    aa = getRandomArbitrary(0, 1);
    rgba2 = `rgba(${rr},${gg},${bb},${aa})`;
    myBody.style.backgroundColor = rgba2;
});

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};

function generateRGBA() {
    outputR.value = sliderR.value
    outputG.value = sliderG.value
    outputB.value = sliderB.value
    outputA.value = sliderA.value
    let rgba = `rgba(${sliderR.value},${sliderG.value},${sliderB.value},${sliderA.value})`;
    console.log(rgba);
    myBody.style.backgroundColor = rgba;
};

