//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count = 0
    let validSmileys = [':)', ';)', ':D', ';D', ';-D', ':-D', ';~D', ':~D', ';-)', ':-)', ';~)', ':~)']
    for(i=0;i<=arr.length;i++){
        if(validSmileys.includes(arr[i])){
            count++
        }
        else{
            continue
        }

    }
    return count
}