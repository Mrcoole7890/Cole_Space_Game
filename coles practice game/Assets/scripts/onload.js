// JavaScript Document
$(document).ready(function(){
	shipMovement.setUp();
	spaceMenu.buttonGlow("#startButton");
	spaceMenu.buttonGlow("#pickRunner");
	$("#startButton").on("click",function(){spaceMenu.startGame();spaceMenu.gameSetup();});
	$("#pickRunner").on("click",function(){spaceMenu.pickRunner();});
});
