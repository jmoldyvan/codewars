function openOrSenior(data){
    x = data.map((x)=>{
        if ( x[0] > 54 && x[1] > 7 ){
            return 'Senior'
        }
        else{
            return 'Open'
        }
    
    });
        return x  
}
  openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])