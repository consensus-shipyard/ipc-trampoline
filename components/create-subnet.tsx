import Link from 'next/link';
import { useState } from 'react';

const GenerateValidators = ({ title, text }) => {
  const [validatorCount, setValidatorCount] = useState(1);
  const [minValidatorStake] = useState(1);
  const [bottomUpCheckPeriod, setBottomUpCheckPeriod] = useState(30);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Logic for handling form submission
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        aria-labelledby="validator-form"
      >
        <div className="flex items-center">
          <span className="icon-validator-count mr-2" />{' '}
          {/* Icon for visual aid */}
          <label htmlFor="validatorCount">
            Number of Validators: {validatorCount}
          </label>
        </div>
        <input
          id="validatorCount"
          type="range"
          min="1"
          max="100"
          value={validatorCount}
          onChange={(e) => setValidatorCount(e.target.value)}
          className="range-slider"
        />
        <div className="flex items-center">
          <span className="icon-min-stake mr-2" /> {/* Icon for visual aid */}
          <label>Minimum Validator Stake: {minValidatorStake}</label>
        </div>
        <div> {/* Non-editable field for minimum stake */}</div>
        <div className="flex items-center">
          <span className="icon-bottom-up mr-2" /> {/* Icon for visual aid */}
          <label htmlFor="bottomUpCheckPeriod">
            Bottom Up Check Period (blocks):{' '}
          </label>
        </div>
        <input
          id="bottomUpCheckPeriod"
          type="number"
          value={bottomUpCheckPeriod}
          onChange={(e) => setBottomUpCheckPeriod(e.target.value)}
          className="number-input"
        />
        <button
          type="submit"
          className="  bg-blue-500 hover:bg-blue-700 text-white p-2 rounded button"
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
          href="/step5"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Next &gt;
        </Link>
      </p>
    </div>
  );
};

export default GenerateValidators;
