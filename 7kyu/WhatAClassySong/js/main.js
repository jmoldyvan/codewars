class Song{
    constructor(title, artist){
        this.title = title
        this.artist = artist
        this.nameStore = []
    }
    howMany(arr){
        let fresh = []
        arr.forEach(e => {
            e = e.toLowerCase();
            if(!this.nameStore.includes(e)){
                fresh.push(e)
                this.nameStore.push(e)
            }
        });

        return fresh.length
    }
}