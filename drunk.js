var numA;
var numB;
var numsum;
var show;
var userinp;
show = document.getElementById("problem");
numA = Math.floor(Math.random() * 10) + 1;
numB = Math.floor(Math.random() * 5) + 1;
show.innerHTML = numA + " + " + numB + " = what?";
function clk() {
    numsum = numA + numB;
    userinp = document.getElementById("inp").value;
    if (numsum == userinp) {
        alert("Yo! You are not drunk!");
    }
    else {
        alert("Oppss! You are drunk!");
    }
}