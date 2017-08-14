import { Component } from 'preact';
import styles from '../style.less';

const Link = ({ href, text, className }) =>
  (<a
    className={'pt-button pt-minimal ' + (className || '')}
    href={href}
    target="_blank"
  >
    {text}
  </a>);
const Icon = ({ name }) =>
  <span className={`pt-icon-standard pt-icon-${name}`} />;

export default class History extends Component {
  render() {
    return (
      <div className={styles.childRoot}>
        <h5>CK theme builder for ClienKit</h5>
        <div className="pt-running-text">
          <dl className="pt-list">
            <dt>
              <Icon name="person" /> made by
            </dt>
            <dd>
              <Link
                href="https://twitter.com/zenyr"
                text="zenyr"
                className="pt-intent-success"
              />
            </dd>
            <dd>@ Aug. 2017</dd>
            <dt>
              <Icon name="build" /> built with
            </dt>
            <dd>
              <Link href="https://preactjs.com" text="preact.js" />
            </dd>
            <dd>
              <Link href="https://blueprintjs.com" text="blueprint.js" />
            </dd>
            <dd>
              <Link href="https://webpack.js.org" text="webpack" />
            </dd>
            <dt>
              <Icon name="git-pull" /> Fork / issue
            </dt>
            <dd>
              <Link
                href="https://github.com/zenyr/cktheme"
                text="Github"
                className="pt-intent-primary"
              />
            </dd>
            <dt>
              <Icon name="manual" /> License : MIT
            </dt>
            <dd>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </dd>
            <dt>
              <Icon name="resolve" /> Changelog
            </dt>
            <dd>
              <dl>
                <dt>0.9</dt>
                <dd>정보 페이지 추가</dd>
                <dd>메모 예시 추가</dd>
                <dd>댓글 예시 추가</dd>
                <dd>불러오기 UI 반응성 개선</dd>
                <dd>내보내기 UI 기본값 공유코드로 개선</dd>
                <dd>컬러피커 수동입력 추가</dd>
                <dt>0.8</dt>
                <dd>컬러피커 변경</dd>
              </dl>
            </dd>
          </dl>
        </div>
      </div>
    );
  }
}
