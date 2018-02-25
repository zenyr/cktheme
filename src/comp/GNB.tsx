import React, { Component } from 'react';
import {
  Alignment,
  Button,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';
import { RouteComponentProps } from 'react-router';
// Header comp
const LinkBtn = ({ history, to, icon, text }) => (
  <Button
    onClick={() => history.push(to)}
    className="pt-minimal"
    icon={icon}
    text={text}
  />
);
type Props = RouteComponentProps<{}> & { className: string };
export default class Header extends Component<Props> {
  render() {
    const { className, history } = this.props;
    return (
      <Navbar className={className + ' pt-fixed-top'}>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>CkTheme 3</NavbarHeading>
          <NavbarDivider />
          <LinkBtn history={history} to="/" icon="home" text="Home" />
          <LinkBtn history={history} to="/test" icon="document" text="Files" />
        </NavbarGroup>
      </Navbar>
    );
  }
}
