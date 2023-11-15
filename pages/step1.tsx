import { useState } from 'react';

import DownloadFendermint from '../components/download-fendermint';
import Active from '../components/steps/active';
import Todo from '../components/steps/todo';
import Last from '../components/steps/last';

const Test = () => {
  return (
    <div class="flex min-w-full">
      <div class="w-1/4">
        <nav aria-label="Progress">
          <ol role="list" class="overflow-hidden">
            <Active title="Download Stack" />
            <Todo title="Select Parent Network" />
            <Todo title="Generate Validators" />
            <Todo title="Create subnet" />
            <Last title="Join the subnet" />
          </ol>
        </nav>
      </div>

      <div class="w-3/4 flex justify-center items-center">
        <DownloadFendermint />
      </div>
    </div>
  );
};

export default Test;
