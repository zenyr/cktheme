import React, { Component } from 'react';
import { NonIdealState } from '@blueprintjs/core';

export class Error extends Component {
  render() {
    return <NonIdealState visual="error" title="N/A" />;
  }
}
