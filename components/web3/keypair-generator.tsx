import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { ethers } from 'ethers';

const KeyPairGenerator = () => {
  const [publicAddress, setPublicAddress] = useState('');
  const [balance, setBalance] = useState('0');

  useEffect(() => {
    const generateKeyPair = () => {
      const wallet = ethers.Wallet.createRandom();
      setPublicAddress(wallet.address);
    };

    generateKeyPair();
  }, []); // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    console.log('IHHIHIHI');
    const web3 = new Web3('https://filecoin-calibration.chainup.net/rpc/v1');
    const generateKeyPair = async () => {
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        const wallet = web3.eth.accounts.create();
        setPublicAddress(wallet.address);
        updateBalance(wallet.address);
      }
    };

    const updateBalance = async (address) => {
      const balance = await web3.eth.getBalance(address);
      setBalance(web3.utils.fromWei(balance, 'ether'));
    };

    generateKeyPair();

    const interval = setInterval(() => {
      if (publicAddress) {
        updateBalance(publicAddress);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [publicAddress]);

  return (
    <div>
      {publicAddress && (
        <div>
          <p>Public Address: {publicAddress}</p>
          <p>Balance: {balance} ETH</p>
        </div>
      )}
    </div>
  );
};

export default KeyPairGenerator;
