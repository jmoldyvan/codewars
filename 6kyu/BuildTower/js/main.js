function towerBuilder(nFloors) {
        var tower = [];
        for (var i = 0; i < nFloors; i++) {
          tower.push(" ".repeat(nFloors - i - 1)
                   + "*".repeat((i * 2)+ 1)
                   + " ".repeat(nFloors - i - 1));
        }
        return tower;
      }











//     // last row has (nfloors*2)-1 characters
//     // each ascedning floor - 2 * rplace with _
//     // top will have 
//     let bottomRow = `\*`.repeat((nFloors*2) - 1);
//     let arr = Array(nFloors).fill(bottomRow)
//     arr = arr.map(x => x.split(''))
//     let f = []
//     console.log(arr);
//     for (let i = 1; i < arr.length; i++){
//         e = arr[i]

//             e.splice((i-1), (i));
//             e.unshift(` `, ` `)
//             // e.splice((-1*i), i+1, ` `);
//             console.log(e);
//             // g.join('')
//             f.push(e)
//     }
//     console.log(f);
//   }
  towerBuilder(6)