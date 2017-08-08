import { h, Component } from 'preact';
import styles from './style.less';
import { map } from 'lodash-es';
import { bind, debounce } from 'decko';
import { SketchPicker, ChromePicker } from 'react-color';
import { Switch } from '@blueprintjs/core';

import { Actions, autoBind, connect } from '../../../duck';
import { cz } from '../../../lib/util';

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
  componentWillReceiveProps(newProps) {
    const oldProps = this.props;
    if (oldProps.value !== newProps.value) {
      this.setState({ overrideColor: false });
    }
  }
  render({ name, value, onChange, hsl }, { open, overrideColor }) {
    const result = overrideColor ? overrideColor : value;
    const Picker = hsl ? ChromePicker : SketchPicker;
    return (
      <tr>
        <td className={styles.tiny}>
          {name}
        </td>
        <td className={styles.tiny}>
          <a onClick={this.handleOn} className={styles.btnColor}>
            <div className={styles.swatch} style={{ background: result }} />
            <code>
              {value.toLowerCase()}
            </code>
          </a>
          {open &&
            <div className={styles.backCover} onClick={this.handleOff} />}
          {/* <InputGroup
            rightElement={

            }
            onFocus={this.handleOn}
            onBlur={this.handleOff}
            value={result}
            className={styles.colorInput}
          /> */}
          {open &&
            <div className={styles.absolute}>
              <Picker
                color={result}
                onChange={this.handleChange}
                onChangeComplete={this.handleChangeComplete}
                disableAlpha
              />
            </div>}
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
      <div className={styles.root}>
        <Switch
          checked={hsl}
          label="Alternative Picker"
          onChange={this.handleHSLToggle}
        />

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
