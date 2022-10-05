function isThisLeet(param){
let obj ={'0':'O', '5':'S' , '1' : 'I' , '6' : 'G',
'2' : 'Z'    ,  '7' : 'L',
'3' : 'E' ,    '8' : 'B',
'4' : 'h'    ,  '9' : 'q'}

let obj2={
    'O':'0', 'S':'5' , 'I' : '1' , 'G' : '6',
'Z' : '2'    ,  'L' : '7',
'E' : '3' ,    'B' : '8',
'h' : '4'    ,  'q' : '9'
}

let arr = param.split('')

for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]]){
        arr[i] = obj[arr[i]]
    }
    else if(obj2[arr[i]]){
        arr[i] = obj2[arr[i]]
    }
}
console.log(arr.join(''));
}

isThisLeet("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." )