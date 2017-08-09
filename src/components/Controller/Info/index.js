import { h, Component } from 'preact';
import styles from '../style.less';
import { Switch, InputGroup, Button } from '@blueprintjs/core';
import { bind } from 'decko';
import { cz } from '../../../lib/util';
import { Actions, autoBind, connect } from '../../../duck';

const Row = ({ name, value, onChange }) =>
  (<tr>
    <td>
      {name}
    </td>
    <td>
      {typeof value === 'boolean'
        ? <Switch className="pt-large" checked={value} onChange={onChange} />
        : <InputGroup
          className={styles.edtValue}
          value={value}
          onChange={onChange}
        />}
    </td>
  </tr>);

const stateSelector = state => ({ data: state.Theme });
const actionBinder = autoBind({ ...Actions.Theme });
@connect(stateSelector, actionBinder)
export default class InfoController extends Component {
  @bind
  handleStage(fieldName) {
    return ev =>
      this.setState({
        dirty: true,
        [fieldName]:
          ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
      });
  }
  @bind
  handleApply() {
    const { id, name, dark, data } = this.props;
    if (data.id !== this.state.id) {
      id(this.state.id);
    }
    if (data.name !== this.state.name) {
      name(this.state.name);
    }
    if (data.dark !== this.state.dark) {
      dark(this.state.dark);
    }
    this.setState({ dirty: false });
  }
  @bind
  handleCancel() {
    this.handleReset();
  }
  @bind
  handleReset(newData = this.props.data) {
    this.setState({ ...newData, dirty: false, data: void 0 });
  }
  componentWillMount() {
    this.handleReset();
  }
  componentWillReceiveProps(newProps) {
    const oldProps = this.props;
    if (this.state.dirty || newProps.data !== oldProps.data) {
      this.handleReset(newProps.data);
    }
  }
  render({ data }, { id, name, dark, dirty }) {
    return (
      <div className={styles.childRoot}>
        <table className={cz(['pt-table', styles.table])}>
          <thead>
            <tr>
              <th>필드명</th>
              <th>값</th>
            </tr>
          </thead>
          <tbody>
            <Row name="고유명" value={id} onChange={this.handleStage('id')} />
            <Row name="테마명" value={name} onChange={this.handleStage('name')} />
            <Row name="다크모드" value={dark} onChange={this.handleStage('dark')} />
          </tbody>
        </table>
        <div className={styles.toolbar}>
          <Button
            disabled={!dirty}
            iconName="undo"
            onClick={this.handleCancel}
          />
          <Button
            disabled={!dirty}
            iconName="floppy-disk"
            className="pt-intent-primary"
            onClick={this.handleApply}
          />
        </div>
      </div>
    );
  }
}
