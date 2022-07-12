function comp(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
      return false;
    }
    
    let arr1 = [...array1];
    let arr2 = [...array2];
    
    for (let i = 0; i < arr1.length; i++) {
      let squared = arr1[i] * arr1[i];
      let idx = arr2.indexOf(squared);
      
      if (idx === -1) {
        return false;
      }
      
      arr2[idx] = null;
    }
    
    return true;
  }