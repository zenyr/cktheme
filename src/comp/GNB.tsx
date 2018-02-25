import React, { Component } from 'react';
import {
  Alignment,
  Navbar,
  NavbarDivider,
  NavbarGroup,
} from '@blueprintjs/core';
import { RouteComponentProps } from 'react-router';
import BtnLink from 'comp/BtnLink';
// Header comp
type Props = RouteComponentProps<{}> & { className: string };
export default class Header extends Component<Props> {
  render() {
    const { className } = this.props;
    return (
      <Navbar className={className + ' pt-fixed-top'}>
        <NavbarGroup align={Alignment.LEFT}>
          <BtnLink to="/" icon="home" text="CkTheme 3 " minimal={true}>
            {/* <NavbarHeading>CkTheme 3</NavbarHeading> */}
          </BtnLink>
          <NavbarDivider />
          <BtnLink to="/code" icon="barcode" text="code" minimal={true} />
          <BtnLink to="/info" icon="annotation" text="Info" minimal={true} />
          <BtnLink to="/edit" icon="tint" text="Edit" minimal={true} />
          <BtnLink to="/export" icon="export" text="Export" minimal={true} />
        </NavbarGroup>
      </Navbar>
    );
  }
}
