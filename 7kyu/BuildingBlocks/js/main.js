class Block{
    constructor(box){
        this.box=box
    }

    getWidth(){
        return this.box[0]    }
    getLength(){
        return this.box[1]    }
    getHeight(){
        return this.box[2]   }
    getVolume(){
        return this.box[0]*this.box[1]*this.box[2]    }
    getSurfaceArea(){
        return 2*((this.box[0]*this.box[1])+(this.box[2]*this.box[1])+(this.box[0]*this.box[2]))    }
}