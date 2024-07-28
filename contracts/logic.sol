// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IStorage {
    function registerWallet(address _wallet) external;
    function removeWallet(address _wallet) external;
    function isWalletRegistered(address _wallet) external view returns (bool);
}

contract Logic {
    IStorage public storageContract;

    constructor(address _storageAddress) {
        storageContract = IStorage(_storageAddress);
    }

    // Función para registrar una nueva wallet
    function registerNewWallet(address _wallet) external {
        require(_wallet != address(0), "Invalid wallet address");
        storageContract.registerWallet(_wallet);
    }

    // Función para verificar si una wallet está registrada
    function isWalletRegistered(address _wallet) external view returns (bool) {
        return storageContract.isWalletRegistered(_wallet);
    }
}

