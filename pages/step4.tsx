import { useState } from 'react';

import Active from '../components/steps/active';
import Done from '../components/steps/done';
import Todo from '../components/steps/todo';
import Last from '../components/steps/last';

import CreateSubnet from '../components/create-subnet';

const Test = () => {
  return (
    <div class="flex min-w-full">
      <div class="w-1/4">
        <nav aria-label="Progress">
          <ol role="list" class="overflow-hidden">
            <Done title="Download Stack" />
            <Done title="Select Parent Network" />
            <Done title="Generate Validators" />
            <Active title="Create subnet" />
            <Last title="Join the subnet" />
          </ol>
        </nav>
      </div>

      <div class="w-3/4 flex justify-center items-center">
        <CreateSubnet />
      </div>
    </div>
  );
};

export default Test;
