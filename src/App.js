import React, { useState } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

function App() {
  const initialContent = `  # Welcome to my Markdown Previewer!
  ## The previous line was a heading.
  ### Same for the previous one.
  #### Yes, we're all headings.
  ##### Decreasing in size.
  ###### Size matters.
  ## So, what is markdown?
  Let me borrow the following definition by markdown's experts at [Markdown Guide](https://www.markdownguide.org/):
  
  > Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.
  
  In plain words:

  - It's easy!
  - It ain't heavy!
  - It makes boring documents cool!
  
  Sceptical, don't take my word for it, check this out!
  
  Want to cross out ~~text~~? Make **text** bold maybe? Done and done!

  Easier than \`<em>text<em>\` and definitely much much easier than:

  \`\`\`
#text {
  text-decoration: line-through;
}
\`\`\`
  
I convinced you, didn't I? Go learn more about markdown by clicking on that link above!

![freeCodeCamp Logo](/img/fcc_primary_large.png)`;

  const [editorContent, setEditorContent] = useState({
    markdownText: initialContent,
  });

  return (
    <div className='App'>
      <h1 id='title'>Markdown Previewer</h1>
      <div id='main-container'>
        <Editor content={editorContent} setContent={setEditorContent} />
        <Previewer content={editorContent} />
      </div>
    </div>
  );
}

export default App;
