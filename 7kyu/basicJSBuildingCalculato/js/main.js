var Calculator = {

    add(num1,num2){
        return num1+num2
    },

    subtract(num1,num2){
        return num1-num2
    },

    multiply(num1,num2){
        return num1*num2
    },

    divide(num1,num2){
        if(num2==0){
            return false
        }
        else{
        return num1/num2
    }
    }


};