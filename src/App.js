import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [markdown, setMarkdown] = useState("##markdown preview");

  return (
    <React.Fragment>
      <main>
        <section className="markdown">
          <textarea
            className="input"
            value={markdown}
            onChange={(event) => setMarkdown(event.target.value)}
          ></textarea>
          <article className="result">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </section>
      </main>
    </React.Fragment>
  );
};

export default App;
