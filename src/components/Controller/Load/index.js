import { h, Component } from 'preact';
import styles from '../style.less';
import { Button, Switch } from '@blueprintjs/core';
import { bind } from 'decko';
import { BlackPortal } from 'react-native-portal';
import { cz } from '../../../lib/util';
import { Actions, connect } from '../../../duck';
import Json5 from 'json5';
import map from 'lodash-es/map';
import { Base64 } from 'js-base64';
import Menu from 'async!./Menu';
const regColor = /^#?([a-f0-9]{3}|[a-f0-9]{6})$/i;

const stateSelector = state => ({ Theme: state.Theme });
@connect(stateSelector)
export default class LoadController extends Component {
  state = {
    success: false,
    input: '',
    error: '',
    base64: true,
    dropdown: false
  };

  @bind
  handleReset() {
    if (typeof window !== 'undefined') {
      window.location.search = '';
    } else {
      this.setState({ input: '', error: '', success: false });
    }
  }

  @bind
  handleStage(ev) {
    const input = ev.target.value;
    this.setState({ input, error: '', success: false });
  }

  @bind
  handleAtobToggle(ev) {
    const base64 = ev.target.checked;
    this.setState({ base64 });
  }

  @bind
  handleDropdownToggle(ev) {
    console.log(ev.srcElement);
    const { dropdown } = this.state;
    if (dropdown) {
      this.setState({ dropdown: false });
    } else {
      this.setState({
        dropdown: {
          left: ev.pageX - (ev.layerX || 0),
          bottom: ev.pageY - (ev.layerY || 0)
        }
      });
    }
  }

  @bind
  handleApply() {
    try {
      const { input, base64 } = this.state;
      const { dispatch, Theme } = this.props;
      if (!input) throw new Error('입력값이 없습니다.');
      const atob = Base64.decode;
      const parsed = Json5.parse(base64 && atob ? atob(input) : input);
      if (parsed) {
        map(parsed, (value, fieldName) => {
          // 1단계
          if (fieldName === 'data') {
            // 2단계
            map(value, (innerValue, innerFieldName) => {
              const expectedFn = Actions.ThemeData[innerFieldName];
              if (
                typeof expectedFn !== 'function' ||
                !regColor.test(innerValue)
              )
                throw new Error(
                  `잘못된 색상 필드: ${innerFieldName} => ${innerValue}`
                );
              if (Theme.data[innerFieldName] !== innerValue) {
                const matchResult = innerValue.match(regColor);
                dispatch(expectedFn(`#${matchResult[1].toLowerCase()}`));
              }
            });
          } else {
            const expectedFn = Actions.Theme[fieldName];
            if (typeof expectedFn !== 'function')
              throw new Error(`잘못된 최상위 필드: ${fieldName}`);
            if (Theme[fieldName] !== value) {
              dispatch(expectedFn(value));
            }
          }
        });
      }
      this.setState({ success: true, error: '' });
    } catch (e) {
      this.setState({ error: e.message, success: false });
    }
  }

  @bind
  importQuerystring() {
    if (typeof window !== 'undefined') {
      const search = ('' + window.location.search).split('?');
      search.map(keyValue => {
        const [key, value] = keyValue.split('=');
        if (key === 'b') {
          this.setState(
            { input: value.replace(/-/g, '='), base64: true },
            this.handleApply
          );
        }
        if (key === 'j') {
          this.setState(
            { input: decodeURIComponent(value), base64: false },
            this.handleApply
          );
        }
      });
    }
  }
  @bind
  handleLoadPreset(input) {
    this.setState({ input, base64: true, dropdown: false }, this.handleApply);
  }

  componentWillMount() {
    this.importQuerystring();
  }

  render({ data }, { input, error, success, base64, dropdown }) {
    const atob = Base64.decode;

    return (
      <div className={styles.childRoot}>
        <textarea
          className={cz([
            'pt-input pt-fill',
            !!error && 'pt-intent-warning',
            styles.textarea
          ])}
          dir="auto"
          onChange={this.handleStage}
          rows={20}
          placeholder="테마 JSON 또는 공유코드를 붙여넣으세요"
          value={input}
        />
        {!!error &&
          <div class={cz(['pt-callout pt-intent-warning', styles.error])}>
            <h5>실패</h5>
            {error}
          </div>}
        {!!dropdown &&
          <BlackPortal name="backCover">
            <div
              className={styles.backCover}
              onClick={this.handleDropdownToggle}
            />
          </BlackPortal>}

        <div className={styles.toolbar}>
          {!!atob &&
            <Switch
              checked={base64}
              label={<span className="pt-icon-large pt-icon-barcode" />}
              className="pt-large"
              onChange={this.handleAtobToggle}
            />}
          {!!dropdown && <Menu onChange={this.handleLoadPreset} />}
          <div className="pt-button-group">
            <Button
              active={!!dropdown}
              iconName="more"
              onClick={this.handleDropdownToggle}
            />
          </div>
          <div className="pt-button-group">
            <Button
              disabled={!input}
              className="pt-intent-danger"
              iconName="eraser"
              onClick={this.handleReset}
            />
            <Button
              iconName="import"
              rightIconName={success ? 'tick' : void 0}
              className="pt-intent-primary"
              onClick={this.handleApply}
            />
          </div>
        </div>
      </div>
    );
  }
}
