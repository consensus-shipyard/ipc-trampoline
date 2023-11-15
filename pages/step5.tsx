import { useState } from 'react';

import Active from '../components/steps/active';
import Done from '../components/steps/done';
import Todo from '../components/steps/todo';
import Final from '../components/steps/final';

import JoinSubnet from '../components/join-subnet';

const Test = () => {
  return (
    <div class="flex min-w-full border-2 border-solid border-gray-400 p-8">
      <div class="flex-shrink-0">
        <h2 className="text-xl font-bold p-8 pl-0">IPC Trampoline</h2>
        <nav aria-label="Progress">
          <ol role="list" className="overflow-hidden">
            <Done title="Download Stack" />
            <Done title="Select Parent Network" />
            <Done title="Generate Validators" />
            <Done title="Create subnet" />
            <Final title="Join the subnet" />
          </ol>
        </nav>
      </div>

      <div class="flex-grow justify-center items-center">
        <JoinSubnet />
      </div>
    </div>
  );
};

export default Test;
