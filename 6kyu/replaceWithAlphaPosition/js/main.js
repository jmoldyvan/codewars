function alphabetPosition(text) {
    charMapping = {
        'a': ['1'], 'b': ['2'], 'c': ['3'], 'd': ['4'], 'e': ['5'],
        'f': ['6'],'g': ['7'], 'h': ['8'], 'i': ['9'], 'j': ['10'], 'k': ['11'], 'l': ['12'],
        'm': ['13'],'n': ['14'],'o': ['15'], 
        'p': ['16'], 'q': ['17'], 'r': ['18'], 's': ['19'], 
        't': ['20'], 'u': ['21'], 'v': ['22'], 'w': ['23'], 'x': ['24'], 'y': ['25'], 'z': ['26'],}
    text = text.replace(/[^\w\s]/gi, '')
    text = text.replace(/[^a-zA-Z]/g,"")
    text = text.toLowerCase().split('').filter((item) => item != ' ' || item != "/[^A-Za-z0-9 ]/");
    text = text.join(' ')
    
    newStr = text.replace(/[abcdefghijklmnopqrstuvwxyz]/g, c => charMapping[c])
    return newStr
  }