// 컴포넌트 picker가 답답해서 내가 직접 뛴다
import { Component } from 'preact';
// import { Slider } from '@blueprintjs/core';
import { FF, hx, rgbToHsl, hslToRgb, clampE } from './funcs';
import { bind, debounce } from 'decko';
import { Button } from '@blueprintjs/core';
import { cz } from '../../lib/util';
import styles from './style.less';
import SimpleSlider from './SimpleSlider';

// 0. initialValue 저장
// 1. color 받으면 현재값과 다를 경우 hex->hsl 설정
// 2. H/S/L 변경시 hsl->rgb 조립
// 3. R/G/B 변경시 rgb->hex 조립, color와 다르면 onChange(hex)
// 4. OK 클릭시 onChangeComplete(hex)
const regColor = /^#?([a-f0-9]{3}|[a-f0-9]{6})$/i;

export default class HSLPicker extends Component {
  state = {
    hue: 1,
    saturation: 0,
    lightness: 0,
    r: 0,
    g: 0,
    b: 0,
    initialValue: false
  };

  @bind
  receiveValue(rawValue) {
    const { r, g, b, initialValue } = this.state;
    let value = rawValue ? rawValue.replace('#', '') : '000000';
    if (value.length === 3) {
      value = [value[0], value[0], value[1], value[1], value[2], value[2]].join(
        ''
      );
    }
    const nR = parseInt(value.substr(0, 2), 16);
    const nG = parseInt(value.substr(2, 2), 16);
    const nB = parseInt(value.substr(4, 2), 16);
    if (nR === r && nG === g && nB === b) return;
    const [hue, saturation, lightness] = rgbToHsl(nR, nG, nB);
    this.setState({
      r: nR,
      g: nG,
      b: nB,
      hue,
      saturation,
      lightness,
      initialValue: initialValue || rawValue
    });
  }

  @bind
  @debounce({ delay: 300 })
  reportValue(hex) {
    this.props.onChangeComplete({ hex });
  }

  @bind
  updateRgbFromHsl(hue, saturation, lightness) {
    const [r, g, b] = hslToRgb(hue, saturation, lightness);
    this.setState({ r, g, b, hue, saturation, lightness });
    this.reportValue(this.getHex(r, g, b));
  }

  @bind
  updateHue(hue) {
    const { saturation, lightness } = this.state;
    this.updateRgbFromHsl(hue, saturation, lightness);
  }

  @bind
  updateSaturation(saturation) {
    const { hue, lightness } = this.state;
    this.updateRgbFromHsl(hue, saturation, lightness);
  }
  @bind
  updateLightness(lightness) {
    const { hue, saturation } = this.state;
    this.updateRgbFromHsl(hue, saturation, lightness);
  }
  @bind
  updateRGB(fieldName) {
    return value => {
      const { r, g, b } = this.state;
      const parsedValue = ~~(value * 255);
      const [hue, saturation, lightness] = rgbToHsl(
        fieldName === 'r' ? parsedValue : r,
        fieldName === 'g' ? parsedValue : g,
        fieldName === 'b' ? parsedValue : b
      );

      this.setState({
        [fieldName]: parsedValue,
        hue,
        saturation,
        lightness
      });
      this.reportValue(this.getHex(r, g, b));
    };
  }

  @bind
  getHexFromHsl(hue, saturation, lightness) {
    const [r, g, b] = hslToRgb(hue, saturation, lightness);
    return this.getHex(r, g, b);
  }

  @bind
  getHex(r, g, b) {
    return `#${hx(r)}${hx(g)}${hx(b)}`;
  }

  @bind
  handleInput(ev) {
    const { value } = ev.target;
    if (regColor.test(value)) {
      this.receiveValue(value);
    }
  }

  @bind
  handleInputClick(ev) {
    const { target } = ev;
    idx(target, _ => _.target.select());
    idx(target, _ => _.target.selectAll());
    idx(target, _ => _.target.focus());
  }

  @bind
  handleUndo() {
    this.receiveValue(this.state.initialValue);
    this.reportValue(this.state.initialValue);
  }

  @bind
  handleConfirm() {
    const { r, g, b } = this.state;
    if (this.props.onChangeComplete)
      this.props.onChangeComplete({ hex: this.getHex(r, g, b), done: true });
  }

  preventDefault(ev) {
    ev.preventDefault();
  }

