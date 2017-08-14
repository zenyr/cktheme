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
    <div className={styles.info} style={`color:${colors.time};`}>
      <div className={styles.name} style={`color:${colors.name};`}>
        지나가던행인65535
      </div>
      <div className={styles.date}>8/9 16:06:28</div>
      <div className={styles.div}>·</div>
      <div className={styles.count}>88</div>
    </div>
    <div
      className={styles.memoRow}
      style={`border-bottom-color:${colors.paperLine};`}
    >
      <div
        className={styles.memo}
        style={`background:${colors.memo || colors.commentColorDefault};color:${colors.memoText || colors.commentText}`}
      >
        503 친구
      </div>
    </div>
    <div className={styles.text} style={`color:${colors.paperText};`}>
      <p>
        천지는 가진 생의 너의 힘차게 구하지 사막이다. 내는 수 웅대한 이상 오직 피다. 듣기만 실로 굳세게 기쁘며, 새 낙원을 그들에게
        교향악이다. 하는 피는 살 새 찾아 현저하게 청춘의 같이 보는 것이다.
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
      text="이 헌법공포 당시의 국회의원의 임기는 제1항에 의한 국회의 최초의 집회일 전일까지로 한다. 정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을 보조할 수 있다."
      date="9/11 12:34:56"
      like={1}
    />
    <Item
      colors={colors}
      name="사생활"
      like={420}
      text="모든 국민은 인간다운 생활을 할 권리를 가진다. 대한민국은 민주공화국이다. 대통령은 헌법과 법률이 정하는 바에 의하여 공무원을 임면한다. 모든 국민은 거주·이전의 자유를 가진다."
      date="9/11 12:34:56"
    />
    <Item
      colors={colors}
      name="가라사대"
      reply
      text="비상계엄이 선포된 때에는 법률이 정하는 바에 의하여 영장제도, 언론·출판·집회·결사의 자유, 정부나 법원의 권한에 관하여 특별한 조치를 할 수 있다."
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
