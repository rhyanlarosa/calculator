"use strict";
function toText(btnValue) {
    document.getElementById('inputText').value = document.getElementById('inputText').value + btnValue;
}
function calculate() {
    var total = document.getElementById('inputText').value;
    if (total != "") {
        document.getElementById('inputText').value = eval(total);
        var result = document.getElementById('inputText').value;
        document.getElementById('history').innerHTML += "<option value=>" + total + "=" + result + "</option>";
        document.getElementById('inputText').value = "";
    }
    else {
        alert("Check Inputed Value");
    }
}
function clearText(clcdn) {
    if (clcdn == 'C') {
        document.getElementById('inputText').value = "";
    }
    else {
        document.getElementById('inputText').value = "";
        document.getElementById('history').innerHTML = "";
    }
}
