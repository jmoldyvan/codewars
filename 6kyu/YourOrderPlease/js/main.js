function order(words) {
    words = words.split(" ")
    words = words.sort((a, b) => a.replace(/[^\d]/g, "") - b.replace(/[^\d]/g, ""))
    return words.join(" ")
  }