// Code
var SecBlock = document.getElementById("chooseBlock");
var ButMain = document.getElementById("MainBlock");
var AimBlock = document.getElementById("aim");
var contentAll = document.getElementById("Content");
var mes = document.getElementById("mes");
var another = document.getElementById("another");

SecBlock.style.display = "none";
AimBlock.style.display = "none";
mes.style.display = "none";
another.style.display = "none";

function choose(){
	ButMain.style.display = "none";
	SecBlock.style.display = "block";
}

function SborA(){
	SecBlock.style.display = "none";
	AimBlock.style.display = "block";
	contentAll.style.display = "none";
}

function SborB(){
	SecBlock.style.display = "none";
	contentAll.style.display = "none";
	mes.style.display = "block";
}

function next_page(){
	AimBlock.style.display = "none";
	another.style.display = "block";
}