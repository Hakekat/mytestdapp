const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  const JAVAToken = await hre.ethers.getContractFactory("JAVAToken");
  const javaToken = await JAVAToken.deploy("JAVAToken", "JTN");

  await javaToken.deployed();

  console.log("Token deployed to:", javaToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });