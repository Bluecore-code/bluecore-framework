import React from 'react'
import Logo from './../logo.png'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={Logo} />
            </div>
            <ul>
                <li className="li-header">Começar</li>
            </ul>
            <ul>
                <li className="li-header">Components</li>
                <li className="li-subheader">Layout</li>
                <ul>
                    <li><a href="#containers">Container</a></li>
                    <li><a href="#grids">Grid</a></li>
                </ul>
                <ul>
                    <li className="li-subheader">Forms</li>
                    <li><a href="#buttons">Button</a></li>
                    <li><a href="#inputs">Input</a></li>
                    <li><a href="#selects">Select</a></li>
                    <li><a href="#checkboxes">Checkbox</a></li>
                    <li><a href="#radios">Radio</a></li>
                    <li><a href="#switches">Switch</a></li>
                    <li><a href="#datepickers">Datepicker</a></li>
                    <li><a href="#form">Form</a></li>
                </ul>
                <ul>
                    <li className="li-subheader">Navigation</li>
                    <li><a href="#dropdowns">Dropdown</a></li>
                </ul>
                <ul>
                    <li className="li-subheader">Feedback</li>
                    <li><a href="#alerts">Alert</a></li>
                    <li><a href="#progress">Progress</a></li>
                    <li><a href="#dialogs">Dialog</a></li>
                    <li><a href="#snackbars">Snackbar</a></li>
                    <li><a href="#skeletons">Skeleton</a></li>
                    <li><a href="#empty-states">Empty states</a></li>
                </ul>
                <ul>
                    <li className="li-subheader">Display</li>
                    <li><a href="#avatars">Avatar</a></li>
                    <li><a href="#badges">Badge</a></li>
                    <li><a href="#dividers">Divider</a></li>
                    <li><a href="#icons">Icons</a></li>
                    <li><a href="#cards">Card</a></li>
                    <li><a href="#lists">List</a></li>
                    <li><a href="#tables">Table</a></li>
                    <li><a href="#tooltips">Tooltip</a></li>
                    <li><a href="#popovers">Popover</a></li>
                </ul>
                <ul>
                    <li className="li-subheader">Utils</li>
                    <li><a href="#slideshows">Slideshow</a></li>
                    <li><a href="#slick">Slick</a></li>
                    <li><a href="#typography">Typography</a></li>
                    <li><a href="#predefined">Predefined text</a></li>
                </ul>
            </ul>
        </div>
    )
}
