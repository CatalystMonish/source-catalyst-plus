import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeBlock() {
  const codeString = `import React from 'react'
import PremiumBadge from "./PremiumBadge"

const ProjectCard = () => {
  return (
    <div className='flex flex-col px-3 py-4 w-full h-auto rounded-xl bg-white font-poppins'> 
    <div className=" flex justify-between">
   
      <p className='font-semibold text-left text-lg font-poppins mb-2'>Speech to Text</p> 
  <PremiumBadge/>

   </div>
      <div className="flex space-y-1 flex-col">
      <div className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#AA4EC3"
          height="18px" width="18px">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" />
        </svg><span className='px-2 text-sm font-medium'>20 mins</span>
      </div>
      <div className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#E48713" class="w-5 h-5" height="18px" width="18px">
          <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
        </svg>
        <span className='px-2 text-sm font-medium'>Intermediate</span>
      </div>
      <div className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2E7CF6" class="w-5 h-5" height="18px" width="18px">
          <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z" />
        </svg>
        <span className='px-2 text-sm font-medium'>Video & Document</span>
      </div>
      </div>
    </div>
  )
}

export default ProjectCard`;
  return (
    <div className="my-m-10 flex rounded-md ">
      <SyntaxHighlighter
        language="javascript"
        className="w-full rounded-md"
        style={dracula}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
