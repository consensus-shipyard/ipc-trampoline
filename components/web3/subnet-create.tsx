import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { BigNumber } from '@ethersproject/bignumber';
import { IpcProvider } from '../../ipc-provider/src/provider';
import { SubnetID } from '../../ipc-provider/src/subnet';
import { CoinType, newDelegatedEthAddress } from '@glif/filecoin-address';

const SubnetCreate = () => {
  useEffect(() => {
    const initializeSubnet = async () => {
      let provider = IpcProvider.newForNetwork('calibration');

      // Set a signer from private key
      const privKey = JSON.parse(localStorage.getItem('validator1KeyPairPK'));
      console.log('private key', privKey);
      provider.withSigner(privKey);

      // Create subnet
      console.log('Creating subnet...');
      const addr = await provider.CreateSubnet(
        SubnetID.newRoot(314159),
        1,
        BigNumber.from(10000000),
        BigNumber.from(1000000000),
        30
      );
      console.log('Subnet actor deployed with addr: ' + addr);

      // Join subnet
      console.log('Joining subnet...');
      console.log(
        await provider.JoinSubnet(
          SubnetID.newFromParent(
            SubnetID.newRoot(314159),
            newDelegatedEthAddress(addr, CoinType.TEST)
          ),
          BigNumber.from(2000000000),
          BigNumber.from(2000000000)
        )
      );
    };

    initializeSubnet();
  }, []); // Empty dependency array ensures this runs once on mount

  return <div>Hi</div>;
};

export default SubnetCreate;
