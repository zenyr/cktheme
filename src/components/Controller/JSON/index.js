import { h, Component } from 'preact';
import Json5 from 'json5';
import fetchJsonp from 'fetch-jsonp';
import { Switch, AnchorButton, Button } from '@blueprintjs/core';
import { bind } from 'decko';
import { Base64 } from 'js-base64';
import { cz } from '../../../lib/util';
import { connect } from '../../../duck';
import PresentURL from './PresentURL';
import styles from '../style.less';
import { BlackPortal } from 'react-native-portal';

const stateSelector = state => ({ data: state.Theme });
@connect(stateSelector, {})
export default class JSONController extends Component {
  state = {
    loose: false,
    pretty: true,
    base64: false,
    presentURL: false //{ success: true, url: 'https://goo.gl/6NaoBq' }
  };
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
    this.setState({
      base64,
      loose: false,
      pretty: base64 ? false : this.state.pretty
    });
  }

  @bind
  handleURLOff() {
    this.setState({ presentURL: false });
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
  handleShortLink(url) {
    // JSONP API호출
    return async () => {
      try {
        this.setState({ presentURL: { loading: true } });

        const response = await fetchJsonp(
          `//urltinyfy.appspot.com/googl?url=${encodeURIComponent(url)}`,
          { jsonpCallback: 'jsonp' }
        );
        const json = await response.json();
        if (this._dead) return;
        if (json && json.short_url) {
          this.setState({ presentURL: { success: true, url: json.short_url } });
        } else {
          throw new Error('단축URL 서비스에 접속하지 못하였습니다.');
        }
      } catch (e) {
        if (this._dead) return;
        this.setState({
          presentURL: {
            success: false,
            error: e.message
          }
        });
      }
    };
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

  componentWillUnmount() {
    this._dead = true;
  }

  render({ data }, { loose, pretty, base64, presentURL }) {
    let result = loose
      ? Json5.stringify(data, null, pretty ? 2 : 0)
      : JSON.stringify(data, null, pretty ? 2 : 0);
    const btoa = Base64.encode;
    if (base64 && btoa) result = btoa(result);
    const editLinkURL = this.getEditLink(result);

    return (
      <div className={styles.childRoot}>
        <div className={styles.toolbar}>
          <Switch
            checked={loose}
            label={<span className="pt-icon-standard pt-icon-code-block" />}
            onChange={this.handleLooseToggle}
          />
          <Switch
            checked={pretty}
            label={<span className="pt-icon-standard pt-icon-key-enter" />}
            onChange={this.handlePrettyToggle}
          />
          <Switch
            checked={base64}
            disabled={!btoa}
            label={<span className="pt-icon-standard pt-icon-barcode" />}
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
            Lnk:{editLinkURL.length.toLocaleString()}b
          </span>
          <div className="pt-button-group pt-large">
            {editLinkURL &&
              !pretty &&
              base64 &&
              <Button
                iconName="link"
                className="pt-intent-success"
                onClick={this.handleShortLink(editLinkURL)}
              />}
            {editLinkURL &&
              <AnchorButton href={editLinkURL} iconName="share" />}
            <Button
              iconName="select"
              className="pt-intent-primary"
              onClick={this.handleSelectAll}
              text="모두 선택"
            />
          </div>
        </div>
        {presentURL &&
          <BlackPortal name="backCover">
            <div className={styles.backCover} onClick={this.handleURLOff} />
          </BlackPortal>}
        {presentURL &&
          <PresentURL {...presentURL} onClose={this.handleURLOff} />}
      </div>
    );
  }
}
