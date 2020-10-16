import React, { useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'refractor/lang/jsx.js';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import { Dropdown, Flex, Button } from 'bluecore-react-ui'

SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Dropdowns() {

    const [items] = useState([
        { name: 'Item 1' },
        { name: 'Item 2' },
        { name: 'Item 3' }
    ])

    const clickItem = () => {
        alert('click')
    };

    return (
        <div id="dropdowns">
            <h4>Dropdown</h4>
            <div className="example">
                <div className="design">
                    <Flex gap={30} wrap center>
                        <Dropdown items={items} onClick={clickItem} y="top" x="left">
                            <Button>Dropdown Top/Left</Button>
                        </Dropdown>
                        <Dropdown items={items} onClick={clickItem} y="top" x="right">
                            <Button color="primary">Dropdown Top/Right</Button>
                        </Dropdown>
                        <Dropdown items={items} onClick={clickItem} y="bottom" x="left">
                            <Button color="secondary">Dropdown Bottom/Left</Button>
                        </Dropdown>
                        <Dropdown items={items} onClick={clickItem} y="bottom" x="right">
                            <Button color="danger">Dropdown Bottom/Right</Button>
                        </Dropdown>
                    </Flex>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Dropdown items={items} onClick={clickItem} y="top" x="left">
    <Button>Dropdown Top/Left</Button>
</Dropdown>
<Dropdown items={items} onClick={clickItem} y="top" x="right">
    <Button color="primary">Dropdown Top/Right</Button>
</Dropdown>
<Dropdown items={items} onClick={clickItem} y="bottom" x="left">
    <Button color="secondary">Dropdown Bottom/Left</Button>
</Dropdown>
<Dropdown items={items} onClick={clickItem} y="bottom" x="right">
    <Button color="danger">Dropdown Bottom/Right</Button>
</Dropdown>`}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}
