for(let i = 1; i <= 100; i++){
  let by3 = i % 3 === 0
  let by5 = i % 5 === 0

  if(by3 && by5){
    console.log("CracklePop")
  } else if(by3){
    console.log("Crackle")
  } else if(by5){
    console.log("Pop")
  } else {
    console.log(i)
  }
}
