const input1 = Number(document.getElementById("veld1"));
const input2 = Number(document.getElementById("veld2"));
const knop = document.getElementById("btn");
let resultaat = document.getElementById("result");

knop.addEventListener("click", function(){
    sum(input1, input2);
});

function sum (){
    console.log("succes")
    inter = input2 * input2;
    resultaat.value = inter;

}






// -=-------=----------=-------=---------=-----
const myName = {
    Name: "Dennis",
    Surname: "Meijboom"
};
let myStatus = "happy";
const plc = document.getElementById("placeholder");

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        plc.innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "https://api.myjson.com/bins/1095o0", true);
    xhttp.send();
  }
loadDoc();


// jQuery 
$("#DataBtnj").click(function(){
     $("#placeholder2").load("https://api.myjson.com/bins/1095o0");
});

//
document.getElementById('DataBtn').addEventListener('click', fetchUserData);
    
        function fetchUserData(){
            fetch('https://api.myjson.com/bins/1095o0')
                .then(response => response.json())
                .then(json => console.log(json))
        }

// https://api.myjson.com/bins/1095o0