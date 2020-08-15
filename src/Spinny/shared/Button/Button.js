import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.scss';

export default class Button extends PureComponent {

  render() {
    const {
      onClickHandler,
      isDisabled,
      btnText,
      btnType,
      opaqueFactor,
      id
    } = this.props;
    return (
      <button
        id = {id}
        onClick={onClickHandler}
        disabled={isDisabled}
        className={s.button}
        type={btnType}
        opacity={opaqueFactor}
      >
        {btnText}
      </button>
    );
  }
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired
};

Button.defaultProps = {
  classNamesStr: '', // BY default, Button will have primary btn css
  isDisabled: false,
  type: 'primary',
  size: 'large',
  btnType: 'button'
};
