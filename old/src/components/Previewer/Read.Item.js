import { Component } from 'preact';
import styles from './style.less';
import { cz } from '../../lib/util';

export default class Item extends Component {
  render({
    colors,
    name,
    date,
    text,
    like,
    mine,
    memo,
    owner,
    marked,
    author,
    reply
  }) {
    return (
      <div
        className={cz([styles.item, marked && styles.marked])}
        style={`background-color:${marked
          ? colors.markedBackground
          : mine
            ? colors.highlightedBackground
            : reply
              ? colors.paperAlt
              : 'transparent'};border-bottom-color:${colors.paperLine};${reply
          ? `padding-left:40px;`
          : ''};`}
      >
        {!!memo &&
          <div className={styles.memoRow}>
            <span
              className={styles.memo}
              style={`background:${colors.memo ||
                colors.commentColorDefault};color:${colors.memoText ||
                colors.commentText}`}
            >
              {memo}
            </span>
          </div>}
        <div
          className={styles.topRow}
          style={`font-weight:${owner ? 'bold' : 'normal'}`}
        >
          <div
            className={styles.name}
            style={`color:${owner ? colors.nameAuthor : colors.name};`}
          >
            {name}
          </div>
          <div
            className={styles.date}
            style={`color:${owner ? colors.nameAuthor : colors.time}`}
          >
            {date}
          </div>
          {!!like &&
            <div className={styles.like} style={`color:${colors.like}`}>
              ♥{like}
            </div>}
        </div>
        <div
          className={styles.text}
          style={`color:${mine ? colors.highlightedText : colors.paperText}`}
        >
          {text || '   '}
        </div>
      </div>
    );
  }
}
