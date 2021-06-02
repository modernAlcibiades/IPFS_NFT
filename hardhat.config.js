require("@nomiclabs/hardhat-waffle");

require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: process.env.INFURA_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    rinkeby: {
      url: process.env.INFURA_RINKEBY,
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};
