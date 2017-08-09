import styles from './style.less';
import { cz } from '../../lib/util';

import StatusBar from './StatusBar';
import Read from './Read';

export default ({ colors, toggleMode, hideBar }) =>
  (<div
    className={styles.viewWrap}
    style={`background:${colors.paper}`}
    onClick={toggleMode}
  >
    <StatusBar colors={colors} />
    <Read colors={colors} />
    <div
      className={cz([styles.boxPrimary, styles.spread])}
      style={`background:${colors.primaryBackground};color:${colors.primaryText}`}
    >
      <span className="pt-icon-large pt-icon-arrow-left" />
      <span className="pt-icon-large pt-icon-refresh" />
      <span className="pt-icon-large pt-icon-comment" />
      <span className="pt-icon-large pt-icon-more" />
      <span className="pt-icon-large pt-icon-share" />
    </div>
  </div>);
