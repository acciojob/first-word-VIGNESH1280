function firstWord(s) {
  // your code here
	s.trim();
	const spIdx=s.indexOf(' ');
	if(spIdx===-1){
		return s;
	}
	
		return s.substring(0, spIdx);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
