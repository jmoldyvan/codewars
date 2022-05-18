
class Dictionary{
    constructor(){
        this.dict = {}
    }

    newEntry(k,v){
        this.dict[k] = v
    }

    look(key){
        for(let prop in this.dict){
            if(key === prop){
                return this.dict[prop]
            }
        }
        return `Can\'\t find entry for ${key}`
    }
}
