import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import python from "react-syntax-highlighter/dist/cjs/languages/hljs/xml.js";
import { dracula } from "react-syntax-highlighter/src/styles/hljs/index.js";
import { React } from "react";
("react");

function CodeCard({ code }) {
  return (
    <div className="flex flex-col">
      <div className="">
        <SyntaxHighlighter
          language={python}
          className="w-full rounded-md"
          style={dracula}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <p className="flex text-content font-content font-lexend mt-m-20">
        We will install the following Python Libraries pandas scikit-learn
        matplotlib
      </p>
    </div>
  );
}

export default CodeCard;
