import { h, Component } from 'preact';
import styles from './style.less';
import Json5 from 'json5';
import { Switch } from '@blueprintjs/core';
import { bind } from 'decko';
import { cz } from '../../../lib/util';
// 미리보기

import { connect } from '../../../duck';

const stateSelector = state => ({ data: state.Theme });
@connect(stateSelector, {})
export default class JSONController extends Component {
  state = { loose: false, pretty: true, base64: false };
  @bind
  handleLooseToggle(ev) {
    const loose = ev.target.checked;
    this.setState({ loose, base64: false });
  }
  @bind
  handlePrettyToggle(ev) {
    const pretty = ev.target.checked;
    this.setState({ pretty });
  }
  @bind
  handleBtoaToggle(ev) {
    const base64 = ev.target.checked;
    this.setState({ base64, loose: false });
  }
  render({ data }, { loose, pretty, base64 }) {
    let result = loose
      ? Json5.stringify(data, null, pretty ? 2 : 0)
      : JSON.stringify(data, null, pretty ? 2 : 0);
    let btoa;
    if (typeof window !== 'undefined') {
      btoa = window.btoa;
    }
    if (base64 && btoa) result = btoa(result);

    return (
      <div className={styles.root}>
        <div className={styles.toolbar}>
          <Switch
            checked={loose}
            label="JSON5"
            className="pt-large"
            onChange={this.handleLooseToggle}
          />
          <Switch
            checked={pretty}
            label="줄바꿈"
            className="pt-large"
            onChange={this.handlePrettyToggle}
          />
          <Switch
            checked={base64}
            disabled={!btoa}
            label="공유 코드"
            className="pt-large"
            onChange={this.handleBtoaToggle}
          />
        </div>
        <textarea
          className={cz(['pt-input pt-fill', styles.code])}
          dir="auto"
          rows={30}
          readOnly
          value={result}
        />
      </div>
    );
  }
}
