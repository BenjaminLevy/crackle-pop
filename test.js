const { execSync } = require('node:child_process');


const res = execSync('node crackle-pop.js')
  .toString()
  .trim("\n")
  .split("\n")

let counts = {
  Crackle: 0,
  Pop: 0,
  CracklePop: 0,
  integer: 0,
  other: 0
}

for(let i = 0; i < res.length; i++){
  let word = res[i]
  if(word in counts) counts[word] += 1
  else if(word.match(/^\d+$/)) counts.integer += 1
  else counts.other += 1
}

class testItem {
  constructor(name, expected, got){
    this.name = name
    this.expected = expected
    this.got = got
  }

}

const testsArr = [
  new testItem("Number of Crackles", 27, counts.Crackle),
  new testItem("Number of Pops", 14, counts.Pop),
  new testItem("Number of CracklePops", 6, counts.CracklePop),
  new testItem("Number of integers", 53, counts.integer),
  new testItem("Number of other items", 0, counts.other),
  new testItem("Length of res array", 100, res.length),
  new testItem("First item in array", "1", res[0]),
  new testItem("Last item in array", "Pop", res[res.length - 1])
]
const test = (name, expected, got) => {
  const passOrFail = (expected === got)
    ? "PASS"
    : "FAIL"

  console.log(
  `${passOrFail} -- ${name}: 
    expected "${expected}", 
    got "${got}"`
  )
}

for(let i = 0; i < testsArr.length; i++){
 test(testsArr[i].name, testsArr[i].expected, testsArr[i].got) 
}


