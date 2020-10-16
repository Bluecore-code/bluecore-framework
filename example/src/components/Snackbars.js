import React, { useState } from 'react'
import { SnackbarGroup, Snackbar, Button, Flex } from 'bluecore-react-ui'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'refractor/lang/jsx.js'
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light'


SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Snackbars() {
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [snackbars, setSnackbars] = useState([])

    const addSnackbar = (type = null, icon) => {
        let list = [...snackbars]
        list.push({ text: 'I love snackbars', type, close: true, icon })
        setSnackbars(list);
    }

    return (
        <div id="snackbars">
            <h4>Snackbar</h4>
            <div className="example">
                <div className="design">
                    <Flex gap={30} wrap center>
                        <Button onClick={_ => setShowSnackbar(true)} color="primary">Show Snackbar</Button>
                    </Flex>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
                    {`<Button onClick={_ => setShowSnackbar(true)} color="primary">Show Snackbar</Button>
{showSnackbar &&
    <SnackbarGroup>
        <Snackbar item={{ text: 'show message' }} />
    </SnackbarGroup>
}`}
                </SyntaxHighlighter>
            </div>
            <h4>Dynamic Snackbar</h4>
            <div className="example">
                <div className="design">
                    <Flex gap={30} wrap center>
                        <Button onClick={_ => addSnackbar()}>Add Snackbar</Button>
                        <Button onClick={_ => addSnackbar('success')}>Add Success Snackbar</Button>
                        <Button onClick={_ => addSnackbar('error')}>Add Danger Snackbar</Button>
                        <Button onClick={_ => addSnackbar('info')}>Add Info Snackbar</Button>
                        <Button onClick={_ => addSnackbar(null, 'info')}>Add Icon Snackbar</Button>
                    </Flex>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
                    {`export default class Example extends Component {
    state = {
        snackbars: ""
    };
    render () {
        addSnackbar = (type = null, icon) => {
            let list = [...snackbars]
            list.push({ text: 'I love snackbars', type, close: true, icon })
            setState({snackbars: list});
        }
        return (
            <Button onClick={_ => addSnackbar()}>Add Snackbar</Button>
            <Button onClick={_ => addSnackbar('success')}>Add Success Snackbar</Button>
            <Button onClick={_ => addSnackbar('error')}>Add Danger Snackbar</Button>
            <Button onClick={_ => addSnackbar('info')}>Add Info Snackbar</Button>
            <Button onClick={_ => addSnackbar(null, 'info')}>Add Icon Snackbar</Button>

            <SnackbarGroup items={snackbars} />
        )
    }
}`}
                </SyntaxHighlighter>
            </div>
            {showSnackbar &&
                <SnackbarGroup>
                    <Snackbar item={{ text: 'show message' }} />
                </SnackbarGroup>}
            <SnackbarGroup items={snackbars} />
        </div>
    )
}
