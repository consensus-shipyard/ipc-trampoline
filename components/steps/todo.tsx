const Greeting = ({ title, text }) => {
  return (
    <li class="relative pb-10">
      <div
        class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
        aria-hidden="true"
      ></div>
      <a href="#" class="group relative flex items-start">
        <span class="flex h-9 items-center" aria-hidden="true">
          <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
            <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"></span>
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col">
          <span class="text-sm font-medium text-gray-500">{title}</span>
          <span class="text-sm text-gray-500">{text}</span>
        </span>
      </a>
    </li>
  );
};

export default Greeting;
