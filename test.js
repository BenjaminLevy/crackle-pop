const { execSync } = require('node:child_process');

let results

const main = async () => {
  try{
  execSync('node crackle-pop.js', (error, stdout, stderr) => {
    console.log('running crackle-pop.js')
    if (error) {
      console.error(`exec error: ${error}`);
      return error;
    }
    results = stdout
    // console.log(typeof results)
    return "hello"
  });
  } catch (e){
    return e
  }
}

console.log(main())

setInterval(console.log, 5000, "hi")
// const resultsArr = results.split("\n")
