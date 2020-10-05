import React, { useEffect, useState } from 'react'
import { TextField, Button } from 'bluecore-react-ui'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'refractor/lang/jsx.js'
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light'


SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Forms() {
    const [form, setForm] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form)
        return false
    }
    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
    const handleError = (error) => { 
        const list = [...errors]
        list.push(error)
        setErrors(list)
        // setDisabled(error)
    }
    return (
        <div id="form">
            <h4>Form</h4>
            <div className="example">
                <div className="design">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            required
                            id="standard-required"
                            name="text"
                            label="Required"
                            errorText="Error"
                            defaultValue={form.text}
                            onChange={e => handleChange(e)}
                            error={(e) => handleError(e)}
                        />
                        <TextField
                            id="standard-password-input"
                            name="password"
                            label="Password"
                            type="password"
                            defaultValue={form.password}
                            onChange={e => handleChange(e)}
                            minLength={3}
                            maxLength={8}
                            errorText="Invalid Password: min 3 and max 8 caracters"
                            required
                            error={(error) => handleError(error)}
                        />
                        <TextField
                            id="standard-number"
                            name="number"
                            label="Number"
                            type="number"
                            defaultValue={form.number}
                            onChange={e => handleChange(e)}
                            min={10}
                            max={20}
                            errorText="Invalid number min 10 and max 20"
                            required
                        />
                        <TextField
                            id="standard-email"
                            name="email"
                            label="Email"
                            type="email"
                            defaultValue={form.email}
                            onChange={e => handleChange(e)}
                            errorText="Invalid Email"
                            required />
                        <Button color="primary">Send</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
