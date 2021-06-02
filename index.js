const { create } = require("ipfs-http-client");

const client = create();

(async () => {
    client.log("Jai Baba Ri!")
})();