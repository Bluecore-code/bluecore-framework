import React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'refractor/lang/jsx.js';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import {text} from 'bluecore-react-ui'

SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Predefined() {
    return (
        <div id="predefined">
            <h4>Predefined Text</h4>
            <h4>Uso</h4>
            <div className="example">
                <div className="design">
                    <p>{text('predefined')}</p>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`import React, { Component } from 'react';
import { text } from 'bluecore-react-ui';

export default class Example extends Component {
    render () {
        return (
            <p>{text('predefined')}</p>
        )
    }
}`}
                </SyntaxHighlighter>
            </div>
            <h4>+ Exemplos</h4>
            <div className="example">
                <div className="design">
                    <p>{text('welcome', 'Ana')}</p>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
                    {`<p>{text('welcome', 'Ana')}</p>`}
                </SyntaxHighlighter>
            </div>
            <div className="example">
                <div className="design">
                    <p>{text('errorLenghtField', ['nome','3', '8'])}</p>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
                    {`<p>{text('errorLenghtField', ['nome','3', '8'])}</p>`}
                </SyntaxHighlighter>

            </div>
        </div>
    )
}
