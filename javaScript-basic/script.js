var x = 5;
/*
if(x == 5){
	alert("YEY!!!");
}else if(x > 5){
	alert("large than 5");
}else{
	alert("less than 5");
}

if(x != 5 || x > 10){

}

alert(x++);
alert(++x);


x--;
--x;

//	loops:
var y = 7;
while(y < 10){
//	alert(y++);
}

do{
//	alert("x");
	y++;
}while(y < 10);

for(var i = 0; i < 5; i++){
//	alert(i);
}



function name(x,y,z){
	var myVar = x + y + z;
//	alert(myVar);
	return myVar;
}

name(3,4,5);
//alert(name(3,4,5));

var arr = [];
arr[0] = 3;
arr[1] = "maayan";
arr[2] = false;

//alert(arr.length);
*/
var arr2 = [2,3,"d","5"];

var targil = ["a", "b", "c", "d"];

var index = targil.length;
var reverse = [];
for(var i = 0; i < targil.length; i++){
	reverse[i] = targil[index-1];
	index--;
}



console.log(reverse);
console.info("info");
//console.error("info");
console.warn("info");

var reverse = [5,4,3,2,1];


//console.log(reverse);

var player = new Object();
player.name = "maayan";
player.score = 7;
player.rank = 2;

var player2 = {name: "moshe", score: 6, rank : 3};

console.log(player.name);

function playerDetails(){
	console.log(this.name + ", " + this.score + ", " + this.rank);
}

player.toString = playerDetails;
player.toString();
player2.getDetails = playerDetails;
player2.getDetails();

// for advanced OO JavaScript read about PROTOTYPE!!!

























