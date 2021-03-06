import { Component } from 'preact';
import styles from './style.less';
import { cz } from '../../lib/util';

class Comment extends Component {
  render({ colors, comment, commentActive }) {
    const commentColor = !commentActive
      ? colors.commentColorDefault
      : comment >= 60
        ? colors.commentColorHigh
        : comment >= 30 ? colors.commentColorMedium : colors.commentColorLow;
    const commentTextColor = commentActive
      ? colors.commentText
      : colors.commentColorDefault;
    return (
      <div
        className={cz([styles.comment, commentActive && styles.active])}
        style={`background:${commentActive
          ? commentColor
          : 'transparent'};border-color:${commentColor};color:${commentTextColor}`}
      >
        {comment}
      </div>
    );
  }
}

export default class Item extends Component {
  render({
    colors,
    title,
    name,
    comment,
    commentActive,
    recommend,
    recommendActive,
    category,
    scrap,
    read,
    mine,
    time,
    count
  }) {
    return (
      <div
        className={styles.item}
        style={`background-color:${mine
          ? colors.highlightedBackground
          : 'transparent'};border-bottom-color:${colors.paperLine}`}
      >
        <div className={styles.topRow}>
          <div
            className={styles.title}
            style={`color:${read
              ? colors.paperAltText
              : mine ? colors.highlightedText : colors.paperText}`}
          >
            {!!category &&
              <div
                className={styles.category}
                style={`color:${colors.categoryText};background-color:${colors.category};`}
              >
                {category}
              </div>}
            {title}
          </div>
          {!!comment &&
            <Comment
              colors={colors}
              comment={comment}
              commentActive={commentActive}
            />}
        </div>
        {!!scrap &&
          <div className={styles.midRow}>
            <span className={styles.scrap} style={`color:${colors.scrap}`}>
              {scrap}
            </span>
          </div>}
        <div className={styles.bottomRow}>
          {!!recommend &&
            <div
              className={cz([styles.recommend, styles.hot])}
              style={`color:${recommendActive ? colors.like : colors.time}`}
            >
              ♥{recommend}
            </div>}
          {!!recommend &&
            <div className={styles.div} style={`color:${colors.time}`}>
              ·
            </div>}
          <div className={styles.time} style={`color:${colors.time}`}>
            {time}
          </div>
          <div className={styles.div} style={`color:${colors.time}`}>
            ·
          </div>
          <div className={styles.time} style={`color:${colors.time}`}>
            {count}
          </div>
          <div
            className={styles.name}
            style={`color:${mine
              ? colors.nameAuthor
              : read ? colors.paperAltText : colors.name}`}
          >
            {name}
          </div>
        </div>
      </div>
    );
  }
}
