import { h, Component } from 'preact';
import styles from './style.less';
import { cz } from '../../lib/util';

export default class Item extends Component {
  render({ colors, name, date, text, like, mine, author, reply }) {
    return (
      <div
        className={styles.item}
        style={`background-color:${mine
          ? colors.highlightedBackground
          : reply
            ? colors.paperAlt
            : 'transparent'};border-bottom-color:${colors.paperLine};${reply
          ? `padding-left:40px;`
          : ''}`}
      >
        <div className={styles.topRow}>
          <div
            className={styles.name}
            style={`color:${mine ? colors.nameAuthor : colors.name};`}
          >
            {name}
          </div>
          <div className={styles.date} style={`color:${colors.date}`}>
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
