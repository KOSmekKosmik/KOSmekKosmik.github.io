var string;
var myButton = document.getElementById("my");

string = prompt("hej","hello");
function alertButton() {
 myButton.textContent = string
 
}
function resetbutton(){
    string = prompt("hej","hello");
}