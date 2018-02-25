import styles from './style.less';
import { cz } from '../../lib/util';

export default ({ colors }) =>
  (<div style={`background:#000`} className={styles.viewWrap}>
    {/* <div className={styles.overlay} /> */}
    <div
      className={styles.boxMenu}
      style={`background:${colors.primaryBackground};color:${colors.primaryText}`}
    >
      <div className={styles.header}>
        <div className={styles.left}>
          <span className="pt-icon-standard pt-icon-selection" />
        </div>
        <div className={styles.right}>
          <span className="pt-icon-standard pt-icon-menu" />
        </div>
        <div className={styles.text}>기본 게시판</div>
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
      <div
        className={styles.list}
        style={`background:${colors.primaryBackground};color:${colors.primaryText}`}
      >
        <a className={cz([styles.item, styles.active])}>모두의공원</a>
        <a className={styles.item}>사진게시판</a>
        <a className={styles.item}>아무거나질문</a>
        <a className={styles.item}>새로운소식</a>
        <a className={styles.item}>팁과강좌</a>
        <a className={styles.item}>사용기</a>
        <a className={styles.item}>유용한사이트</a>
        <a className={styles.item}>알뜰구매</a>
        <a className={styles.item}>쿠폰/이벤트</a>
        <a className={styles.item}>직접홍보</a>
        <a className={styles.item}>자료실</a>
        <a className={styles.item}>회원중고장터</a>
        <a className={styles.item}>체험단사용기</a>
        <a className={styles.item}>버그신고</a>
      </div>
      <div className={styles.footer}>
        <span className="pt-icon-standard pt-icon-edit" />
        <span className="pt-icon-standard pt-icon-bookmark" />
        <span className="pt-icon-standard pt-icon-envelope" />
        <span className="pt-icon-standard pt-icon-user" />
        <span className="pt-icon-standard pt-icon-more" />
      </div>
    </div>
  </div>);
