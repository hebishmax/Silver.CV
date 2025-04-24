const hre = require("hardhat");

async function main() {
  const HelloWeb3 = await hre.ethers.getContractFactory("HelloWeb3");
  const hello = await HelloWeb3.deploy();

  await hello.deployed();

  console.log("HelloWeb3 deployed to:", hello.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
