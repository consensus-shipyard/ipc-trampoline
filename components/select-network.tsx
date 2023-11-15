import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const SelectNetwork = ({ title, text }) => {
  const [network, setNetwork] = useState('Mycelium Calibration');
  const router = useRouter(); // useRouter hook for redirection

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add logic for key generation, address computation, and faucet interaction
    //
    // TODO store state
    //

    router.push('/step3');
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select the root network:
          </label>
          <select
            className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
          >
            <option value="Mycelium Calibration">Mycelium Calibration</option>
            <option value="Calibrationnet">Calibrationnet</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SelectNetwork;
