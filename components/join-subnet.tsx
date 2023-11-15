import Link from 'next/link';
import { useState } from 'react';

const JoinSubnet = ({ title, text }) => {
  const [validatorCount, setValidatorCount] = useState(1);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add logic for key generation, address computation, and faucet interaction
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl sm:px-6 lg:px-8">
      <div className="space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p class="p-8">Join the subnet</p>
      </div>
    </div>
  );
};

export default JoinSubnet;
