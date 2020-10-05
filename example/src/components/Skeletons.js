import React from 'react'
import { Skeleton, Grid } from 'bluecore-react-ui'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'refractor/lang/jsx.js'
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light'


SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Skeletons() {
  return (
    <div id="skeletons">
      <h4>Skeleton</h4>
      <div className="example">
        <div className="design">
          <Grid center>
            <div>
              <Skeleton variant="text" width={210} />
              <Skeleton variant="circle" width={40} height={40} />
              <Skeleton variant="rect" width={210} height={118} />
            </div>
          </Grid>
        </div>
        <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<div>
  <Skeleton variant="text" width={210} />
  <Skeleton variant="circle" width={40} height={40} />
  <Skeleton variant="rect" width={210} height={118} />
</div>`}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
