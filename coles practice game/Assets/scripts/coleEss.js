var coleEss = {
  cssPxRemoval : function ( cssAttr ) {

  var input = cssAttr;

      var strLen = input.length;
      var intLen = input.slice(0,strLen - 2);
      return intLen;
    }
};
