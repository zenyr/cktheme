import { h, Component } from 'preact';
import List from './List';
import styles from './style.less';
import { cz } from '../../lib/util';

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
          d.getMinutes(),
          ':',
          d.getSeconds()
        ].join('')}
      </span>
    );
  }
}

export default ({ colors, toggleMode, hideBar }) =>
  (<div
    className={styles.viewWrap}
    style={`background:${colors.paper}`}
    onClick={toggleMode}
  >
    <div
      className={styles.boxStatus}
      style={`background:${colors.statusBackground};color:${colors.statusText}`}
    >
      <div className={styles.left}>
        <span className="pt-icon pt-icon-more" />
      </div>
      <div className={styles.right}>
        <span className="pt-icon pt-icon-social-media" />
      </div>
      <Clock />
    </div>
    <List colors={colors} />
    <div
      className={cz([styles.boxPrimary, hideBar && styles.hidden])}
      style={`background:${colors.primaryBackground};color:${colors.primaryText}`}
    >
      <div className={styles.left}>
        <span className="pt-icon-large pt-icon-arrow-left" />
        <span className="pt-icon-large pt-icon-page-layout" />
      </div>
      <div className={styles.right}>
        <span className="pt-icon-large pt-icon-search" />
        <span className="pt-icon-large pt-icon-edit" />
      </div>

      <div className={styles.subText}>댓글 TOP</div>
      <div className={styles.text}>모두의 공원</div>
      <div className={styles.dots}>
        <div
          className={styles.dot}
          style={`background:${colors.primaryText}`}
        />
        <div
          className={styles.dot}
          style={`background:${colors.primaryAltText}`}
        />
        <div
          className={styles.dot}
          style={`background:${colors.primaryAltText}`}
        />
      </div>
    </div>
  </div>);
