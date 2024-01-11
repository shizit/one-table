import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    loginButtonText?: ReactNode;
  };
}
/* @figmaId 8:415 */
export const Button: FC<Props> = memo(function Button(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.loginButton}></div>
      {props.text?.loginButtonText != null ? (
        props.text?.loginButtonText
      ) : (
        <div className={classes.loginButtonText}>OK</div>
      )}
    </button>
  );
});
