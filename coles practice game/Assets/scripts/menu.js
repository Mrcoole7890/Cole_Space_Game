var spaceMenu = {
	buttonGlow: function(target){
		$(target).on("mouseenter",function(){
			$(target).css({
				"background-color": "rgba(204,51,204,.4)",
				"border-color":"#93C",
				"border-width": "7px",
				"color": "rgba(255,51,153,.7)"
			});
		});
		$(target).on("mouseleave",function(){
			$(target).css({
					'background-color': 'rgba(0,255,153,.4)',
					'border-style': 'solid',
					'border-width': '5px',
					'border-color': '#0F6'
			});
		});
	},
	startGame: function() {
		$(".button").remove(".button");
		shipMovement.movement(true);
		shipFeatures.shipAttack("primary","Assets/imgs/greenBullet.gif");
	},
	gameSetup: function() {
		function createMoon (square){
			var moonRaw = $("<img src='Assets/imgs/moon.png'/>");
			moonRaw.css("width", square);
			moonRaw.css("height", square);
			return moonRaw;
		}
		function placeMoon (x,y){
			return{"top":y,"left":x,"position":"fixed", "z-index":"-3"};
		}
		var moonOne = createMoon("400px");
		var moonTwo = createMoon("50px");
		var moonThree = createMoon("100px");
		var moonThree = createMoon("75px");

		moonOne.css(placeMoon("200px","300px"));
		moonTwo.css(placeMoon("750px","450px"));
		moonThree.css(placeMoon("650px","300px"));

		moonOne.appendTo("body").toggle();
		moonTwo.appendTo("body").toggle();
		moonThree.appendTo("body").toggle();


		moonOne.slideToggle(500);
		moonTwo.slideToggle(500);
		moonThree.slideToggle(500);
	}
};
