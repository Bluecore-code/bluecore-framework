import React from 'react'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'refractor/lang/jsx.js'
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light'

import {Container, Divider} from 'bluecore-react-ui'

SyntaxHighlighter.registerLanguage('jsx', jsx)

export default function Dividers() {
    return (
        <div id="dividers">
            <h4>Divider</h4>
            <div className="example">
                <div className="design">
                    <Container className="my-1 px-2 py-2 bg-color-gray1">
                        <Divider />
                    </Container>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Divider />`}
                </SyntaxHighlighter>
            </div>
            <h4>Divider Align</h4>
            <div className="example">
                <div className="design">
                    <Container className="my-1 px-2 py-2 bg-color-gray1">
                        <Divider textAlign="left"><span>Text Left</span></Divider>
                        <Divider textAlign="center"><span>Text Center</span></Divider>
                        <Divider textAlign="right"><span>Text Right</span></Divider>
                    </Container>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Divider textAlign="left"><span>Text Left</span></Divider>
<Divider textAlign="center"><span>Text Center</span></Divider>
<Divider textAlign="right"><span>Text Right</span></Divider>`}
                </SyntaxHighlighter>
            </div>
            <h4>Divider Vertical</h4>
            <div className="example">
                <div className="design">
                    <Container className="my-1 px-2 py-2 bg-color-gray1">
                        <div style={{ height: 70 }}>
                            <Divider vertical />
                        </div>
                    </Container>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<div style={{ height: 70 }}>
    <Divider vertical />
</div>`}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}
