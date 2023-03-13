const fs = require('fs');
const {resolve} = require('path')
const packageJson = fs.readFileSync(resolve(__dirname , '..','package.json'));
const packageObj = JSON.parse(packageJson);
const version = JSON.parse(fs.readFileSync(resolve(__dirname , '..','package.json'))).version
const { exec,execSync } = require('child_process');
// const commitMsg = execSync('git log --format=%B -n 1 HEAD').toString().trim();
const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

let versionUpdate;
exec('git show -s ', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    if(branchName != 'dev'){
      return
    }
    const [commit] = stdout.trim().split('\n');
    if(version.includes('_')){
      versionUpdate = version.replace(/_(.*)/g, (match, p1) => `_${branchName+commit.substr(-5)}`);
    }else{
      versionUpdate = version+`_${branchName+commit.substr(-5)}`
    }
    packageObj.version = versionUpdate;
    const newPackageJson = JSON.stringify(packageObj, null, 2);
    fs.writeFileSync(resolve(__dirname , '..','package.json'), newPackageJson);
});

