let num = 121;
let a = 0;
let rev = 0;
let temp = num;

while(temp>0){
	a = temp%10;
      rev = (rev*10)+a;
      temp = Math.floor(temp/10);
}

if(temp = rev){
	console.log("Palindrome");
}
else{
	console.log("Not a palindrome");
}