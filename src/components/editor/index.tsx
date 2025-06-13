"use client";
import { Editor as MonacoEditor } from "@monaco-editor/react";
import { useState } from "react";
import { updateSnippet } from "@/actions";

interface Props {
  snippet: {
    id: number;
    title: string;
    code: string;
  };
}

export default function Editor({ snippet }: Props) {
  const [code, setCode] = useState(snippet.code);

  const updateSnippetWithId = updateSnippet.bind(null, snippet.id, code);

  const handleChange = (value: string = "") => {
    setCode(value);
  };

  return (
    <div>
      <MonacoEditor
        defaultValue={snippet.code}
        language="javascript"
        theme="vs-dark"
        height="40vh"
        options={{
          minimap: {
            enabled: false,
          },
        }}
        onChange={handleChange}
      />
      <form action={updateSnippetWithId}>
        <button className="p-2 border border-gray-200 rounded">Save</button>
      </form>
    </div>
  );
}
