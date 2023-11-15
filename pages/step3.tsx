import { useState } from 'react';

import Active from '../components/steps/active';
import Done from '../components/steps/done';
import Todo from '../components/steps/todo';
import Last from '../components/steps/last';

import GenerateValidators from '../components/generate-validators';

const Test = () => {
  return (
    <div class="flex">
      <div class="w-1/3">
        <nav aria-label="Progress">
          <ol role="list" class="overflow-hidden">
            <Done title="Download Stack" />
            <Done title="Select Parent Network" />
            <Active title="Generate Validators" />
            <Todo title="Create subnet" />
            <Last title="Join the subnet" />
          </ol>
        </nav>
      </div>

      <div class="w-2/3 flex justify-center items-center">
        <GenerateValidators />
      </div>
    </div>
  );
};

export default Test;
