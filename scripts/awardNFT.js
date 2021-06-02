//QmVKcdGdiUvqpd5Hg5L4zL7MfK9DSyeksQ8ZG61b2Dyveb

const hre = require("hardhat");

async function main() {
  const Factory = await hre.ethers.getContractFactory("DreamCatcher");
  //ropsten address
  //const contract_addr = '0xBEe0dE73810B2B393C946E46a7F3252f756CD872';
  //rinkeby address
  const contract_addr = '';
  const contract = Factory.attach(contract_addr);
  //const token_uri = 'ipfs://ipfs/QmVKcdGdiUvqpd5Hg5L4zL7MfK9DSyeksQ8ZG61b2Dyveb';
  const token_uri = 'ipfs://ipfs/CID';
  const txn = await contract.awardItem('player_address', token_uri);
  const receipt = await txn.wait();
  console.log(receipt);

  // const airdrop = ["danchainshot.eth", "yowl.eth", "makeavely.eth", "kdawg.eth", "notyowl.eth", "moon.eth", "cdgmachado.eth", "atuan.eth", "nic.eth", "max.eth", "yourgrandma.eth", "topanga.eth", "jonathanchainshot.eth"];

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });