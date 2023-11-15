import { useState } from 'react';

import Active from '../components/steps/active';
import Done from '../components/steps/done';
import Todo from '../components/steps/todo';
import Final from '../components/steps/final';

import JoinSubnet from '../components/join-subnet';

const Test = () => {
  return (
    <div className="flex min-w-full">
      <div className="w-1/4">
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

      <div className="w-3/4 flex justify-center items-center">
        <JoinSubnet />
      </div>
    </div>
  );
};

export default Test;
