import React from 'react'
import { Avatar, Divider, Icon, Grid } from 'bluecore-react-ui'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'refractor/lang/jsx.js'
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/material-light'


SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function Avatars() {
  return (
    <div id="avatars">
      <h4>Avatar</h4>
      <div className="example">
        <div className="design">
          <Grid gap={30} wrap center>
            <Avatar>
              <img alt="avatar" src="https://neo-labor.com/wp-content/uploads/2016/08/13.jpg" />
            </Avatar>
            <Avatar>
              <img alt="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWgVxRNYmjDRn-lqom6dRl-GjaX_J_xmyJdw&usqp=CAU" />
            </Avatar>
            <Avatar>
              <img alt="avatar" src="https://www.kayakbikebrew.com/wp-content/uploads/2019/04/team.png" />
            </Avatar>
          </Grid>
        </div>
        <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Avatar>
  <img alt="avatar" src="https://neo-labor.com/wp-content/uploads/2016/08/13.jpg" />
</Avatar>
<Avatar>
  <img alt="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWgVxRNYmjDRn-lqom6dRl-GjaX_J_xmyJdw&usqp=CAU" />
</Avatar>
<Avatar>
  <img alt="avatar" src="https://www.kayakbikebrew.com/wp-content/uploads/2019/04/team.png" />
</Avatar>`}
        </SyntaxHighlighter>
      </div>
      <h4>Avatar Blank</h4>
      <div className="example">
        <div className="design">
          <Grid gap={30} wrap center>
            <Avatar />
            <Avatar />
            <Avatar />
          </Grid>
        </div>
        <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Avatar />
<Avatar />
<Avatar />`}
        </SyntaxHighlighter>
      </div>
      <h4>Avatar Initials</h4>
      <div className="example">
        <div className="design">
          <Grid gap={30} wrap center>
            <Avatar initials="UD" />
            <Avatar initials="gm" />
            <Avatar initials="JP" />
          </Grid>
        </div>
        <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Avatar initials="UD" />
<Avatar initials="gm" />
<Avatar initials="JP" />`}
        </SyntaxHighlighter>
      </div>
      <h4>Avatar Icons</h4>
      <div className="example">
        <div className="design">
          <Grid gap={30} wrap center>
            <Avatar>
              <Icon name="mail" />
            </Avatar>
            <Avatar>
              <Icon name="plus" />
            </Avatar>
            <Avatar>
              <Icon name="home" />
            </Avatar>
          </Grid>
        </div>
        <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Avatar>
  <Icon name="mail" />
</Avatar>
<Avatar>
  <Icon name="plus" />
</Avatar>
<Avatar>
  <Icon name="home" />
</Avatar>`}
        </SyntaxHighlighter>
      </div>
      <h4>Avatar Colors</h4>
      <div className="example">
        <div className="design">
          <Grid gap={30} wrap center>
            <Avatar initials="UD" color="primary" />
            <Avatar initials="UD" color="secondary" />
            <Avatar initials="UD" customColor="#242424" style={{ color: 'white' }} />
          </Grid>
        </div>
        <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Avatar initials="UD" color="primary" />
<Avatar initials="UD" color="secondary" />
<Avatar initials="UD" customColor="#242424" style={{ color: 'white' }} />`}
        </SyntaxHighlighter>
      </div>
      <h4>Avatar Sizes</h4>
      <div className="example">
        <div className="design">
          <Grid gap={30} wrap center>
            <Avatar size="sm">
              <img alt="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWgVxRNYmjDRn-lqom6dRl-GjaX_J_xmyJdw&usqp=CAU" />
            </Avatar>
            <Avatar size="md">
              <img alt="avatar" src="https://neo-labor.com/wp-content/uploads/2016/08/13.jpg" />
            </Avatar>
            <Avatar size="lg">
              <img alt="avatar" src="https://www.kayakbikebrew.com/wp-content/uploads/2019/04/team.png" />
            </Avatar>
          </Grid>
        </div>
        <SyntaxHighlighter showLineNumbers showInlineLineNumbers language="jsx" style={prism} customStyle={{ padding: '1.5em 2em', fontSize: '12px' }}>
{`<Avatar size="sm">
  <img alt="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWgVxRNYmjDRn-lqom6dRl-GjaX_J_xmyJdw&usqp=CAU" />
</Avatar>
<Avatar size="md">
  <img alt="avatar" src="https://neo-labor.com/wp-content/uploads/2016/08/13.jpg" />
</Avatar>
<Avatar size="lg">
  <img alt="avatar" src="https://www.kayakbikebrew.com/wp-content/uploads/2019/04/team.png" />
</Avatar>`}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
