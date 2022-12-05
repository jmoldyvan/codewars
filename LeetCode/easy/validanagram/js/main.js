
// sort mewthod
// var isAnagram = function(s, t) {
//     s = s.split().sort((a,b) => charCodeata-b)
//     t = t.split().sort((a,b) => a-b)
//     console.log(s);
//     console.log(t);
//     for (let i = 0; i < s.length; i++) {
//         if(s[i]!==t[i]){
//             return false
//         }        
//     }
//     return true
// };

// hash method
// var isAnagram = function(s, t) {

//     hashs = {}
//     hasht = {}
//     for (let i = 0; i < s.length; i++) {
//         if(hashs[s[i]]){
//             hashs[s[i]]++
//         }
//         if(!hashs[s[i]]){
//             hashs[s[i]]=1
//         }
//         if(hasht[t[i]]){
//             hasht[t[i]]++
//         }
//         if(!hasht[t[i]]){
//             hasht[t[i]]=1
//         }
//     }
//     for(let key in hashs){
//         if (hashs[key] !==hasht[key]){
//             return false
//         }
//             return true
//     }

// };


function fizzBuzz(n) {

    for( let i=1; i<=n; i++){

        if(i%3 === 0 && i%5 === 0){
            console.log('FizzBuzz')
        }
        else if (i % 3 === 0){
            console.log("Fizz");
        }
        else if (i % 5 === 0){
            console.log("buzz");
        }
        else{
            console.log(i);
        }
    }
}

fizzBuzz(15)