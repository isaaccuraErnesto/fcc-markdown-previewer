import React from 'react';

const Editor = ({ content, setContent }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent({
      [name]: value,
    });
  };

  return (
    <div id='editor-container'>
      <div id='editor-toolbar'>
        <h2 id='editor-toolbar-title'>Editor</h2>
        <div id='editor-toolbar-tools'>
          <i
            id='editor-toolbar-tools-view-toggle'
            className='fas fa-expand-arrows-alt'
          ></i>
        </div>
      </div>
      <textarea
        id='editor'
        name='markdownText'
        value={content.markdownText}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Editor;
