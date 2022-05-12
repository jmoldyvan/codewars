function digital_root(n) {
    n = n.toString().split('').map(Number);
  for (let i = 0; n.length > 1; i++) {
      n = n.reduce((t, c) => t + c)
      n = n.toString().split('').map(Number);
  }
  return (Number(n));
}

digital_root(456)