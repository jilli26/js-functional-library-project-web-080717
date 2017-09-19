fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(iterable, callBack) {
      if (Array.isArray(iterable)){
        for (let i=0, l=iterable.length;  i < l; i++){
          let element = iterable[i];
          callBack(element, i, iterable);
        }
      }
      else if (typeof iterable === "object"){
        for (const key in iterable){
          const value = iterable[key];
          callBack(value, key, iterable);
        }
      };
      return iterable;
    },

    map: function(iterable, callBack){
      var retVal =[];
      if (Array.isArray(iterable)){
        for (let i=0, l=iterable.length;  i < l; i++){
          let element = iterable[i];
          retVal.push(callBack(element, i, iterable));
        }
      }
      else if (typeof iterable === "object"){
        for (const key in iterable){
          const value = iterable[key];
          retVal.push(callBack(value, key, iterable));
        }
      };
      return retVal;
    },
    find: function(iterable, callBack){
      if (Array.isArray(iterable)){
        for (let i=0, l=iterable.length;  i < l; i++){
          let element = iterable[i];
          if (callBack(element, i, iterable) === true){
            return element;
          }
        }
          return undefined;
      }
      else if (typeof iterable === "object"){
        for (const key in iterable){
          const value = iterable[key];
          if (callBack(value, key, iterable) === true){
            return element;
          }
        }
        return undefined;
      }
    },
    filter: function(iterable, callBack){
      var array = []
      if (Array.isArray(iterable)){
        for (let i=0, l=iterable.length;  i < l; i++){
          let element = iterable[i];
          if (callBack(element, i, iterable) === true){
            array.push(element);
          }
        }
      }
      else if (typeof iterable === "object"){
        for (const key in iterable){
          const value = iterable[key];
          if (callBack(value, key, iterable) === true){
            array.push(value);
          }
        }
      }
      return array
    },
    sortBy: function(iterable, callBack){
      var retArray = []
      if (typeof callBack === 'string' || typeof callBack === 'number'){
        for (let i=0, l=iterable.length;  i < l; i++){
          let element = iterable[i];
          retArray.push(element)
        }
        if (typeof iterable[0][callBack] === "string"){

          return retArray.sort(function (a,b){
            return a[callBack] > b[callBack]
          })

        }
          else{
            return retArray.sort(function (a,b){
              return a[callBack] - b[callBack]
            })
        }


      }
      else {
        retArray = iterable
        return retArray.sort(callBack)
      }

      // if (Array.isArray(iterable)){
      //   return retArray.sort(callBack)
      // }
      // else if (typeof iterable === "object"){
      //   for (const key in iterable){
      //   if (key === callBack){
      //     const value = iterable[key]
      //     retArray.push(value)
      //   }
      //   }

      return retArray.sort()


      },
    size: function(iterable){
      if (Array.isArray(iterable)){
        return iterable.length
      }
      else if (typeof iterable === "object"){
        let counter = 0;
        for (const key in iterable){
          counter++
        }
        return counter
      }
    },
    first: function(iterable){
      return iterable[0]
    },
    last: function(iterable){
      return iterable[iterable.length - 1]
    },
    compact: function(iterable){
      let array = []
      for (let i=0, l=iterable.length;  i < l; i++){
        let element = iterable[i];
        if (element === false || element === null || element === 0 || element ==='' || element === "" || element === undefined || element === NaN){

        }
        else{
          array.push(element);
        }
      }
      return array
    },
    uniq: function(iterable){
      let array = []
      for (let i=0, l=iterable.length;  i < l; i++){
        let element = iterable[i];
        if (!array.includes(element)){
          array.push(element)
        }
        // for (let r=0, b=array.length; r < b; r++){
        //   if element ==
        // }
      }
      return array
    },
    keys: function(iterable){
      var retArray = []
      for (const key in iterable){
        retArray.push(key)
      }
      return retArray
    },
    values: function(iterable){
      var retArray = []
      for (const key in iterable){
        let value = iterable[key]
        retArray.push(value)
      }
      return retArray
    },
    functions: function(iterable){
      var retArray = []
      for (const key in iterable){
        retArray.push(key)
      }
      return retArray
    },
    reduce: function(iterable, callBack){
      var x = iterable[0]
      for (let i=0, l=iterable.length - 1;  i < l; i++){
        let element = x;
        x = callBack(element, iterable[i + 1]);
      }
      return x
    },
  }
})()
     

/*
check what type of objects
  -Array.isArray(val)
run a for loop through each value
  Array
  -(element, index, list)
  Object
  -(value, key, list)
return original obj
*/
