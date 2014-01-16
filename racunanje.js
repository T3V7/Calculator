s = 0;
operacija = 0;
st1 = 0;
st2 = 0;
result = 0;
	document.getElementById("dot").disabled=true;
function numAdd(x, y){
		if (s == 0){
			s=y;
			document.getElementById("dot").disabled=false;
			}
		else{
			s = s + y;
		}
		document.getElementById("tb").value = s;
		}
function plus(z){
	st1 = s;
	s = 0;
	document.getElementById("tb").value = s;
	operacija = "+";
	document.getElementById("plus").disabled=true;
	document.getElementById("minus").disabled=true;
	document.getElementById("divide").disabled=true;
	document.getElementById("multiply").disabled=true;
	
	}
	
function minus(f){
	st1 = s;
	s = 0;
	document.getElementById("tb").value = s;
	operacija = "-";
	document.getElementById("plus").disabled=true;
	document.getElementById("minus").disabled=true;
	document.getElementById("divide").disabled=true;
	document.getElementById("multiply").disabled=true;
	
	}
	
function multiply(g){
	st1 = s;
	s = 0;
	document.getElementById("tb").value = s;
	operacija = "*";
	document.getElementById("plus").disabled=true;
	document.getElementById("minus").disabled=true;
	document.getElementById("divide").disabled=true;
	document.getElementById("multiply").disabled=true;
	
	}
function divide(e){
	st1 = s;
	s = 0;
	document.getElementById("tb").value = s;
	operacija = "/";
	document.getElementById("plus").disabled=true;
	document.getElementById("minus").disabled=true;
	document.getElementById("divide").disabled=true;
	document.getElementById("multiply").disabled=true;
	
	}
function calculate(){
	document.getElementById("plus").disabled=false;
	document.getElementById("minus").disabled=false;
	document.getElementById("divide").disabled=false;
	document.getElementById("multiply").disabled=false;
	document.getElementById("dot").disabled=true;
	st2 = s
	if (operacija === "+"){
	
		result = Number(st1) + Number(st2);
		document.getElementById("tb").value = result;
		s = result;
		}
	if (operacija === "-"){
		result = Number(st1) - Number(st2);
		document.getElementById("tb").value = result;
		s = result;
		}
	if (operacija === "*"){
		result = Number(st1) * Number(st2);
		document.getElementById("tb").value = result;
		s = result;
		}
	if (operacija === "/"){
		result = Number(st1) / Number(st2);
		document.getElementById("tb").value = result;
		s = result;
		}
}
function Clear(){
	document.getElementById("dot").disabled=true;
	document.getElementById("plus").disabled=false;
	document.getElementById("minus").disabled=false;
	document.getElementById("divide").disabled=false;
	document.getElementById("multiply").disabled=false;
	s = 0
	operacija = 0
	st1 = 0
	st2 = 0
	result = 0
	document.getElementById("tb").value = s;
}
function dot(do1){
			s = s + do1;
		document.getElementById("tb").value = s;
		document.getElementById("dot").disabled=true;
}
	

