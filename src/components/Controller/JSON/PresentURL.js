import { Component } from 'preact';
import { Button } from '@blueprintjs/core';
import styles from '../style.less';
import { BlackPortal } from 'react-native-portal';
import { bind } from 'decko';

export default class extends Component {
  @bind
  handleSelectAll() {
    const ref = this._input;
    if (ref) {
      try {
        if (typeof ref.setSelectionRange === 'function') {
          ref.setSelectionRange(0, ref.value.length);
        } else if (typeof ref.select === 'function') {
          ref.select();
        }
        ref.focus();
      } catch (e) {}
    }
  }

  render({ loading, success, url, error, onClose }) {
    return (
      <BlackPortal name="picker">
        <div className={`pt-dialog ${styles.dialog}`}>
          <div className="pt-dialog-header">
            <span
              className={`pt-icon-large ${loading
                ? 'pt-icon-more'
                : success ? 'pt-icon-tick' : 'pt-icon-error'}`}
            />
            <h5>공유용 단축URL</h5>
            <button
              aria-label="Close"
              className="pt-dialog-close-button pt-icon-small-cross"
              onClick={onClose}
            />
          </div>
          <div className="pt-dialog-body">
            {loading &&
              <div className="pt-spinner">
                <div className="pt-spinner-svg-container">
                  <svg viewBox="0 0 100 100">
                    <path
                      className="pt-spinner-track"
                      d="M 50,50 m 0,-44.5 a 44.5,44.5 0 1 1 0,89 a 44.5,44.5 0 1 1 0,-89"
                    />
                    <path
                      className="pt-spinner-head"
                      d="M 94.5 50 A 44.5 44.5 0 0 0 50 5.5"
                    />
                  </svg>
                </div>
              </div>}
            {!!url &&
              <div className="pt-input-group pt-fill">
                <span className="pt-icon pt-icon-link" />
                <input
                  className={`pt-input ${styles.code}`}
                  value={url}
                  readOnly
                  ref={r => (this._input = r)}
                />
              </div>}
            {!!error && error}
          </div>
          <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
              <Button
                className="pt-intent-success"
                iconName="select"
                text="전체선택"
                onClick={this.handleSelectAll}
              />
              <Button
                className="pt-intent-primary"
                iconName="cross"
                text="닫기"
                onClick={onClose}
              />
            </div>
          </div>
        </div>
      </BlackPortal>
    );
  }
}
