// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.7;

contract Greet {
    string public greetmsg;

    function setGreeting(string calldata _msg) external returns (bool status) {
        greetmsg = _msg;
        status = true;
    }

    function getmsg() external view returns (string memory _msg) {
        _msg = greetmsg;
    }
}
