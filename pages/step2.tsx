import { useState } from 'react';

import Active from '../components/steps/active';
import Done from '../components/steps/done';
import Todo from '../components/steps/todo';
import Last from '../components/steps/last';

import SelectNetwork from '../components/select-network';

const Test = () => {
  return (
    <div className="flex min-w-full">
      <div className="w-1/4">
        <nav aria-label="Progress">
          <ol role="list" className="overflow-hidden">
            <Done title="Download Stack" />
            <Active title="Select Parent Network" />
            <Todo title="Generate Validators" />
            <Todo title="Create subnet" />
            <Last title="Join the subnet" />
          </ol>
        </nav>
      </div>

      <div className="w-3/4 flex justify-center items-center">
        <SelectNetwork />
      </div>
    </div>
  );
};

export default Test;
