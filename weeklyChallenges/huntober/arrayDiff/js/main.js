function arrayDiff(a, b) {
  
hash = []

for (let i = 0; i < a.length; i++) {
    
    if(!b.includes(a[i])){
        hash.push(a[i])
    }
}
return hash
}