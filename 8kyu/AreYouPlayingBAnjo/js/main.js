function areYouPlayingBanjo(name) {
    let letter = 'r'
    let cap = 'R'
    return name[0].includes(cap) || name[0].includes(letter) ? `${name} plays banjo` : `${name} does not play banjo`
  }