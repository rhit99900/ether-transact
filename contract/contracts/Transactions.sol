// setting solidity version setting
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18; 

contract Transactions {
  uint256 transactionCounter; 

  // method to transfer amount.
  event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

  struct TransferStruct {
    address sender;
    address receiver;
    uint amount;
    string message;
    uint256 timestamp;
    string keyword;
  }

  TransferStruct[] transactions;

  // memory means 
  function addToBlockChain(address payable receiver, uint amount, string memory message, string memory keyword) public{
    transactionCounter += 1;
    transactions.push(TransferStruct(
      msg.sender, 
      receiver, 
      amount,
      message,
      block.timestamp,
      keyword
    ));

    emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
  }

  function getTransactions() public view returns (TransferStruct[] memory){
    return transactions;
    
  }

  function getTransactionCount() public view returns (uint256){
    return transactionCounter;
  }
}