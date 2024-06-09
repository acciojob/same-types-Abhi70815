function isSameType(value1, value2) {
  //your js code here
	let v1=typeof(value1);
	let v2=typeof(value2);
	if(v1===v2){
return true;
	}
	else{
return false;
	} 
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
