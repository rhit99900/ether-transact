import { ethers } from "hardhat";

const main = async () => {
  
  const Transactions = await ethers.getContractFactory("Transactions");
  const txn = await Transactions.deploy();

  await txn.deployed();

  console.log(
    `Transaction deployed to ${txn.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
