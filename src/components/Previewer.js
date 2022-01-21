import React from 'react';
import { marked } from 'marked';

const Previewer = ({ content, editorExpanded, previewerExpanded, onClick }) => {
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  return (
    <div
      id='preview-container'
      className={
        previewerExpanded ? 'expanded' : editorExpanded ? 'hidden' : 'regular'
      }
    >
      <div id='preview-toolbar' className='toolbar'>
        <h2 id='preview-toolbar-title'>Previewer</h2>
        <div id='preview-toolbar-tools' className='toolbar-tools'>
          <i
            id='preview-toolbar-tools-view-toggle'
            className='fas fa-expand-arrows-alt expander'
            onClick={onClick}
          ></i>
        </div>
      </div>
      <div
        id='preview'
        className='content-window'
        dangerouslySetInnerHTML={{ __html: marked(content.markdownText) }}
      ></div>
    </div>
  );
};

export default Previewer;
