import React from 'react';
import { marked } from 'marked';

const Previewer = ({ content }) => {
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  return (
    <div id='preview-container'>
      <div id='preview-toolbar'>
        <h2 id='preview-toolbar-title'>Previewer</h2>
        <div id='preview-toolbar-tools'>
          <i
            id='preview-toolbar-tools-view-toggle'
            className='fas fa-expand-arrows-alt'
          ></i>
        </div>
      </div>
      <div
        id='preview'
        dangerouslySetInnerHTML={{ __html: marked(content.markdownText) }}
      ></div>
    </div>
  );
};

export default Previewer;
