function queueTime(customers, n) {
    if(customers.length == 0 ){
        return 0
    }
    else if (customers.length < n) {
        customers = customers.sort((a,b) => b-a)
        return customers[0]
    }
    else{
        let sum = customers.reduce((t,c) => t+c)
        return sum/n
    }
  }

  const queueTime = (customers, n) => {
    const head = customers.slice(0, n);
    const tail = customers.slice(n);
    const total = tail.reduce((acc, customer) => (acc[acc.indexOf(Math.min(...acc))] += customer, acc), head);
    return total.length ? Math.max(...total) : 0;
  };