const { exec, spawn } = require("child_process");
const clc = require('cli-color');
const https = require('https');
const fs = require('fs')
var pjson = require('../package.json');

const cSuccess = (...args) => console.log(clc.bgGreen(...args));
const cInfo = (...args) => console.log(clc.bgBlue(...args));
const cError = (...args) => console.log(clc.bgRed(...args));

spawn('yarn', ['init'], {
    shell: true,
    stdio: 'inherit'
}).on('close', (code) => {
    cSuccess('Nice! you have initated your package.') 

    
    cInfo("Let's load latest dependencies");

    https.get('https://raw.githubusercontent.com/EnabApp/core/master/package.json', (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            let pkgs = JSON.parse(data);
            pkgs.name = pjson.name ?? "module-name";
            pkgs.version = '1.0.0'
            pkgs.author = pjson.author ?? "author-name";
            pkgs.scripts.begin = "yarn install && node --loader ts-node scripts/begin.cjs"
            pkgs.description = pjson.description ?? "description";
            pkgs.license = pjson.license ?? "MIT";
            pkgs.devDependencies["cli-color"] = "latest"
            pkgs.devDependencies["@enab/core"] = "latest"
            // pkgs.dependencies["@enab/utilities"] = "latest"
            fs.writeFileSync('./package.json', JSON.stringify(pkgs, null, 2))
            
            spawn('yarn', ['install'], {
                shell: true,
                stdio: 'inherit'
            }).on('close', (code) => {
                cSuccess('Nice! you have installed necessary dependencies.')
                cInfo("Let's prepare your playground");
                spawn('yarn', ['dev:prepare'], {
                    shell: true,
                    stdio: 'inherit'
                }).on('close', (code) => {
                    cSuccess('Completed! When you want to run your playground, just run "yarn dev"')
                });
            });
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    })
    .end()
});



