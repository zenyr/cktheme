import { h, Component } from 'preact';
import { Tab2, Tabs2, Switch } from '@blueprintjs/core';
import styles from './style.less';
import InfoController from 'async!./Info';
import LoadController from 'async!./Load';
import EditController from 'async!./Edit';
import JSONController from 'async!./JSON';
import { cz } from '../../lib/util';

// 미리보기
export default class Controller extends Component {
  render({ float, toggleFloat }) {
    return (
      <Tabs2
        className={cz([styles.root])}
        id="controller"
        onChange={this.handleTabChange}
      >
        <Tab2
          id="import"
          title={<span className="pt-icon-large pt-icon-folder-open" />}
          panel={<LoadController />}
        />
        <Tab2
          id="info"
          title={<span className="pt-icon-large pt-icon-annotation" />}
          panel={<InfoController />}
        />
        <Tab2
          id="edit"
          title={<span className="pt-icon-large pt-icon-tint" />}
          panel={<EditController />}
        />
        <Tab2
          id="export"
          title={<span className="pt-icon-large pt-icon-box" />}
          panel={<JSONController />}
        />
        <Tabs2.Expander />
        <Switch checked={float} onChange={toggleFloat}>
          <span
            className={cz([
              'pt-icon',
              float ? 'pt-icon-applications' : 'pt-icon-list-detail-view'
            ])}
          />
        </Switch>
      </Tabs2>
    );
  }
}
