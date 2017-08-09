import { h } from 'preact';
import Item from './List.Item';
import styles from './style.less';

export default ({ colors }) =>
  (<div className={styles.boxList}>
    <Item
      title="형사피해자는 법률이 정하는 바에 의하여 당해 사건의 재판절차에서 진술할 수 있다."
      name="논개"
      comment={54}
      recommend={274}
      time="10:07"
      count={1234}
      colors={colors}
      commentActive
      recommendActive
    />
    <Item
      title="대통령의 임기가 만료되는 때에는 임기만료 70일 내지 40일전에 후임자를 선거한다"
      name="목과머리의분리"
      comment={61}
      recommend={274}
      time="10:07"
      count={1234}
      colors={colors}
      commentActive
    />
    <Item
      title="외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다.	"
      name="이중섭"
      comment={22}
      recommend={0}
      time="10:07"
      count={1234}
      colors={colors}
    />
    <Item
      title="국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써"
      name="홍길동"
      comment={22}
      recommend={11}
      time="10:07"
      count={5}
      commentActive
      colors={colors}
    />
    <Item
      title="모든 국민은 신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을"
      name="임꺽정"
      comment={0}
      recommend={1}
      time="10:07"
      count={1234}
      colors={colors}
    />
    <Item
      title="국회의원의 선거구와 비례대표제 기타 선거에 관한 사항은 법률로 정한다."
      name="이순신"
      comment={11}
      recommend={0}
      time="10:07"
      count={1234}
      colors={colors}
    />
    <Item
      title="법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 ..."
      name="계백"
      comment={11}
      recommend={0}
      time="10:07"
      count={1234}
      colors={colors}
    />
    <Item
      title="국가는 농지에 관하여 경자유전의 원칙이 달성될 수 있도록 노력하여야 하며, 농지의 소작제도는 금지된다."
      name="심순애"
      comment={0}
      recommend={0}
      time="10:07"
      count={1234}
      colors={colors}
    />
    <Item
      title="제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야 하며, 그 의결은 국회재적의원 과반수의 ..."
      name="길라임"
      comment={11}
      recommend={0}
      time="10:07"
      count={1234}
      colors={colors}
    />
  </div>);
