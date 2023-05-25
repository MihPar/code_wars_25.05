function toAcronym(inp){
    let arr = inp.split(" ")
    let newArr = []
    arr.forEach(function(char) {
      newArr.push(char[0])
    })
    return newArr.join("").toUpperCase()
  }
  console.log(toAcronym("Code Wars"))