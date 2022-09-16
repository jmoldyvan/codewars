class Ghost{
    constructor(){
        this.colorArr = ['white', 'yellow', 'purple', 'red']
    }
    get color(){
        return this.colorArr[Math.floor(Math.random()*this.colorArr.length)]
    }
    
}
ghost = new Ghost()
ghost.color