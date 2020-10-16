import React, { Component } from 'react'
import Calendar from 'react-calendar';

import TextField from './TextField';
import { Dialog, DialogHeader, DialogContent, DialogFooter } from './Dialog';
import Button from './Button';

export default class Datepicker extends Component {
    state = {
        startDate: new Date(),
        openSm: false,
        date: null
    }

    onChange = startDate => this.setState({ startDate });

    
    handleClose = e => this.setState({ openSm: false });
    handleOpen = e => this.setState({ openSm: true });
    
    handleSelectDate = e => {
        console.log(this.state.startDate);
        // let date = '';
        // if (this.props.range) {
        //     date = `${this.state.startDate[0] ? this.state.startDate[0].toLocaleDateString() : ''} 
        //         ${this.state.startDate[1] ? ', ' + this.state.startDate[1].toLocaleDateString() : ''}`;
        //     // this.setState({ date });
        //     console.log(this.state.startDate);
        // } else {
        //     date = this.state.startDate.toLocaleDateString();
        //     this.setState({ date });
        // }
    }
    
    render() {
        return (
            <div className="datepicker">
                <TextField label="Selecione uma data"
                    readOnly
                    defaultValue={this.state.date}
                    onClick={e => this.handleOpen()} />

                <Dialog open={this.state.openSm} size="sm" onClose={e => this.handleClose()}>
                    <DialogContent>
                        <Calendar
                            onChange={this.onChange}
                            value={this.state.startDate}
                            selectRange={this.props.range}
                            locale="pt"
                        />
                    </DialogContent>
                    <DialogFooter>
                        <Button onClick={e => this.handleClose()} variant="onlytext">Cancelar</Button>
                        <Button onClick={e => this.handleSelectDate()} variant="onlytext" color="primary">Selecionar</Button>
                    </DialogFooter>
                </Dialog>

            </div>
        )
    }
}
