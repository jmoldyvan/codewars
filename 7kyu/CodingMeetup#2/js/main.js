function greetDevelopers(list) {
    // thank you for checking out my kata :)
    list.forEach( el => el.greeting = `Hi ${el.firstName}, what do you like the most about ${el.language}?`)
    return list
  } 