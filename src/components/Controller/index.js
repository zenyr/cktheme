import { h, Component } from 'preact';
import { Tab2, Tabs2 } from '@blueprintjs/core';
import styles from './style.less';
import InfoController from './Info';
import LoadController from './Load';
import EditController from './Edit';
import JSONController from './JSON';
import { cz } from '../../lib/util';

// 미리보기
export default class Controller extends Component {
  render() {
    return (
      <Tabs2
        className={cz(['pt-large', styles.root])}
        id="controller"
        onChange={this.handleTabChange}
      >
        <Tab2 id="import" title="불러오기" panel={<LoadController />} />
        <Tab2 id="info" title="정보" panel={<InfoController />} />
        <Tab2 id="edit" title="편집" panel={<EditController />} />
        <Tab2 id="export" title="내보내기" panel={<JSONController />} />
        <Tabs2.Expander />
        {/* <input className="pt-input" type="text" placeholder="Search..." /> */}
      </Tabs2>
    );
  }
}
