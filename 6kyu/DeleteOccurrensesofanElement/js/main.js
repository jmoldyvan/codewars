function deleteNth(arr,n){
    
    const occ = []

    return arr.filter(x => {
        if(occ[x]){
            occ[x]++
        }
        else{
            occ[x] = 1
        }
        return occ[x] <= n
    })

  }