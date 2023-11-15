const Last = ({ title, text }) => {
  return (
    <li class="relative">
      <div
        class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5"
        aria-hidden="true"
      ></div>
      <a href="#" class="group relative flex items-start" aria-current="step">
        <span class="flex h-9 items-center" aria-hidden="true">
          <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
            <span class="h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col">
          <span class="text-sm font-medium text-indigo-600">{title}</span>
          <span class="text-sm text-gray-500">{text}</span>
        </span>
      </a>
    </li>
  );
};

export default Last;
