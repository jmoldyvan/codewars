class FileMaster {
    constructor(filepath) {
      this.filepath = filepath
    }
    
    extension() {
      let ext = this.filepath.split('.')
      console.log(ext)
      return ext[ext.length-1];
    }
    
    filename() {
      let fn = this.filepath.split('.')
      fn.pop()
      fn = fn.join('').split('/')
      return fn[fn.length-1];
    }
    
    dirpath() {
      let dir = this.filepath.split('.')
      dir = dir.join('')
      let lastSlash = dir.lastIndexOf('/')
      let dirth = dir.slice(0,lastSlash)
      return `${dirth}/`;
    }
  }