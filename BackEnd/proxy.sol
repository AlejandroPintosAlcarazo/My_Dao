// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Proxy {
    address public logicAddress;
    address public admin;

    event LogicAddressUpdated(address indexed oldAddress, address indexed newAddress);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor(address _logicAddress) {
        logicAddress = _logicAddress;
        admin = msg.sender;
    }

    function updateLogicAddress(address _newLogicAddress) external onlyAdmin {
        require(_newLogicAddress != address(0), "New logic address cannot be zero address");
        address oldAddress = logicAddress;
        logicAddress = _newLogicAddress;
        emit LogicAddressUpdated(oldAddress, _newLogicAddress);
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

