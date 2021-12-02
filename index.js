const fs = require('fs');
const sass = require('sass');

function main() {

    let cssSourceDir = __dirname + '/index.scss';
    let cssDestDir = __dirname + '/index.css';

    sass.render({ file: cssSourceDir }, (err, result) => {

        if (err != undefined) throw err;

        fs.writeFile(cssDestDir, result.css.toString(), err => {

            if (err != undefined) throw err;

        });

    });

}

main();