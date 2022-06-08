function abbrevName(name){
    space = name.indexOf(' ')
    afterSpace = name.charAt(space + 1)
    first  = name.charAt(0)
    return (`${first}.${afterSpace}`).toUpperCase()
}