import React from 'react';
import { AnchorButton } from '@blueprintjs/core';
import { withRouter, RouteComponentProps } from 'react-router';

type Props<T> = RouteComponentProps<T> & {
  to: string;
  minimal?: boolean;
} & AnchorButton['props'];

const BtnLink = ({ history, to, icon, text, minimal }: Props<{}>) => (
  <AnchorButton
    onClick={() => history.push(to)}
    className={minimal ? 'pt-minimal' : void 0}
    icon={icon}
    text={text}
  />
);

export default withRouter(BtnLink);
