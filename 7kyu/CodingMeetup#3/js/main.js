function isRubyComing(list) {
    // thank you for checking out my kata :)
    let ruby = (element) => element.language == 'Ruby';
    return list.some(ruby)
  }