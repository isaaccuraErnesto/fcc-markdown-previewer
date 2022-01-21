import React from 'react';

const Editor = ({
  content,
  setContent,
  editorExpanded,
  previewerExpanded,
  onClick,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent({
      [name]: value,
    });
  };

  return (
    <div
      id='editor-container'
      className={
        editorExpanded ? 'expanded' : previewerExpanded ? 'hidden' : 'regular'
      }
    >
      <div id='editor-toolbar' className='toolbar'>
        <h2 id='editor-toolbar-title'>Editor</h2>
        <div id='editor-toolbar-tools' className='toolbar-tools'>
          <i
            id='editor-toolbar-tools-view-toggle'
            className='fas fa-expand-arrows-alt expander'
            onClick={onClick}
          ></i>
        </div>
      </div>
      <textarea
        id='editor'
        className='content-window'
        name='markdownText'
        value={content.markdownText}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Editor;
