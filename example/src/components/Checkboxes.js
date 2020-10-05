import React, { useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'refractor/lang/jsx.js';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import { Checkbox, Grid } from 'bluecore-react-ui'

SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Checkboxes() {
     const [state, setState] = useState({
        check1: false,
        check2: false,
        check3: false,
        check5: true
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      const { check1, check2, check3, check5 } = state;

    return (
        <div id="checkboxes">
            <h4>Checkbox</h4>
            <div className="example">
                <div className="design">
                    <Grid gap={10} wrap center>
                        <Checkbox label="Checkbox" name="check1" id="check1" color="success" onChange={handleChange} checked={check1}/>
                        <Checkbox label="Primary" name="check2"  id="check2" color="primary" onChange={handleChange} checked={check2}/>
                        <Checkbox label="Secondary" name="check3"  id="check3" color="secondary" onChange={handleChange} checked={check3}/>
                        <Checkbox label="Disabled" name="check4" disabled />
                        <Checkbox label="Disabled" name="check4" disabled checked />
                        <Checkbox label="Checked" name="check5" id="check5" color="danger" onChange={handleChange} checked={check5}/>
                    </Grid>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Checkbox label="Checkbox" name="check1" id="check1" color="success" onChange={handleChange} checked={check1}/>
<Checkbox label="Primary" name="check2"  id="check2" color="primary" onChange={handleChange} checked={check2}/>
<Checkbox label="Secondary" name="check3"  id="check3" color="secondary" onChange={handleChange} checked={check3}/>
<Checkbox label="Disabled" name="check4" disabled />
<Checkbox label="Disabled" name="check4" disabled checked />
<Checkbox label="Checked" name="check5" id="check5" color="danger" checked />`}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}
