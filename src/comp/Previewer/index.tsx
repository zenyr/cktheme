import React, { Component } from 'react';

export const enum PreviewView {
  LIST = 'LIST',
  READ = 'READ',
  MENU = 'MENU',
}

type Props = {
  float: boolean;
  view: PreviewView;
  data: ThemeData;
};
export default class Previewer extends Component<Props> {
  render() {
    return <div>Preview</div>;
  }
}
