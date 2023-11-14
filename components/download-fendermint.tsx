import Link from 'next/link';

const DownloadFendermint = ({ title, text }) => {
  return (
    <div>
      <p class="p-8">
        <span class="text-sm font-medium text-gray-500">
          The first step downloads the IPC Fendermint stack to the machine where
          you've installed the IPC Trampoline.
        </span>
      </p>
      <p class="p-8">
        <span class="text-sm font-medium text-gray-500">
          It will be downloaded to ~/ipc-trampoline-workspace.
        </span>
      </p>
      <p class="p-8">
        <Link
          href="/step2"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Next &gt;
        </Link>
      </p>
    </div>
  );
};

export default DownloadFendermint;
