import { useState } from 'react';

import StepOne from '../components/stepone';
import Active from '../components/steps/active';
import Todo from '../components/steps/todo';
import Last from '../components/steps/last';

const Test = () => {
  return (
    <div class="flex">
      <div class="w-1/3">
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

      <div class="w-2/3 flex justify-center items-center">
        <StepOne />
      </div>
    </div>
  );
};

export default Test;
