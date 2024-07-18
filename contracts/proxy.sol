// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Proxy {
    address public logicAddress;

    constructor(address _logicAddress) {
        logicAddress = _logicAddress;
    }

    fallback() external payable {
        address implementation = logicAddress;
        assembly {
            let ptr := mload(0x40)
            calldatacopy(ptr, 0, calldatasize())
            let result := delegatecall(gas(), implementation, ptr, calldatasize(), 0, 0)
            let size := returndatasize()
            returndatacopy(ptr, 0, size)
            switch result
            case 0 { revert(ptr, size) }
            default { return(ptr, size) }
        }
    }
}

