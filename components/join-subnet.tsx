import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { IpcProvider } from '../ipc-provider/src/provider';
import { SubnetID } from '../ipc-provider/src/subnet';
import { BigNumber } from '@ethersproject/bignumber';
import { CoinType, newDelegatedEthAddress } from '@glif/filecoin-address';

const JoinSubnet = ({ title, text }) => {
  const [validatorCount, setValidatorCount] = useState(1);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add logic for key generation, address computation, and faucet interaction
  };

  useEffect(() => {
    const initializeSubnet = async () => {
      const ipcProviderName = JSON.parse(localStorage.getItem('rootNetwork'));
      let provider = IpcProvider.newForNetwork(ipcProviderName);

      // Set a signer from private key
      const privKey = JSON.parse(localStorage.getItem('validator1KeyPairPK'));
      provider.withSigner(privKey);

      const subnetActorAddress = JSON.parse(
        localStorage.getItem('subnetActorAddress')
      );

      const tx = await provider.JoinSubnet(
        SubnetID.newFromParent(
          SubnetID.newRoot(314159),
          newDelegatedEthAddress(subnetActorAddress, CoinType.TEST)
        ),
        BigNumber.from(2000000000),
        BigNumber.from(2000000000)
      );
      console.log(tx);
    };

    initializeSubnet();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="container mx-auto p-4 max-w-7xl sm:px-6 lg:px-8">
      <div className="space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="p-8">Join the subnet</p>
      </div>
    </div>
  );
};

export default JoinSubnet;
