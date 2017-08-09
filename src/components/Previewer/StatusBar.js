import { Component } from 'preact';
import styles from './style.less';

const days = '일월화수목금토'.split('');
class Clock extends Component {
  componentWillMount() {
    this._tmr = setInterval(() => this.forceUpdate(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this._tmr);
  }
  render() {
    const d = new Date();
    return (
      <span>
        {[
          d.getMonth() + 1,
          '/',
          d.getDate(),
          ' (',
          days[d.getDay()],
          ') ',
          d.getHours() >= 12 ? '오후' : '오전',
          ' ',
          d.getHours() % 12,
          ':',
          d.getMinutes() < 10 ? '0' : '',
          d.getMinutes(),
          ':',
          d.getSeconds() < 10 ? '0' : '',
          d.getSeconds()
        ].join('')}
      </span>
    );
  }
}

export default ({ colors }) =>
  (<div
    className={styles.boxStatus}
    style={`background:${colors.statusBackground};color:${colors.statusText}`}
  >
    <div className={styles.left}>
      <span className="pt-icon-standard pt-icon-more" />
    </div>
    <div className={styles.right}>
      <span className="pt-icon-standard pt-icon-social-media" />
    </div>
    <Clock />
  </div>);
