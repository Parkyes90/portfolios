import React, { useEffect, useRef } from "react";
import "./preview.css";
interface PreviewProps {
  code: string;
  err: string;
}

const html = `
    <html>
       <head></head>
        <body>
         <div id="root"></div>
          <script>
            const handleError = (err) => {
              const root = document.querySelector("#root");
              root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + e + '</div>'
              console.error(err);
            }
            
            window.addEventListener('error', (event) => {
              event.preventDefault();
              handleError(event);
            });
            
            window.addEventListener('message', (event) => {
              try{
                eval(event.data);
              } catch (e) {
                handleError(err);
              }
            }, false)
          </script>
        </body>   
    </html>
  `;

const Preview: React.FC<PreviewProps> = ({ code, err }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, "*");
    }, 50);
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        style={{ background: "white" }}
        ref={iframe}
        srcDoc={html}
        title="doc"
        sandbox="allow-scripts"
      />
      {err && <div className="preview-error">{err}</div>}
    </div>
  );
};
export default Preview;
