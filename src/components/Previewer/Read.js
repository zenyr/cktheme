import Item from './Read.Item';
import styles from './style.less';

export default ({ colors }) =>
  (<div className={styles.boxRead} style={`background:${colors.paper}`}>
    <div
      className={styles.title}
      style={`background:${colors.statusBackground};color:${colors.statusText}`}
    >
      설레는 그들은 따뜻한 못할 희망의 위하여 자신과 것이다.
    </div>
    <div
      className={styles.info}
      style={`border-bottom-color:${colors.paperLine};color:${colors.time};`}
    >
      <div className={styles.name} style={`color:${colors.name};`}>
        지나가던행인65535
      </div>
      <div className={styles.date}>8/9 16:06:28</div>
      <div className={styles.div}>·</div>
      <div className={styles.count}>88</div>
    </div>
    <div className={styles.text} style={`color:${colors.paperText};`}>
      <p>피에 찬미를 커다란 보내는 얼음 풀이 그들의 아니다. 이 가진 피고 기쁘며, 얼마나 이상의 원대하고, 끓는다.</p>
      <p>
        대한 때까지 천하를 희망의 군영과 끓는 원대하고, 이 때문이다. 길을 웅대한 그들의 이상이 것이다. 불어 같지 간에 못할 그러므로
        굳세게 우리 타오르고 사막이다. 현저하게 품었기 인생의 할지라도 있는 든 낙원을 웅대한 것이다. 생명을 이상은 대고, 온갖
        살았으며, 방황하였으며, 위하여서. 부패를 희망의 가슴에 꽃이 원질이 끝까지 같은 인간이 쓸쓸하랴? 피에 위하여서 커다란
        살았으며, 유소년에게서 공자는 인생에 이상의 실현에 위하여서.
      </p>
      <div className={styles.source}>
        출처 :{' '}
        <span className={styles.link} style={`color:${colors.link}`}>
          http://clien.net
        </span>
      </div>
    </div>
    <div
      className={styles.commentBar}
      style={`background:${colors.statusBackground};color:${colors.statusText}`}
    >
      4개의 댓글
    </div>
    <Item
      colors={colors}
      name="내꺼야"
      mine
      text="피어나는 착목한는 같은 현저하게 뭇 사막이다. 무엇을 이것이야말로 싸인 쓸쓸하랴?"
      date="9/11 12:34:56"
      like={1}
    />
    <Item
      colors={colors}
      name="지나가던행인65535"
      reply
      text="인간의 때까지 고행을 구하기 실로 되려니와, 가슴이 사랑의 수 듣는다. 얼음이 인간이 청춘의 가진 피어나는 위하여서."
      date="9/11 12:34:56"
      owner
    />
    <Item
      colors={colors}
      name="목과머리의분리"
      text="무엇을 이상 자신과 미묘한 그들의 용기가 얼마나 설레는 그들의 봄바람이다. 사람은 든 그들의 구하기 역사를 때문이다. 인간은 따뜻한 싹이 그들의 피부가 부패뿐이다. 평화스러운 붙잡아 스며들어 그러므로 칼이다."
      date="9/11 12:34:56"
      marked
    />
    <Item
      colors={colors}
      name="프로빈댓글러"
      like={420}
      text=""
      date="9/11 12:34:56"
    />
  </div>);
