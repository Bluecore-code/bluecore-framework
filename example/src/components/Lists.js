import React, { useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'refractor/lang/jsx.js';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import { List, ListItem } from 'bluecore-react-ui'

SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Lists() {
    return (
        <div id="lists">
            <h4>List</h4>
            <div className="example">
                <div className="design">
                    <List>
                        <ListItem><p>Item 1</p></ListItem>
                        <ListItem><p>Item 2</p></ListItem>
                        <ListItem><p>Item 3</p></ListItem>
                    </List>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
                    {`<List>
    <ListItem><p>Item 1</p></ListItem>
    <ListItem><p>Item 2</p></ListItem>
    <ListItem><p>Item 3</p></ListItem>
</List>`}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}
