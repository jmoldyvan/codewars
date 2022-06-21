function past(h, m, s){
    let minHr = h * 60
    let totalMin = minHr + m
    let secMin = totalMin * 60
    let totalSec = secMin + s
    return totalSec * 1000
  }