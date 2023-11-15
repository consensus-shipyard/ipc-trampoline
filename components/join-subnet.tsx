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
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div>
          <label>Number of Validators: {validatorCount}</label>
          <input
            type="range"
            min="1"
            max="1"
            value={validatorCount}
            onChange={(e) => setValidatorCount(e.target.value)}
          />
        </div>
        <button
          type="Generate"
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
      <p class="p-8">
        <Link
          href="/step4"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Next &gt;
        </Link>
      </p>
    </div>
  );
};

export default JoinSubnet;
