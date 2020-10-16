import React, { useState } from 'react';
import { TextField, Flex } from 'bluecore-react-ui';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'refractor/lang/jsx.js'
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light'


SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Inputs() {

    const [password, setPassword] = useState('')
    const [hintField, setHintField] = useState('Default Value')
    const [number, setNumber] = useState('')
    const [search, setSearch] = useState('')
    const [email, setEmail] = useState('')


    const [requiredField, setRequiredField] = useState('')
    const [requiredPassword, setRequiredPassword] = useState('')
    const [requiredEmail, setRequiredEmail] = useState('')
    const [requiredNumber, setRequiredNumber] = useState('')

    return (
        <div id="inputs">
            <h4>TextField/ Inputs</h4>
            <div className="example">
                <div className="design">
                    <Flex wrap gap={30}>
                        <TextField
                            disabled
                            id="standard-disabled"
                            label="Disabled"
                            defaultValue="Hello World" />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            defaultValue={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="Read Only"
                            defaultValue="Hello World"
                            readOnly
                        />
                        <TextField
                            id="standard-number"
                            label="Number"
                            type="number"
                            defaultValue={number}
                            onChange={e => setNumber(e.target.value)}
                        />
                        <TextField
                            id="standard-search"
                            label="Search field"
                            type="search"
                            defaultValue={search}
                            onChange={e => setSearch(e.target.value)} />
                        <TextField
                            id="standard-email"
                            label="Email"
                            type="email"
                            defaultValue={email}
                            onChange={e => setEmail(e.target.value)} />
                        <TextField
                            id="standard-helperText"
                            label="Helper text"
                            defaultValue={hintField}
                            onChange={e => setHintField(e.target.value)}
                            hintText="Some important text"
                        />
                    </Flex>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
                    {`<TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />

<TextField id="standard-password-input" label="Password" type="password" defaultValue={password} onChange={e => setPassword(e.target.value)} />

<TextField id="standard-read-only-input" label="Read Only" defaultValue="Hello World" readOnly />

<TextField id="standard-number" label="Number" type="number" defaultValue={number} onChange={e => setNumber(e.target.value)} />

<TextField id="standard-search" label="Search field" type="search" defaultValue={search} onChange={e => setSearch(e.target.value)} />

<TextField id="standard-email" label="Email" type="email" defaultValue={email} onChange={e => setEmail(e.target.value)} />

<TextField id="standard-helperText" label="Helper text" defaultValue={hintField} onChange={e => setHintField(e.target.value)} hintText="Some important text" />`}
                </SyntaxHighlighter>
            </div>
            <h4>Validate</h4>
            <div className="example">
                <div className="design">
                    <Flex wrap gap={30}>
                        <TextField
                            required
                            id="standard-required"
                            label="Required"
                            errorText="Error"
                            defaultValue={requiredField}
                            onChange={e => setRequiredField(e.target.value)}
                        />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            defaultValue={requiredPassword}
                            onChange={e => setRequiredPassword(e.target.value)}
                            minLength={3}
                            maxLength={8}
                            errorText="Invalid Password: min 3 and max 8 caracters"
                            required
                        />
                        <TextField
                            id="standard-number"
                            label="Number"
                            type="number"
                            defaultValue={requiredNumber}
                            onChange={e => setRequiredNumber(e.target.value)}
                            min={10}
                            max={20}
                            errorText="Invalid number min 10 and max 20"
                            required
                        />
                        <TextField
                            id="standard-email"
                            label="Email"
                            type="email"
                            defaultValue={requiredEmail}
                            onChange={e => setRequiredEmail(e.target.value)}
                            errorText="Invalid Email"
                            required />
                    </Flex>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
                    {`<TextField
    required
    id="standard-required"
    label="Required"
    errorText="Error"
    defaultValue={requiredField}
    onChange={e => setRequiredField(e.target.value)}
/>
<TextField
    id="standard-password-input"
    label="Password"
    type="password"
    defaultValue={requiredPassword}
    onChange={e => setRequiredPassword(e.target.value)}
    minLength={3}
    maxLength={8}
    errorText="Invalid Password: min 3 and max 8 caracters"
    required
/>
<TextField
    id="standard-number"
    label="Number"
    type="number"
    defaultValue={requiredNumber}
    onChange={e => setRequiredNumber(e.target.value)}
    min={10}
    max={20}
    errorText="Invalid number min 10 and max 20"
    required
/>
<TextField
    id="standard-email"
    label="Email"
    type="email"
    defaultValue={requiredEmail}
    onChange={e => setRequiredEmail(e.target.value)}
    errorText="Invalid Email"
    required />`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}
