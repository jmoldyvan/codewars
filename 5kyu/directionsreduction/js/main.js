function dirReduc(arr){
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const nextelement = arr[i+1];
        const lastelement = arr[i-1];

        if(element === "WEST" && nextelement === 'EAST' || element === "WEST" && lastelement === 'EAST'){
            continue
        }
        if(element === "EAST" && nextelement === 'WEST' || element === "EAST" && lastelement === 'WEST'){
            continue
        }
        if(element === "NORTH" && nextelement === 'SOUTH' || element === "NORTH" && lastelement === 'SOUTH'){
            continue
        }
        if(element === "SOUTH" && nextelement === 'NORTH' || element === "SOUTH" && lastelement === 'NORTH'){
            continue
        }
        else{result.push(element)}
    }
    return result
}



function dirReduc(plan) {
    var opposite = {
      'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return plan.reduce(function(dirs, dir){
        if (dirs[dirs.length - 1] === opposite[dir])
          dirs.pop();
        else
          dirs.push(dir);
        return dirs;
      }, []);
  }