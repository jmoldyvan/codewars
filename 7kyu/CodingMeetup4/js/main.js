var list = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ];

function getFirstPython(list) {
    // Thank you for checking out my kata :)
    let pyIncluded = (el) => el.language ==='Python'
    if (list.some(pyIncluded) == true){
    let firstPyGuy = (element) => element.language === 'Python';
    let num = list.findIndex(firstPyGuy)
    let firstPy = list[num];
    return `${firstPy.firstName}, ${firstPy.country}`
    }
    else{
        return 'There will be no Python developers'
    }
  }


  getFirstPython(list)