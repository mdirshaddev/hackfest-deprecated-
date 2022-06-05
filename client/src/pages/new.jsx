import React, { useState } from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import '@uiw/react-markdown-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

function New() {
  const [markdown, setMarkdown] = useState('');
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh'
      }}>
      <MarkdownEditor
        value={markdown}
        onChange={(editor, data, value) => setMarkdown(value)}
      />
    </div>
  );
}

export default New;
