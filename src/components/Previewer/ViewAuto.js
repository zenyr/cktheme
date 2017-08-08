import { h } from 'preact';
import ViewList from './ViewList';
import ViewMenu from './ViewMenu';
import styles from './style.less';
import { cz } from '../../lib/util';

export default ({ mode, colors, toggleMode }) =>
  (<div
    className={styles.root}
    // style={`background:${colors.paper}`}
    onClick={toggleMode}
  >
    <div className={styles.viewWrap}>
      <ViewMenu colors={colors} />
    </div>
    <div className={cz([styles.viewWrap, mode === 'menu' && styles.slideList])}>
      <ViewList mode="list" colors={colors} hideBar={mode !== 'list'} />
    </div>
  </div>);
