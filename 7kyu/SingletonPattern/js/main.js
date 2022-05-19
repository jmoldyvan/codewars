var Singleton = (function () {
    var instance = null;
  
    return function(){
      return instance || (instance = this);
    };
  })();