import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'refractor/lang/jsx.js';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';

import {
  Button, Flex,
  PopOver,
  Slick, Slideshow, Tooltip, Typography, Icon,
  List, ListItem,
  Datepicker
} from 'bluecore-react-ui'

import Buttons from './components/Buttons'
import Inputs from './components/Inputs'
import Selects from './components/Selects'
import Checkboxes from './components/Checkboxes'
import Switches from './components/Switches';
import Forms from './components/Forms';
import Grids from './components/Grids';
import Dialogs from './components/Dialogs';
import Snackbars from './components/Snackbars';
import Skeletons from './components/Skeletons';
import Avatars from './components/Avatars';
import Sidebar from './components/Sidebar';
import Containers from './components/Containers';
import Pretexts from './components/Predefined';
import Radios from './components/Radios';
import Dropdowns from './components/Dropdowns';
import Badges from './components/Badges';
import Dividers from './components/Dividers';
import Icons from './components/Icons';
import Cards from './components/Cards';
import Lists from './components/Lists';

SyntaxHighlighter.registerLanguage('jsx', jsx);

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Flex>
        <Sidebar />
        <div className="content">
          <section id="start">
            <h1>Instalação</h1>
            <h4>npm</h4>
            <SyntaxHighlighter language="js" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
              {`// com npm
npm install bluecore-react-ui

// com yarn
yarn add bluecore-react-ui`}
            </SyntaxHighlighter>
          </section>
          <section>
            <h1>Uso</h1>
            <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
              {`import React, { Component } from 'react';
import { Button } from 'bluecore-react-ui';

export default class Example extends Component {
  render () {
    return (
      <Button />
    )
  }
}`}
            </SyntaxHighlighter>
          </section>
          <section id="layout">
            <h1>Layout</h1>
            <Containers />
            <Grids />
          </section>
          <section id="forms">
            <h1>Forms</h1>
            <Buttons />
            <Inputs />
            <Selects />
            <Checkboxes />
            <Radios />
            <Switches />
            <div id="datepickers">
              <h4>Datepicker</h4>
              <div className="example">
                <div className="design">
                  <Datepicker />
                </div>
              </div>
              <h4>Periodo</h4>
              <div className="example">
                <div className="design">
                  <Datepicker range />
                </div>
              </div>
            </div>
            {/* <Forms /> */}
          </section>

          <section id="navigation">
            <h1>Navigation</h1>
            <Dropdowns />
          </section>

          <section id="feedback">
            <h1>Feedback</h1>
            <div id="alerts">
              <h4>Alert</h4>
              <h6>Em breve...</h6>
            </div>
            <div id="progress">
              <h4>Progress</h4>
              <h6>Em breve...</h6>
            </div>
            <Dialogs />
            <Snackbars />
            <Skeletons />
            <div id="empty-states">
              <h4>Empty States</h4>
              <h6>Em breve...</h6>
            </div>
          </section>

          <section id="display">
            <h1>Display</h1>
            <Avatars />
            <Badges />
            <Dividers />
            <Icons />
            <Cards />
            <Lists />
            <div id="tables">
              <h4>Table</h4>
              <h6>Em breve...</h6>
            </div>
            <div id="tooltips">
              <h4>Tooltip</h4>
              <Tooltip />
            </div>
            <div id="popovers">
              <h4>Popover</h4>
              <PopOver label="has to send first">
                <Button>Send</Button>
              </PopOver>
            </div>
          </section>

          <section id="utils">
            <h1>Utils</h1>
            <div id="slideshows">
              <h4>Slideshow</h4>
              <h6>Em breve...</h6>
              {/* <Slideshow /> */}
            </div>
            <div id="slick">
              <h4>Slick</h4>
              <h6>Em breve...</h6>
              {/* <Slick /> */}
            </div>
            <div id="typography">
              <h4>Typography</h4>
              <h6>Em breve...</h6>
            </div>
            <Pretexts />
          </section>
        </div>
      </Flex>

    </div>
  );
}

export default App;
