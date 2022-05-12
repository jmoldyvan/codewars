function likes(names) {
    if(names.length >= 1){
    names = names.join(' ').split(' ')
    if(names.length > 3){
        let x = (names.length)-2;
        return(`${names[0]}, ${names[1]} and ${x} others like this`)
    }
    else if(names.length == 3){
        return (`${names[0]}, ${names[1]} and ${names[2]} like this`)
    }
    else if(names.length == 2){
        return(`${names[0]} and ${names[1]} like this`)
    }
    else if(names.length == 1){
        return (`${names[0]} likes this`)
    }
}
    else{
        return "no one likes this"
    }
  }

likes(['Max', 'John'])


// function likes(names) {
//     return {
//       0: 'no one likes this',
//       1: `${names[0]} likes this`, 
//       2: `${names[0]} and ${names[1]} like this`, 
//       3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
//       4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
//     }[Math.min(4, names.length)]
//   }