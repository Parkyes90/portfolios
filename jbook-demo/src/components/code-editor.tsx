import MonacoEditor from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <MonacoEditor
      theme="dark"
      height="500px"
      language="javascript"
      options={{ wordWrap: "on" }}
    />
  );
};

export default CodeEditor;
