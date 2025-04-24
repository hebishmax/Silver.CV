// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWeb3 {
    string public message = "Hello Web3";

    function getMessage() public view returns (string memory) {
        return message;
    }
}
