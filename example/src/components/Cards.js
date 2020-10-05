import React from 'react'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'refractor/lang/jsx.js'
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light'

import { Grid, Card, CardHeader, CardContent, CardFooter, Button, Avatar, Icon } from 'bluecore-react-ui'

SyntaxHighlighter.registerLanguage('jsx', jsx)

export default function Cards() {
    return (
        <div id="cards">
            <h4>Card</h4>
            <div className="example">
                <div className="design">
                    <Grid center>
                        <Card width={350}>
                            <CardHeader>
                                <Grid gap={10}>
                                    <Avatar />
                                    <div>
                                        <p style={{fontWeight:'bold'}}>John Doe</p>
                                    </div>
                                </Grid>
                                <Button rounded variant="onlytext" color="gray4">
                                    <Icon name="more-vertical" size={18}/>
                                </Button>
                            </CardHeader>
                            <CardContent>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam</p>
                            </CardContent>
                            <CardFooter>
                                <Button size="small" color="primary" variant="onlytext">Share</Button>
                                <Button size="small" color="primary" variant="onlytext">Learn More</Button>
                            </CardFooter>
                        </Card>
                    </Grid>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Card width={350}>
    <CardHeader>
        <Grid gap={10}>
            <Avatar />
            <div>
                <p style={{fontWeight:'bold'}}>John Doe</p>
            </div>
        </Grid>
        <Button rounded variant="onlytext" color="gray4">
            <Icon name="more-vertical" size={18}/>
        </Button>
    </CardHeader>
    <CardContent>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam</p>
    </CardContent>
    <CardFooter>
        <Button size="small" color="primary" variant="onlytext">Share</Button>
        <Button size="small" color="primary" variant="onlytext">Learn More</Button>
    </CardFooter>
</Card>`}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}
