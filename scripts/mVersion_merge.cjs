const fs = require('fs');
const {resolve} = require('path')
const {execSync } = require('child_process');
const packageJson = fs.readFileSync(resolve(__dirname , '..','package.json'));
const packageObj = JSON.parse(packageJson);
const version = packageObj.version
const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

const run=()=>{
    let testVersion;
    if (version.includes("_dev")) {
        version = version.replace("_dev", "_test");
    }else{
        testVersion =version;
    }
    packageObj.version = testVersion;
    const newPackageJson = JSON.stringify(packageObj, null, 2);
    fs.writeFileSync(resolve(__dirname , '..','package.json'), newPackageJson);
}

run()