const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const nft = await hre.ethers.deployContract(
    "RolexYachtMaster40",
    [deployer],
    {}
  );
  await nft.waitForDeployment();
  console.log(`Successfully deployed NFT to ${nft.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
