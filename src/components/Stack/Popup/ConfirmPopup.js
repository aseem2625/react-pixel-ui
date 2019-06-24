import React from 'react';
import { _popupsStackInstance } from './Popup';
import Button from 'components/Button/Button';
import { classList, prefixToClasses } from 'js-awesome-utils';

/*
 * Props:
 *   description,
 *   cancelLabel,
 *   affirmLabel,
 *   onAffirm,
 *   onCancel
 * */
class ConfirmPopup extends React.PureComponent {
  _onCancel() {
    this.props.close();
    this.props.onCancel && this.props.onCancel();
    this.props.reject();
  }

  _onAffirm() {
    this.props.close();

    if (this.props.onAffirm) {
      const promise = this.props.onAffirm();

      if (promise.then) {
        promise.then(resp => {
          this.props.resolve(resp);
        });
      } else {
        this.props.resolve();
      }
    }
  }

  onCancel = this._onCancel.bind(this);
  onAffirm = this._onAffirm.bind(this);

  render() {
    const { className, description, affirmLabel, cancelLabel, affirmButtonClass, cancelButtonClass } = this.props;

    return (
      <React.Fragment>
        {description && (
          <div
            className={prefixToClasses('Popup--', className + '-description')}
          >
            {description}
          </div>
        )}
        <div className={prefixToClasses('Popup--', className + '-actions')}>
          <Button className={cancelButtonClass} onClick={this.onCancel}>{cancelLabel}</Button>
          <Button className={affirmButtonClass} onClick={this.onAffirm}>
            {affirmLabel}
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

/*
 * Props:
 *   title,
 *   description,
 *   affirmLabel,
 *   cancelLabel,
 *   onAffirm,
 *   onCancel
 *
 * */
export default function openConfirmPopup({
  className,
  uiClass,
  title,
  description,
  affirmLabel,
  cancelLabel,
  onAffirm,
  onCancel,
  affirmButtonClass,
  cancelButtonClass,
  ...restProps
}) {
  const cls = 'Confirm';

  return new Promise((res, rej) => {
    _popupsStackInstance.addItemInStack(
      {
        ...restProps,
        className: classList(cls, className),
        uiClass,
        title,
        content: close => (
          <ConfirmPopup
            className={cls}
            close={close}
            description={description}
            affirmLabel={affirmLabel}
            cancelLabel={cancelLabel}
            onAffirm={onAffirm}
            onCancel={onCancel}
            affirmButtonClass={affirmButtonClass}
            cancelButtonClass={cancelButtonClass}
            resolve={res}
            reject={rej}
          />
        ),
        showCross: false,
        enableEscPress: false,
        enableOutsideClick: false,
      },
      true
    );
  }).catch(err => {});
}
