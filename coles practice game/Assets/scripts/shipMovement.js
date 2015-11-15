var shipMovement = {

	rightEdge: window.innerWidth,
	bottomEdge: window.innerHeight,

	setUp: function(){
		$(document).on("load",function(){
			$("#ship").offset({top:this.bottomEdge/2,left:this.rightEdge/2});
		});
	},

	movement: function(bool){
		if(bool === true){
			$(document).keyup(function(e){
			var rawKey = e.which;
			var shipSpeed = 3000;
			//console.log(rawKey); //for debuging
			switch (rawKey){
				case 83:
					$("#ship").stop(true).animate({top:shipMovement.bottomEdge},shipSpeed,"linear");
					$("#ship").attr("src","Assets/imgs/shipDown.gif");
					break;
				case 87:
					$("#ship").stop(true).animate({top:0},shipSpeed,"linear");
					$("#ship").attr("src","Assets/imgs/ship.gif");
					break;
				case 65:
					$("#ship").stop(true).animate({left:0},shipSpeed,"linear");
					$("#ship").attr("src","Assets/imgs/shipLeft.gif");
					break;
				case 68:
					$("#ship").stop(true).animate({left:shipMovement.rightEdge},shipSpeed,"linear");
					$("#ship").attr("src","Assets/imgs/shipRight.gif");
					break;
				case 88:
					$("#ship").stop(true);
					break;
				}
			});
		}
		else{
			$("#ship").stop();
		}
	}
};



var shipFeatures = {
	shipAttack: function(typeFire,bulletType) {
		$(document).keyup(function (e){
			var rawKey = e.which;
			var bulletSpeed;
			switch (typeFire){
				case "primary" :
					var bullet = $("<img src="+ bulletType +" id='bullet'/>");
					var shipYPosition = coleEss.cssPxRemoval($("#ship").css("top"));
					var shipXPosition = coleEss.cssPxRemoval($("#ship").css("left"));
					shipXPosition = +shipXPosition + 45;
					shipYPosition = +shipYPosition + 45;
					if (rawKey == 32){
						bullet.css({"width": "15px","height":"15px", "position":"fixed","z-index":"-1","top":shipYPosition,"left":shipXPosition});
						$("body").append(bullet);
						bulletSpeed = 750;
						switch ($("#ship").attr("src")){
							case "Assets/imgs/ship.gif":
								bullet.animate({top:0},bulletSpeed,"linear",function(){this.remove();});
								break;
							case "Assets/imgs/shipDown.gif":
								bullet.animate({top:shipMovement.bottomEdge},bulletSpeed,"linear",function(){this.remove();});
								break;
							case "Assets/imgs/shipLeft.gif":
								bullet.animate({left:0},bulletSpeed,"linear",function(){this.remove();});
								break;
							case "Assets/imgs/shipRight.gif":
								bullet.animate({left:shipMovement.rightEdge},bulletSpeed,"linear",function(){this.remove();});
								break;
							}

					}
					break;
			}
		});
	}
};
