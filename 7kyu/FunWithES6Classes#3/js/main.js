class Cuboid {
    constructor(length, width, height){
        this.length = length,
        this.width = width,
        this.height = height
    }
    get surfaceArea(){
        return (2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)))
    }
    get volume(){
        return (this.width * this.height * this.length)
    }
  }
  class Cube extends Cuboid {
    constructor(length){
        super(length,length,length)
    }
  }