const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");
require("dotenv").config();

async function run() {
    const files = [{
        path: '/',
        content: JSON.stringify({
            name: "Acid",
            image: process.env.IMAGE,
            description: "Wards Crypto Evil!"
        })
    }];

    const result = await ipfs.add(files);
    console.log(result);
}

run();