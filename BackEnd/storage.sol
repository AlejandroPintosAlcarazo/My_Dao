// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Storage {
    // Mapeo para almacenar las direcciones de las wallets registradas
    mapping(address => bool) public registeredWallets;

    // Eventos para registro de wallets
    event WalletRegistered(address indexed walletAddress);
    event WalletRemoved(address indexed walletAddress);

    // Función para registrar una wallet
    function registerWallet(address _wallet) external {
        require(_wallet != address(0), "Invalid wallet address");
        registeredWallets[_wallet] = true;
        emit WalletRegistered(_wallet);
    }

    // Función para eliminar una wallet
    function removeWallet(address _wallet) external {
        require(registeredWallets[_wallet], "Wallet not registered");
        registeredWallets[_wallet] = false;
        emit WalletRemoved(_wallet);
    }

    // Función para verificar si una wallet está registrada
    function isWalletRegistered(address _wallet) external view returns (bool) {
        return registeredWallets[_wallet];
    }
}