  componentWillMount() {
    this.receiveValue(this.props.color);
  }
  componentWillReceiveProps(newProps) {
    const oldProps = this.props;
    if (newProps.color !== oldProps.color) this.receiveValue(newProps.color);
  }

  render({ color }, { r, g, b, hue, saturation, lightness, initialValue }) {
    const cl = this.getHex(r, g, b);
    const clR0 = this.getHex(0, g, b);
    const clR1 = this.getHex(255, g, b);
    const clG0 = this.getHex(r, 0, b);
    const clG1 = this.getHex(r, 255, b);
    const clB0 = this.getHex(r, g, 0);
    const clB1 = this.getHex(r, g, 255);
    const clS0 = this.getHexFromHsl(hue, 0, lightness);
    const clS05 = this.getHexFromHsl(hue, 0.5, lightness);
    const clS1 = this.getHexFromHsl(hue, 1, lightness);
    const clL0 = this.getHexFromHsl(hue, saturation, 0);
    const clL05 = this.getHexFromHsl(hue, saturation, 0.5);
    const clL1 = this.getHexFromHsl(hue, saturation, 1);
    return (
      <div
        className={cz(['pt-card pt-elevation-3', styles.root])}
        onSelectStart={this.preventDefault}
      >
        <div className={styles.boxWrapper}>
          <div className={styles.boxRow}>
            <SimpleSlider
              name="Hue"
              value={hue}
              onChange={this.updateHue}
              className={styles.boxHue}
              style={`background-image:linear-gradient(to right, ${this.getHexFromHsl(
                0,
                clampE(saturation),
                clampE(lightness)
              )}, ${this.getHexFromHsl(
                1 / 6,
                clampE(saturation),
                clampE(lightness)
              )},${this.getHexFromHsl(
                2 / 6,
                clampE(saturation),
                clampE(lightness)
              )},${this.getHexFromHsl(
                3 / 6,
                clampE(saturation),
                clampE(lightness)
              )},${this.getHexFromHsl(
                4 / 6,
                clampE(saturation),
                clampE(lightness)
              )},${this.getHexFromHsl(
                5 / 6,
                clampE(saturation),
                clampE(lightness)
              )},${this.getHexFromHsl(
                1,
                clampE(saturation),
                clampE(lightness)
              )});`}
            />
          </div>
          <div className={styles.boxRow}>
            <SimpleSlider
              name="R"
              value={r / FF}
              className={styles.boxR}
              onChange={this.updateRGB('r')}
              style={`background-image:linear-gradient(to top, ${clR0}, ${clR1});`}
              asHex
              vertical
            />
            <div className={styles.boxCol}>
              <SimpleSlider
                name="G"
                value={g / FF}
                className={styles.boxG}
                onChange={this.updateRGB('g')}
                style={`background-image:linear-gradient(to right, ${clG0}, ${clG1});`}
                asHex
              />
              <div className={styles.boxRow}>
                {initialValue !== cl &&
                  <Button
                    iconName="undo"
                    className={cz(['pt-minimal', styles.boxBtn])}
                    onClick={this.handleUndo}
                    style={`background:${initialValue}`}
                  />}
                <div
                  className={styles.boxMain}
                  style={{
                    background: this.getHex(r, g, b)
                  }}
                >
                  {/* <input type="color" className={styles.btnColor} value={cl} /> */}
                  <input
                    type="text"
                    className={styles.edtColor}
                    value={cl}
                    onClick={this.handleInputClick}
                    onChange={this.handleInput}
                  />
                </div>
                <Button
                  iconName="tick"
                  className={cz([styles.boxBtn])}
                  onClick={this.handleConfirm}
                />
              </div>
              <SimpleSlider
                name="B"
                value={b / FF}
                className={styles.boxB}
                onChange={this.updateRGB('b')}
                style={`background-image:linear-gradient(to right, ${clB0}, ${clB1});`}
                asHex
              />
            </div>
            <SimpleSlider
              name="L"
              value={lightness}
              className={styles.boxLight}
              onChange={this.updateLightness}
              style={`background-image:linear-gradient(to top, ${clL0}, ${clL05}, ${clL1});`}
              vertical
            />
          </div>
          <div className={styles.boxRow}>
            <SimpleSlider
              name="S"
              value={saturation}
              onChange={this.updateSaturation}
              className={styles.boxSatu}
              style={`background-image:linear-gradient(to right, ${clS0}, ${clS05}, ${clS1});`}
            />
          </div>
        </div>
      </div>
    );
  }
}
