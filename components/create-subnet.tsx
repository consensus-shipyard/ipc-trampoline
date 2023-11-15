import Link from 'next/link';
import { useState } from 'react';

const GenerateValidators = ({ title, text }) => {
  const [validatorCount, setValidatorCount] = useState(1);
  const [minValidatorStake] = useState(1); // Fixed value for Minimum Validator Stake
  const [bottomUpCheckPeriod, setBottomUpCheckPeriod] = useState(30); // Default value for Bottom Up Check Period

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
            max="1" // Assuming max range for validators, adjust as necessary
            value={validatorCount}
            onChange={(e) => setValidatorCount(e.target.value)}
          />
        </div>
        <div>
          <label>Minimum Validator Stake: {minValidatorStake}</label>
        </div>
        <div>
          <label>Bottom Up Check Period (blocks): </label>
          <input
            type="number"
            value={bottomUpCheckPeriod}
            onChange={(e) => setBottomUpCheckPeriod(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Create
        </button>
      </form>
      <hr />
      <div>
        <label>Output:</label>
        <p>
          Command:{' '}
          <code>
            ./bin/ipc-cli subnet create --parent /r230984 --min-validators{' '}
            {validatorCount} --min-validator-stake {minValidatorStake}{' '}
            --bottomup-check-period {bottomUpCheckPeriod}
          </code>
        </p>
        {/* IPC command output can be piped here */}
      </div>
      <p className="p-8">
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

export default GenerateValidators;
