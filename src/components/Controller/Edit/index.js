import { h, Component } from 'preact';
import styles from '../style.less';
import { map } from 'lodash-es';
import { bind, debounce } from 'decko';
import { SketchPicker, ChromePicker } from 'react-color';
import { Switch, Button } from '@blueprintjs/core';

import { Actions, autoBind, connect } from '../../../duck';
import { cz } from '../../../lib/util';

const sleep = t => new Promise(r => setTimeout(r, t));
class Row extends Component {
  state = { open: false, overrideColor: false };

  @bind
  handleOn() {
    this.setState({ open: true });
  }
  @bind
  handleOff() {
    this.setState({ open: false });
  }
  @bind
  @debounce
  handleChange(v) {
    this.setState({ overrideColor: v.hex.toLowerCase() });
  }
  @bind
  handleChangeComplete(v) {
    if (this.props.value !== v.hex) {
      this.props.onChange(v.hex.toLowerCase());
    }
  }
  @bind
  async handleFlash(ev) {
    const { value, onChange } = this.props;
    ev.stopPropagation();
    if (this._flashing) return;
    this._flashing = true;
    for (let i = 0; i < 5; i++) {
      if (this._dead) return;
      onChange('#ff00ff');
      await sleep(33);
      onChange('#ff0000');
      await sleep(33);
      onChange('#0000ff');
      await sleep(33);
      if (this._dead) return;
      onChange(value);
      await sleep(100);
    }
    this._flashing = false;
  }
  componentWillReceiveProps(newProps) {
    const oldProps = this.props;
    if (oldProps.value !== newProps.value) {
      this.setState({ overrideColor: false });
    }
  }
  componentWillUnmount() {
    this._dead = true;
  }
  render({ name, value, onChange, hsl }, { open, overrideColor }) {
    const result = overrideColor ? overrideColor : value;
    const Picker = hsl ? ChromePicker : SketchPicker;
    return (
      <tr>
        <td className={styles.tiny}>
          {name}
          {open &&
            <div className={styles.backCover} onClick={this.handleOff} />}
          <div className={cz([styles.picker, open && styles.open])}>
            {open &&
              <Picker
                color={result}
                onChange={this.handleChange}
                onChangeComplete={this.handleChangeComplete}
                disableAlpha
              />}
          </div>
        </td>
        <td className={styles.tiny}>
          <a onClick={this.handleOn} className={styles.btnColor}>
            <div className={styles.swatch} style={{ background: result }} />
            <code>
              {value.toLowerCase()}
            </code>
            <Button
              className="pt-minimal"
              iconName="flash"
              onClick={this.handleFlash}
            />
          </a>
        </td>
      </tr>
    );
  }
}

const stateSelector = state => ({ data: state.Theme.data });
const actionBinder = autoBind({ ...Actions.ThemeData });
@connect(stateSelector, actionBinder)
export default class EditController extends Component {
  state = { hsl: false };

  @bind
  handleHSLToggle(ev) {
    const hsl = ev.target.checked;
    this.setState({ hsl });
  }

  @bind
  renderRow(value, name) {
    return (
      <Row
        key={name}
        name={name}
        value={value}
        onChange={this.props[name]}
        hsl={this.state.hsl}
      />
    );
  }

  render({ data }, { hsl }) {
    return (
      <div className={styles.childRoot}>
        <div className={styles.toolbar}>
          <Switch
            checked={hsl}
            label={
              <span>
                <span className="pt-icon-standard pt-icon-tint" />
                <span className="pt-icon-standard pt-icon-key-option" />
              </span>
            }
            onChange={this.handleHSLToggle}
          />
        </div>
        <table className={cz(['pt-table pt-condensed', styles.table])}>
          <thead>
            <tr>
              <th>필드명</th>
              <th>색상값</th>
            </tr>
          </thead>
          <tbody>
            {map(data, this.renderRow)}
          </tbody>
        </table>
      </div>
    );
  }
}
