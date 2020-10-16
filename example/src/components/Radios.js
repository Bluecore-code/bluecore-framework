import React, { useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'refractor/lang/jsx.js';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import { Radio, Flex } from 'bluecore-react-ui'

SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Radios() {
    const [state, setState] = useState('')
    return (
        <div id="radios">
            <h4>Radio</h4>
            <div className="example">
                <div className="design">
                    <Flex gap={10} center wrap>
                        <Radio label="Sim" name="aceito" id="r1" color="secondary" defaultValue="sim" onChange={e => setState(e.target.value)}/>
                        <Radio label="Nao" name="aceito" id="r2"  defaultValue="nao" onChange={e => setState(e.target.value)}/>
                        <Radio label="Disabled" name="disabled" id="d3" disabled />
                        <Radio label="Disabled" name="disabled" id="d4" disabled checked />
                    </Flex>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Radio label="Sim" name="aceito" id="r1" color="secondary" defaultValue="sim" onChange={e => setState(e.target.value)}/>
<Radio label="Nao" name="aceito" id="r2"  defaultValue="nao" onChange={e => setState(e.target.value)}/>
<Radio label="Disabled" name="disabled" id="d3" disabled />
<Radio label="Disabled" name="disabled" id="d4" disabled checked />`}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}
