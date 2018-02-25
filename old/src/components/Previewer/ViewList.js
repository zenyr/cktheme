import styles from './style.less';
import { cz } from '../../lib/util';

import List from './List';
import StatusBar from './StatusBar';

export default ({ colors, toggleMode, hideBar }) =>
  (<div
    className={styles.viewWrap}
    style={`background:${colors.paper}`}
    onClick={toggleMode}
  >
    <StatusBar colors={colors} />
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
