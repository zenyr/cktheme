import { Component } from 'preact';
import { bind, debounce } from 'decko';
import styles from './style.less';
import { hx, clamp } from './funcs';
import { cz } from '../../lib/util';

// style
// className
// name = string
// value = 0..1
// onChange = fn(value)
// vertical = true|false
// multiplier = ?number

const padding = 3;

export default class SimpleSlider extends Component {
  @bind
  handleTouchStart(ev) {
    this._dragging = true;
    ev.preventDefault();
    this.sendResultFromEvent(ev);
  }
  @bind
  handleTouchEnd(ev) {
    if (!this._dragging) return;
    this._dragging = false;
    this.sendResultFromEvent(ev);
  }
  @bind
  handleTouchMove(ev) {
    if (!this._dragging) return;
    this.sendResultFromEvent(ev);
  }

  @bind
  @debounce
  sendResultFromEvent(ev) {
    const { vertical, onChange } = this.props;
    if (!onChange) return;
    let result;
    if (vertical) {
      result = clamp(
        1 - (ev.layerY - padding) / (ev.target.clientHeight - padding * 2)
      );
    } else {
      result = clamp(
        (ev.layerX - padding) / (ev.target.clientWidth - padding * 2)
      );
    }
    onChange(Math.round(result * 100) / 100);
  }

  render({ name, value, className, style, vertical, asHex }) {
    const display = asHex
      ? hx(Math.round(value * 256)).toUpperCase()
      : `${~~(value * 1000) / 10}%`;
    return (
      <div
        className={className}
        style={style}
        onMouseDown={this.handleTouchStart}
        onMouseUp={this.handleTouchEnd}
        onMouseMove={this.handleTouchMove}
        onMouseLeave={this.handleTouchEnd}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
        onTouchMove={this.handleTouchMove}
      >
        {vertical
          ? <div
            className={cz([styles.position, styles.vertical])}
            style={`top:${(1 - value) * 100}%`}
            data-value={display}
          />
          : <div
            className={styles.position}
            style={`left:${value * 100}%`}
            data-value={display}
          />}
        {name}
      </div>
    );
  }
}
