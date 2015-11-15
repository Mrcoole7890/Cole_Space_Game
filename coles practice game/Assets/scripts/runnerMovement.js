var missileMovement = {
  missileCount: 0,
  missileSpeed: 1000,
   spawnMissle: function(){
     var newMissile = $("<img src='Assets/imgs/cool.gif' />");
     var spawnYLoc = coleEss.cssPxRemoval($("#spawnOne").css("top"));
     var spawnXLoc = coleEss.cssPxRemoval($("#spawnOne").css("left"));
     newMissile.css({"top":spawnYLoc + "px","left":spawnXLoc + "px","position":"fixed"});
     $("body").append(newMissile);
     missileMovement.missileCount++;
     newMissile.animate({"top":coleEss.cssPxRemoval($("#ship").css("top")),"left":coleEss.cssPxRemoval($("#ship").css("left"))},
     missileMovement.missileSpeed,
     "linear",
     function(){
       this.remove();
     });
   }
};
