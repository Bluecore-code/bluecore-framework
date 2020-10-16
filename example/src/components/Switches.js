import React, { useState } from 'react'
import { Switch, Flex } from 'bluecore-react-ui'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'refractor/lang/jsx.js'
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light'


SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Switches() {
  const [state, setState] = useState({
    s1: false,
    s2: false,
    s3: false,
    s5: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { s1, s2, s3, s5 } = state;

  return (
    <div id="switches">
      <h4>Switch</h4>
      <div className="example">
        <div className="design">
          <Flex gap={10} wrap>
            <Switch id="s1" color="warning" name="s1" onChange={handleChange} checked={s1} />
            <Switch id="s2" color="primary" name="s2" onChange={handleChange} checked={s2} />
            <Switch id="s3" color="secondary" name="s3" onChange={handleChange} checked={s3} />
            <Switch id="s4" disabled />
            <Switch id="s4" disabled checked />
            <Switch id="s5" color="success" name="s5" onChange={handleChange} checked={s5} />
          </Flex>
        </div>
        <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Switch id="s1" color="warning" name="s1" onChange={handleChange} checked={s1} />
<Switch id="s2" color="primary" name="s2" onChange={handleChange} checked={s2} />
<Switch id="s3" color="secondary" name="s3" onChange={handleChange} checked={s3} />
<Switch id="s4" disabled />
<Switch id="s4" disabled checked />
<Switch id="s5" color="success" name="s5" checked />`}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
