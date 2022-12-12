// 2023

function getMiddle(s){
  if(s.length%2==0){
    return `${s[(s.length/2)-1]}${s[s.length/2]}`
  }
  if(!s.length%2==0){
    return `${s[(s.length-1)/2]}`
  }
}


function getMiddle(s) {
    if (s.length % 2 !== 0) {
        f = s.split('');
        for (let i = 0; i < f.length; i++) {
            if (i === (Math.floor(f.length / 2)))
                return ((f[i].toString()));
        }
        console.log(f);
    }
    else if (s.length % 2 === 0) {
        f = s.split('');
        for (let i = 0; i < f.length; i++) {
            if (i === (Math.floor(f.length / 2)))
                return (`${f[i - 1].toString()}${(f[i].toString())}`);
        }
    }
};

getMiddle("middle")