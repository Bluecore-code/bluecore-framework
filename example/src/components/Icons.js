import React from 'react'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'refractor/lang/jsx.js'
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light'

import { Grid, Icon } from 'bluecore-react-ui'

SyntaxHighlighter.registerLanguage('jsx', jsx)

export default function Icons() {
    return (
        <div id="icons">
            <h4>Feather Icons</h4>
            <div className="example">
                <div className="design">
                    <Grid gap={10} wrap center>
                        <Icon name="plus" />
                        <Icon name="minus" />
                        <Icon name="trash" />
                        <Icon name="arrow-left" />
                        <Icon name="arrow-down" />
                        <Icon name="arrow-right" />
                        <Icon name="arrow-up" />
                        <Icon name="search" />
                        <Icon name="bell" />
                        <Icon name="check" />
                        <Icon name="clock" />
                        <Icon name="copy" />
                    </Grid>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Icon name="plus" />
<Icon name="minus" />
<Icon name="trash" />
<Icon name="arrow-left" />
<Icon name="arrow-down" />
<Icon name="arrow-right" />
<Icon name="arrow-up" />
<Icon name="search" />
<Icon name="bell" />
<Icon name="check" />
<Icon name="clock" />
<Icon name="copy" />`}
                </SyntaxHighlighter>
            </div>
            <h4>Icons Color</h4>
            <div className="example">
                <div className="design">
                    <Grid gap={10} wrap center>
                        <Icon name="plus" color="red"/>
                        <Icon name="minus" color="yellow"/>
                        <Icon name="trash" color="blue"/>
                        <span style={{color: '#d752d8'}}>
                            <Icon name="arrow-left" />
                        </span>
                        <span className="primary-color">
                            <Icon name="search" />
                        </span>
                        <span className="primary-color">
                            <Icon name="bell" />
                        </span>
                        <span className="secondary-color">
                            <Icon name="clock" />
                        </span>
                        <span className="success-color">
                            <Icon name="check" />
                        </span>
                        <span className="danger-color">
                            <Icon name="x-octagon" />
                        </span>
                        <span className="warning-color">
                            <Icon name="alert-circle" />
                        </span>           
                    </Grid>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Icon name="plus" color="red"/>
<Icon name="minus" color="yellow"/>
<Icon name="trash" color="blue"/>

<span style={{color: '#d752d8'}}>
    <Icon name="arrow-left" />
</span>
<span className="primary-color">
    <Icon name="search" />
</span>
<span className="primary-color">
    <Icon name="bell" />
</span>
<span className="secondary-color">
    <Icon name="clock" />
</span>
<span className="success-color">
    <Icon name="check" />
</span>
<span className="danger-color">
    <Icon name="x-octagon" />
</span>
<span className="warning-color">
    <Icon name="alert-circle" />
</span> `}
                </SyntaxHighlighter>
            </div>
            <h4>Icons Sizes</h4>
            <div className="example">
                <div className="design">
                    <Grid gap={10} wrap center>
                        <Icon name="plus" size={12}/>
                        <Icon name="minus" size={14}/>
                        <Icon name="trash" size={16}/>
                        <Icon name="search" size={18}/>
                        <Icon name="bell" size={20}/>
                        <Icon name="check" size={22}/>
                        <Icon name="clock" size={24}/>
                        <Icon name="copy" size={32}/>
                    </Grid>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Icon name="plus" size={12}/>
<Icon name="minus" size={14}/>
<Icon name="trash" size={16}/>
<Icon name="search" size={18}/>
<Icon name="bell" size={20}/>
<Icon name="check" size={22}/>
<Icon name="clock" size={24}/>
<Icon name="copy" size={32}/>`}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}
