// replace all ny index?
// slice or splce then push the number of digits spliced with #?




// get the arr length -4
// concat arr length -4 # with four
// if arr length <= 4 return cc
function maskify(cc) {
    let ccArr = cc.split('');
    let four = ccArr.slice(-4).join('');
    if (ccArr.length > 4) {
        let len = ((ccArr.length) - 4);
        let hash = ('#'.repeat(len));
        console.log((`${hash}${four}`));
    }
    else {
        console.log((cc));
    }
}


maskify('111')