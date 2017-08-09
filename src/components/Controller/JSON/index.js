import { h, Component } from 'preact';
import styles from '../style.less';
import Json5 from 'json5';
import { Switch, AnchorButton, Button } from '@blueprintjs/core';
import { bind } from 'decko';
import { Base64 } from 'js-base64';
import { cz } from '../../../lib/util';

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
  @bind
  handleSelectAll() {
    const ref = this._textarea;
    if (ref) {
      try {
        if (typeof ref.setSelectionRange === 'function') {
          ref.setSelectionRange(0, ref.value.length);
        } else if (typeof ref.select === 'function') {
          ref.select();
        }
        ref.focus();
      } catch (e) {}
    }
  }
  @bind
  getEditLink(val) {
    if (typeof window !== 'undefined') {
      if (this.state.base64) {
        return `${window.location.origin}${window.location
          .pathname}?b=${val.replace(/=/g, '-')}`;
      }
      return `${window.location.origin}${window.location
        .pathname}?j=${encodeURIComponent(val)}`;
    }
    return '';
  }
  render({ data }, { loose, pretty, base64 }) {
    let result = loose
      ? Json5.stringify(data, null, pretty ? 2 : 0)
      : JSON.stringify(data, null, pretty ? 2 : 0);
    const btoa = Base64.encode;

    if (base64 && btoa) result = btoa(result);

    return (
      <div className={styles.childRoot}>
        <div className={styles.toolbar}>
          <Switch
            checked={loose}
            label={<span className="pt-icon pt-icon-code-block" />}
            onChange={this.handleLooseToggle}
          />
          <Switch
            checked={pretty}
            label={<span className="pt-icon pt-icon-key-enter" />}
            onChange={this.handlePrettyToggle}
          />
          <Switch
            checked={base64}
            disabled={!btoa}
            label={<span className="pt-icon pt-icon-barcode" />}
            onChange={this.handleBtoaToggle}
          />
        </div>
        <textarea
          className={cz(['pt-input pt-fill', styles.code])}
          dir="auto"
          rows={20}
          readOnly
          value={result}
          ref={r => (this._textarea = r)}
        />
        <div className={styles.toolbar}>
          <span className="pt-ui-text">
            Res:{result.length.toLocaleString()}b
          </span>
          <span className="pt-ui-text">
            Lnk:{this.getEditLink(result).length.toLocaleString()}b
          </span>
          <div className="pt-button-group">
            {result &&
              <AnchorButton
                href={this.getEditLink(result)}
                iconName="share"
                text="편집링크"
              />}
            <Button
              iconName="select"
              className="pt-intent-primary"
              onClick={this.handleSelectAll}
              text="모두 선택"
            />
          </div>
        </div>
      </div>
    );
  }
}
