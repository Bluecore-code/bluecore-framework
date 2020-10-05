import React, { useState } from 'react'
import { Select, Grid } from 'bluecore-react-ui'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'refractor/lang/jsx.js'
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light'


SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Selects() {

    const [age, setAge] = useState('');
    const [ageRequired, setAgeRequired] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleChangeRequired = (event) => {
        console.log('front', event)
        setAgeRequired(event.target.value);
    }

    const options = [
        {
            label: 'Livre',
            value: 0
        },
        {
            label: '+12',
            value: 12
        },
        {
            label: '+14',
            value: 14
        },
        {
            label: '+16',
            value: 16
        },
        {
            label: '+18',
            value: 18
        }
    ]

    return (
        <div id="selects">
            <h4>Select</h4>
            <div className="example">
                <div className="design">
                    <Grid gap={30} wrap>
                        <Select
                            label="Default"
                            id="select1"
                            value={age}
                            options={options}
                            onChange={handleChange}
                        >
                        </Select>
                        <Select
                            label="Placeholder"
                            id="select2"
                            value={age}
                            options={options}
                            onChange={handleChange}
                            defaultOption={{
                                disabled: true,
                                label: 'Select age'
                            }}
                        >
                        </Select>
                        <Select
                            label="With Hint"
                            id="select3"
                            value={age}
                            options={options}
                            onChange={handleChange}
                            hintText="Select a age"
                        >
                        </Select>
                        <Select
                            label="Required"
                            id="select4"
                            value={ageRequired}
                            options={options}
                            onChange={handleChangeRequired}
                            errorText="Invalid option"
                            required
                        >
                        </Select>
                    </Grid>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
                    {`<Select
    label="Default"
    id="select1"
    value={age}
    options={options}
    onChange={handleChange}
>
</Select>
<Select
    label="Placeholder"
    id="select2"
    value={age}
    options={options}
    onChange={handleChange}
    defaultOption={{
        disabled: true,
        label: 'Select age'
    }}
>
</Select>
<Select
    label="With Hint"
    id="select3"
    value={age}
    options={options}
    onChange={handleChange}
    hintText="Select a age"
>
</Select>
<Select
    label="Required"
    id="select4"
    value={ageRequired}
    options={options}
    onChange={handleChangeRequired}
    errorText="Invalid option"
    required
>
</Select>`}
                </SyntaxHighlighter>
            </div>
        </div>

    )
}
