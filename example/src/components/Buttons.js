import React, { Component } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'refractor/lang/jsx.js';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import { Flex, Button, Divider } from 'bluecore-react-ui'

SyntaxHighlighter.registerLanguage('jsx', jsx);

export default class Buttons extends Component {
    render() {
        return (
            <div id="buttons">
                <h4>Buttons Default</h4>
                <div className="example">
                    <div className="design">
                        <Flex gap="10" wrap center>
                            <Button>Default</Button>
                            <Button color="primary">Primary</Button>
                            <Button color="secondary">Secondary</Button>
                            <Button disabled>Disabled</Button>
                            <Button color="primary" href="#default-buttons">Link</Button>
                            <Button color="primary" loading>Loading</Button>
                        </Flex>
                    </div>
                    <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
                        {`<Button>Default</Button>
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button disabled>Disabled</Button>
<Button color="primary" href="#default-buttons">Link</Button>
<Button color="primary" loading>Loading</Button>`}
                    </SyntaxHighlighter>
                </div>
                <h4>Buttons Texts</h4>
                <div className="example">
                    <div className="design">
                        <Flex gap="10" wrap center>
                            <Button variant="onlytext">Default</Button>
                            <Button variant="onlytext" color="primary">Primary</Button>
                            <Button variant="onlytext" color="secondary">Secondary</Button>
                            <Button variant="onlytext" disabled>Disabled</Button>
                            <Button variant="onlytext" href="#text-buttons" color="primary">Link</Button>
                            <Button variant="onlytext" color="primary" loading>Loading</Button>
                        </Flex>
                    </div>
                    <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Button variant="onlytext">Default</Button>
<Button variant="onlytext" color="primary">Primary</Button>
<Button variant="onlytext" color="secondary">Secondary</Button>
<Button variant="onlytext" disabled>Disabled</Button>
<Button variant="onlytext" href="#text-buttons" color="primary">Link</Button>
<Button variant="onlytext" color="primary" loading>Loading</Button>`}
                    </SyntaxHighlighter>
                </div>
                <Divider />
                <h4>Buttons Outlined</h4>
                <div className="example">
                    <div className="design">
                        <Flex gap="10" wrap center>
                            <Button variant="outlined">Default</Button>
                            <Button variant="outlined" color="primary">Primary</Button>
                            <Button variant="outlined" color="secondary">Secondary</Button>
                            <Button variant="outlined" disabled>Disabled</Button>
                            <Button variant="outlined" color="primary" href="#outlined-buttons">Link</Button>
                            <Button variant="outlined" color="primary" loading>Loading</Button>
                        </Flex>
                    </div>
                    <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Button variant="outlined">Default</Button>
<Button variant="outlined" color="primary">Primary</Button>
<Button variant="outlined" color="secondary">Secondary</Button>
<Button variant="outlined" disabled>Disabled</Button>
<Button variant="outlined" color="primary" href="#outlined-buttons">Link</Button>
<Button variant="outlined" color="primary" loading>Loading</Button>`}
                    </SyntaxHighlighter>
                </div>
                <Divider />
                <h4>Buttons Sizes</h4>
                <div className="example">
                    <div className="design">

                        <Flex gap="10" wrap center>
                            <Button color="primary" size="sm">Small</Button>
                            <Button color="primary" size="md">Medium</Button>
                            <Button color="primary" size="lg">Large</Button>
                        </Flex>
                    </div>
                    <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Button color="primary" size="sm">Small</Button>
<Button color="primary" size="md">Medium</Button>
<Button color="primary" size="lg">Large</Button>`}
                    </SyntaxHighlighter>
                </div>
            </div>
        )
    }
}
