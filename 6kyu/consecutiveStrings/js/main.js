function longestConsec(strarr, k) {
    // your code
    if(k<1 || strarr.length <= k){
        return ""
    }
    else{
        let arr = []
        for (let i = 0; i < strarr.length; i++) {
            const e = strarr[i];
            console.log(strarr);
            let cutted = strarr.slice(i , (i+k))
            // console.log(cutted);
            let smoosh = cutted.join('')
            arr.push(smoosh)
        }
        // console.log(arr);
        arr = arr.sort((a,b) => b.length-a.length)
        console.log(arr[0]);
        return arr[0]
    }
}
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)