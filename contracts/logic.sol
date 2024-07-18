// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Logic {
    address public storageAddress;

    constructor(address _storageAddress) {
        storageAddress = _storageAddress;
    }

    function setNumber(uint256 _number) public {
        (bool success, ) = storageAddress.call(
            abi.encodeWithSignature("setNumber(uint256)", _number)
        );
        require(success, "Call to Storage contract failed");
    }

    function getNumber() public view returns (uint256) {
        (bool success, bytes memory data) = storageAddress.staticcall(
            abi.encodeWithSignature("getNumber()")
        );
        require(success, "Call to Storage contract failed");
        return abi.decode(data, (uint256));
    }
}

