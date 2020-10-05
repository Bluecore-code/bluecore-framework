import React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'refractor/lang/jsx.js';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light';

import { Container, Row, Column } from 'bluecore-react-ui'

SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Grids() {
    return (
        <div id="grids">
            <h4>Grids</h4>
            <div className="example">
                <div className="design">
                    <Container>
                        <Row>
                            <Column className="bg-color-gray1" style={{ border: '1px solid #d4d4d4' }}>One of three columns 1</Column>
                            <Column className="bg-color-gray1" style={{ border: '1px solid #d4d4d4' }}>One of three columns 2</Column>
                            <Column className="bg-color-gray1" style={{ border: '1px solid #d4d4d4' }}>One of three columns 3</Column>
                        </Row>
                    </Container>
                    <br />
                    <Container>
                        <Row>
                            <Column className="bg-color-gray1" style={{ border: '1px solid #d4d4d4' }}>1 of 3</Column>
                            <Column sm={6} className="bg-color-gray1" style={{ border: '1px solid #d4d4d4' }}>2 of 3 (wider)</Column>
                            <Column className="bg-color-gray1" style={{ border: '1px solid #d4d4d4' }}>3 of 3</Column>
                        </Row>
                    </Container>
                    <br />
                    <Container>
                        <Row className="row">
                            <Column sm={8} className="bg-color-gray1" style={{ border: '1px solid #d4d4d4' }}>col-sm-8</Column>
                            <Column sm={4} className="bg-color-gray1" style={{ border: '1px solid #d4d4d4' }}>col-sm-4</Column>
                        </Row>
                    </Container>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Container>
    <Row>
        <Column className="bg-color-gray1" style={{ border: '1px solid #d4d4d4' }}>One of three columns 1</Column>
        <Column className="bg-color-gray1" style={{ border: '1px solid #d4d4d4' }}>One of three columns 2</Column>
        <Column className="bg-color-gray1" style={{ border: '1px solid #d4d4d4' }}>One of three columns 3</Column>
    </Row>
    </Container>
    <br />
    <Container>
    <Row>
        <Column className="bg-color-gray1" style={{ border: '1px solid #d4d4d4' }}>1 of 3</Column>
        <Column sm={6} className="bg-color-gray1" style={{ border: '1px solid #d4d4d4' }}>2 of 3 (wider)</Column>
        <Column className="bg-color-gray1" style={{ border: '1px solid #d4d4d4' }}>3 of 3</Column>
    </Row>
    </Container>
    <br />
    <Container>
    <Row className="row">
        <Column sm={8} className="bg-color-gray1" style={{ border: '1px solid #d4d4d4' }}>col-sm-8</Column>
        <Column sm={4} className="bg-color-gray1" style={{ border: '1px solid #d4d4d4' }}>col-sm-4</Column>
    </Row>
</Container>`}
                </SyntaxHighlighter>
            </div>
            <div className="example">
                <div className="design">
                    <Container>
                        <Row justify="between-md">
                            <Column sm={2} className="bg-color-gray1">One of three columns</Column>
                            <Column sm={2} className="bg-color-gray1">One of three columns</Column>
                            <Column sm={2} className="bg-color-gray1">One of three columns</Column>
                        </Row>
                    </Container>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Container>
    <Row justify="between-md">
        <Column sm={2} className="bg-color-gray1">One of three columns</Column>
        <Column sm={2} className="bg-color-gray1">One of three columns</Column>
        <Column sm={2} className="bg-color-gray1">One of three columns</Column>
    </Row>
</Container>`}
                </SyntaxHighlighter>
            </div>
            <div className="example">
                <div className="design">
                    <Container>
                        <Row justify="around-md">
                            <Column sm={2} className="bg-color-gray1">One of three columns</Column>
                            <Column sm={2} className="bg-color-gray1">One of three columns</Column>
                            <Column sm={2} className="bg-color-gray1">One of three columns</Column>
                        </Row>
                    </Container>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Container>
    <Row justify="around-md">
        <Column sm={2} className="bg-color-gray1">One of three columns</Column>
        <Column sm={2} className="bg-color-gray1">One of three columns</Column>
        <Column sm={2} className="bg-color-gray1">One of three columns</Column>
    </Row>
</Container>`}
                </SyntaxHighlighter>
            </div>
            <div className="example">
                <div className="design">
                    <Container>
                        <Row justify="end-md">
                            <Column sm={2} className="bg-color-gray1">One of three columns</Column>
                            <Column sm={2} className="bg-color-gray1">One of three columns</Column>
                            <Column sm={2} className="bg-color-gray1">One of three columns</Column>
                        </Row>
                    </Container>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Container>
    <Row justify="end-md">
        <Column sm={2} className="bg-color-gray1">One of three columns</Column>
        <Column sm={2} className="bg-color-gray1">One of three columns</Column>
        <Column sm={2} className="bg-color-gray1">One of three columns</Column>
    </Row>
</Container>`}
                </SyntaxHighlighter>
            </div>
            <div className="example">
                <div className="design">
                    <Container>
                        <Row justify="start-md">
                            <Column sm={2} className="bg-color-gray1">One of three columns</Column>
                            <Column sm={2} className="bg-color-gray1">One of three columns</Column>
                            <Column sm={2} className="bg-color-gray1">One of three columns</Column>
                        </Row>
                    </Container>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Container>
    <Row justify="start-md">
        <Column sm={2} className="bg-color-gray1">One of three columns</Column>
        <Column sm={2} className="bg-color-gray1">One of three columns</Column>
        <Column sm={2} className="bg-color-gray1">One of three columns</Column>
    </Row>
</Container>`}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}
