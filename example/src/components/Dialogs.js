import React, { useState } from 'react'
import { Dialog, DialogHeader, DialogContent, DialogFooter, Grid, Button } from 'bluecore-react-ui'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'refractor/lang/jsx.js'
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light'


SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Dialogs() {

    const [openSm, setOpenSm] = useState(false)
    const [openMd, setOpenMd] = useState(false)
    const [openLg, setOpenLg] = useState(false)
    const [openFull, setOpenFull] = useState(false)
    const [openScrollable, setOpenScrollable] = useState(false)

    const handleClickOpen = () => {
        setOpenSm(true)
    };

    const handleClose = () => {
        setOpenSm(false)
    };

    return (
        <div id="dialogs">
            <h4>Dialog</h4>
            <div className="example">
                <div className="design">
                    <Grid gap={30} wrap center>
                        <Button color="primary" onClick={handleClickOpen}>Dialog Small</Button>
                    </Grid>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Dialog open={openSm} size="sm" onClose={handleClose}>
    <DialogHeader id="alert-dialog-title" title={"Lorem ipsum dolor"} />
    <DialogContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
    </DialogContent>
    <DialogFooter>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} color="success">Agree</Button>
    </DialogFooter>
</Dialog>`}
                </SyntaxHighlighter>
            </div>
            <div className="example">
                <div className="design">
                    <Grid gap={30} wrap center>
                        <Button color="primary" onClick={() => setOpenMd(true)}>Dialog Medium</Button>
                    </Grid>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Dialog open={openMd} size="md" onClose={() => setOpenMd(false)}>
    <DialogHeader onClose={() => setOpenMd(false)} id="alert-dialog-title" title={"Lorem ipsum dolor"} />
    <DialogContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
    </DialogContent>
    <DialogFooter />
</Dialog>`}
                </SyntaxHighlighter>
            </div>
            <div className="example">
                <div className="design">
                    <Grid gap={30} wrap center>
                        <Button color="primary" onClick={() => setOpenLg(true)}>Dialog Large</Button>
                    </Grid>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Dialog open={openLg} size="lg">
    <DialogHeader onClose={() => setOpenLg(false)} id="alert-dialog-title" title={"Lorem ipsum dolor"} />
    <DialogContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
    </DialogContent>
    <DialogFooter>
        <Button onClick={() => setOpenLg(false)}>Disagree</Button>
        <Button onClick={() => setOpenLg(false)} color="primary">Agree</Button>
    </DialogFooter>
</Dialog>`}
                </SyntaxHighlighter>
            </div>
            <div className="example">
                <div className="design">
                    <Grid gap={30} wrap center>
                        <Button color="primary" onClick={() => setOpenFull(true)}>Dialog Full Width</Button>
                    </Grid>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Dialog open={openFull} size="full">
    <DialogHeader onClose={() => setOpenFull(false)} id="alert-dialog-title" title={"Lorem ipsum dolor"} />
    <DialogContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
    </DialogContent>
    <DialogFooter>
        <Button onClick={() => setOpenFull(false)} color="green">Disagree</Button>
        <Button onClick={() => setOpenFull(false)} color="red">Agree</Button>
    </DialogFooter>
</Dialog>`}
                </SyntaxHighlighter>
            </div>
            <div className="example">
                <div className="design">
                    <Grid gap={30} wrap center>
                        <Button color="primary" onClick={() => setOpenScrollable(true)}>Dialog Scrollable</Button>
                    </Grid>
                </div>
                <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Dialog open={openScrollable} size="md" scrollable>
    <DialogHeader onClose={() => setOpenScrollable(false)} id="alert-dialog-title" title={"Scroll Modal"} />
    <DialogContent>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
        </p>
    </DialogContent>
    <DialogFooter/>
</Dialog>`}
                </SyntaxHighlighter>
            </div>
            <Dialog
                open={openSm}
                size="sm"
                onClose={handleClose}
            >
                <DialogHeader id="alert-dialog-title" title={"Lorem ipsum dolor"} />
                <DialogContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
        </DialogContent>
                <DialogFooter>
                    <Button onClick={handleClose}>
                        Disagree
          </Button>
                    <Button onClick={handleClose} color="success">
                        Agree
          </Button>
                </DialogFooter>
            </Dialog>

            <Dialog
                open={openMd}
                size="md"
                onClose={() => setOpenMd(false)}
            >
                <DialogHeader onClose={() => setOpenMd(false)} id="alert-dialog-title" title={"Lorem ipsum dolor"} />
                <DialogContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
        </DialogContent>
                <DialogFooter />
            </Dialog>

            <Dialog
                open={openLg}
                size="lg"
            >
                <DialogHeader onClose={() => setOpenLg(false)} id="alert-dialog-title" title={"Lorem ipsum dolor"} />
                <DialogContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
        </DialogContent>
                <DialogFooter>
                    <Button onClick={() => setOpenLg(false)}>
                        Disagree
          </Button>
                    <Button onClick={() => setOpenLg(false)} color="primary">
                        Agree
          </Button>
                </DialogFooter>
            </Dialog>

            <Dialog
                open={openFull}
                size="full"

            >
                <DialogHeader onClose={() => setOpenFull(false)} id="alert-dialog-title" title={"Lorem ipsum dolor"} />
                <DialogContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
        </DialogContent>
                <DialogFooter>
                    <Button onClick={() => setOpenFull(false)} color="green">
                        Disagree
          </Button>
                    <Button onClick={() => setOpenFull(false)} color="red">
                        Agree
          </Button>
                </DialogFooter>
            </Dialog>

            <Dialog
                open={openScrollable}
                size="md"
                scrollable
            >
                <DialogHeader onClose={() => setOpenScrollable(false)} id="alert-dialog-title" title={"Scroll Modal"} />
                <DialogContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium harum id maiores totam assumenda. Ducimus recusandae, quis quibusdam cumque aperiam reprehenderit dolor tenetur, officiis consequuntur minus tempora natus veritatis?
</p>
                </DialogContent>
                <DialogFooter>
                </DialogFooter>
            </Dialog>
        </div>
    )
}
