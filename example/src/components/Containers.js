import React from 'react'
import { Container } from 'bluecore-react-ui'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'refractor/lang/jsx.js'
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light'


SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Containers() {
    return (
        <div id="containers">
            <h4>Container</h4>
            <div className="example">
                <div className="design">
                    <Container size="sm">
                        <div style={{height: '200px', backgroundColor: '#d2d7e2'}}>
                        </div>
                    </Container>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Container>
    <div style={{height: '200px', backgroundColor: '#d2d7e2'}}></div>
</Container>`}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}
