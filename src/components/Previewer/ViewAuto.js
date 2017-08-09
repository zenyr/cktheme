import ViewList from './ViewList';
import ViewRead from './ViewRead';
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
    <div
      className={cz([
        styles.viewWrap,
        styles.slideShadow,
        mode === 'menu' && styles.slideList
      ])}
    >
      <ViewList colors={colors} hideBar={mode !== 'list'} />
    </div>
    <div
      className={cz([
        styles.viewWrap,
        mode === 'read' && styles.slideShadow,
        mode !== 'read' && styles.slideRead
      ])}
    >
      <ViewRead colors={colors} />
    </div>
  </div>);
