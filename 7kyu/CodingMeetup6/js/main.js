function isSameLanguage(list) {
    // thank you for checking out the Coding Meetup kata :)
    return list.every(element => element.language === list[0].language)
    
  }