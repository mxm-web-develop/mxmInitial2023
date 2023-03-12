const fs = require('fs');
const packageJson = fs.readFileSync('../package.json');
const packageObj = JSON.parse(packageJson);
const version = JSON.parse(fs.readFileSync('../package.json')).version
const { exec,execSync } = require('child_process');
// const commitMsg = execSync('git log --format=%B -n 1 HEAD').toString().trim();
const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

let versionUpdate;
exec('git show -s ', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    const [commit] = stdout.trim().split('\n');
    if(version.includes('_')){
      versionUpdate = version.replace(/_(.*)/g, (match, p1) => `_${branchName+commit.substr(-5)}`);
    }else{
      versionUpdate = version+`_${branchName+commit.substr(-5)}`
    }
    console.log(versionUpdate);
    packageObj.version = versionUpdate;
    const newPackageJson = JSON.stringify(packageObj, null, 2);
    fs.writeFileSync('../package.json', newPackageJson);
});