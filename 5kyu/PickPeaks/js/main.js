function pickPeaks(arr){
    const answer = {pos: [], peaks: []};
    
    for (let i = 1; i < arr.length - 1; i++) {
    
    let n = 1;
    while (arr[i] === arr[i+n]) n++;
    
    if (arr[i] > arr[i-1] && arr[i] > arr[i+n]) {
    answer.pos.push(i);
    answer.peaks.push(arr[i]);
    };
    };
    
    return answer;
    
  }