// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  
}

class PaginationHelper{
    constructor(collection,itemsPerPage){
        this.collection = collection,
        this.itemsPerPage = itemsPerPage
    }

    itemCount(){
        return (this.collection.length)
    }

    pageCount(){
        return (Math.floor(this.collection.length/this.itemsPerPage))
    }

    pageItemCount(pageIndex){

    }
// foreach
// if item index === elemnt
// return Math.ceil(this.pageCount/element[i])
    pageIndex(itemIndex){
        if(this.collection)
    }


}