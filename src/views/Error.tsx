import React, { Component } from 'react';
import { NonIdealState } from '@blueprintjs/core';
import { RouteComponentProps } from 'react-router';
import BtnLink from 'comp/BtnLink';

export class Error extends Component<RouteComponentProps<{}>> {
  render() {
    const { match } = this.props;
    return (
      <NonIdealState
        visual="error"
        title="N/A"
        description={`Unknown path: ${match.path}`}
        action={<BtnLink to="/" text="Back" />}
      />
    );
  }
}
