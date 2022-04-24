function friend(friends) {
    let y = []
    friends.forEach(e => {
        if (e.length === 4) {
            y.push(e)
        }
    });
    console.log(y);
}
// **************
// function friend(friends){
//     return friends.filter(n => n.length === 4)
//   }
// **************************
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])