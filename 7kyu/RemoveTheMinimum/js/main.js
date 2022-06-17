function removeSmallest(numbers) {
    return numbers
      .slice()
      .filter((_, i) => i !== numbers.indexOf(Math.min(...numbers)));
  }
  removeSmallest([2, 2, 1, 2, 1])