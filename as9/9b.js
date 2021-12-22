function sendRequest(){
const feedback = document.getElementById("Feedback");
var xhr = new XMLHttpRequest()
xhr.open("POST","/json",true)
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
xhr.onreadystatechange = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
		console.log(JSON.parse(xhr.response))
		feedback.innerHTML = JSON.parse(xhr.response).result;
		}
}
				    
let value1 = document.getElementById("FirstNumber").value;
let value2 = document.getElementById("LastNumber").value;
let value3 = document.getElementById("Operation").value;

xhr.send(JSON.stringify({ "FirstNumber": value1, "LastNumber": value2, "Operation":value3}));
}
