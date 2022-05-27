function findUniq(arr) {
    arr1 = [];
    arr2 = [];
    for( let i = 0; i < arr.length; i++)  {
        const e = arr[i];
        e == arr[0] ? arr1.push(e) : arr2.push(e)
    };
    return ( arr1.length < arr2.length ? +(arr1.join('')) : +(arr2.join('')))
}

findUniq([ 3, 10, 3, 3, 3 ])