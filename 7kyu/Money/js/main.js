function calculateYears(principal, interest, tax, desired) {  
    for(var years = 0; principal < desired; years++){
      principal *= 1 + (1 - tax) * interest;
    }  
    return years  
  }