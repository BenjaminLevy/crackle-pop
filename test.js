const { execSync } = require('node:child_process');


const res = execSync('node crackle-pop.js')

console.log(res)

setInterval(console.log, 5000, "hi")
// const resultsArr = results.split("\n")
