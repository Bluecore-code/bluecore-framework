import React from 'react'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'refractor/lang/jsx.js';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import { Grid, Badge } from 'bluecore-react-ui'

SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Badges() {
    return (
        <div id="badges">
            <h4>Badge</h4>
            <div className="example">
                <div className="design">
                    <Grid gap="5" wrap center>
                        <Badge label="20" />
                        <Badge size="sm" color="primary" label="1" />
                        <Badge size="sm" color="secondary" label="1" />
                        <Badge size="sm" color="warning" label="1" />
                        <Badge size="sm" color="info" label="1" />
                        <Badge size="sm" color="danger" label="1" />
                        <Badge size="sm" color="success" label="1" />
                    </Grid>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Badge label="20" />
    <Badge size="sm" color="primary" label="1" />
    <Badge size="sm" color="secondary" label="1" />
    <Badge size="sm" color="warning" label="1" />
    <Badge size="sm" color="info" label="1" />
    <Badge size="sm" color="danger" label="1" />
    <Badge size="sm" color="success" label="1" />`}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}
