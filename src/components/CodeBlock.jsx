import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { React } from "react";
import python from "react-syntax-highlighter/dist/cjs/languages/hljs/xml";
import javascript from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import { dracula } from "react-syntax-highlighter/src/styles/hljs/index.js";
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("javascript", javascript);

function CodeBlock({ code, lang }) {
  return (
    <div className="my-m-10 flex rounded-md ">
      <SyntaxHighlighter
        language={python}
        className="w-full rounded-md"
        style={dracula}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
