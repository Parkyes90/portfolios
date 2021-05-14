import * as esbuild from "esbuild-wasm";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";
import { fetchPlugin } from "./plugins/fetch-plugin";
import CodeEditor from "./components/code-editor";

const App = () => {
  const ref = useRef<any>();
  const iframe = useRef<any>();
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm",
    });
  };

  useEffect(() => {
    (async () => await startService())();
  }, []);

  const onClick = async () => {
    if (ref.current) {
      iframe.current.srcDoc = html;

      const result = await ref.current.build({
        entryPoints: ["index.js"],
        bundle: true,
        write: false,
        plugins: [unpkgPathPlugin(), fetchPlugin(input)],
        define: {
          "process.env.NODE_ENV": '"production"',
          global: "window",
        },
      });
      iframe.current.contentWindow.postMessage(result.outputFiles[0].text, "*");
    }
  };

  const html = `
    <html>
       <head></head>
        <body>
         <div id="root"></div>
          <script>
            window.addEventListener('message', (event) => {
              try{
                eval(event.data);
              } catch (e) {
                const root = document.querySelector("#root");
                root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + e + '</div>'
                console.error(err);
              }
            }, false)
          </script>
        </body>   
    </html>
  `;
  return (
    <div>
      <CodeEditor />
      <textarea
        value={input}
        rows={10}
        cols={100}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
      <iframe ref={iframe} srcDoc={html} title="doc" sandbox="allow-scripts" />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
