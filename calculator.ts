function toText(btnValue:any){
    (document.getElementById('inputText')as HTMLInputElement).value = (document.getElementById('inputText')as HTMLInputElement).value +btnValue; 
}

function calculate(){
    let total = (document.getElementById('inputText')as HTMLInputElement).value;

    if(total!=""){
        (document.getElementById('inputText')as HTMLInputElement).value = eval(total)
        let result:String =(document.getElementById('inputText')as HTMLInputElement).value;
        (document.getElementById('history')as HTMLSelectElement).innerHTML += "<option value=>"+total+"="+result+"</option>";
        (document.getElementById('inputText')as HTMLInputElement).value = ""
    }else{
        alert("Check Inputed Value")
    }
}

function clearText(clcdn:String){
    if(clcdn=='C'){
        (document.getElementById('inputText')as HTMLInputElement).value = ""  
    }else{
        (document.getElementById('inputText')as HTMLInputElement).value = ""; 
        (document.getElementById('history')as HTMLSelectElement).innerHTML = ""
    }
}