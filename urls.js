const fs = require('fs');
const axios = require('axios');

const readFileLines = filename => fs.readFileSync(filename).toString('UTF8').split('\n');
let arr = readFileLines('urls.txt');


async function webCat(url, out) {
    try {
        let resp = await axios.get(url);
        let out = url.split("/")[2]
        handleOutput(resp.data, out);
        console.log(`Wrote to ${out}`)
    } catch (err) {
        console.log(`couldn't download ${out}`);
    }
}

function handleOutput(text, out) {
    if (out) {
        fs.writeFile(out, text, 'utf8', function (err) {
            if (err) {
                console.error(`Couldn't write ${out}: ${err}`);

            }
        });
    } else {
        console.log(text);
    }
}

for (let i = 0; i < arr.length; i++) {
    url = arr[i]
    webCat(url);
}



















