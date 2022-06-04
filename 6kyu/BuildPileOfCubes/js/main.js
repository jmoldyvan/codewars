function findNb(m) {
    function findNb(m) {
        let n = 0;
        let sum = 0;
        while(sum < m){
            n++;
            sum = sum + n ** 3;
        }
        if(sum === m){
            return n;
        } else {
            return -1;
        }
      }

    }