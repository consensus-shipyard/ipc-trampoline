import { useState } from 'react';

import Active from '../components/steps/active';
import Done from '../components/steps/done';
import Todo from '../components/steps/todo';
import Final from '../components/steps/final';

import JoinSubnet from '../components/join-subnet';

const Test = () => {
  return (
    <div class="flex">
      <div class="w-1/3">
        <nav aria-label="Progress">
          <ol role="list" class="overflow-hidden">
            <Done title="Download Stack" />
            <Done title="Select Parent Network" />
            <Done title="Generate Validators" />
            <Done title="Create subnet" />
            <Final title="Join the subnet" />
          </ol>
        </nav>
      </div>

      <div class="w-2/3 flex justify-center items-center">
        <JoinSubnet />
      </div>
    </div>
  );
};

export default Test;
