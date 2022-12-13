// 2023
function count (string) {  
   let hash={}
     for(i=0;i<=string.length-1;i++){
          if(hash[string[i]]){
         hash[string[i]]++
       }   
       if(!hash[string[i]]){
         hash[string[i]] = 1
       }
 
     }
    return hash;
 }



function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }

  count("ababcccddtt")


