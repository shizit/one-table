import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './InputAndLabel.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    usernameLabel?: ReactNode;
  };
}
/* @figmaId 10:667 */
export const InputAndLabel: FC<Props> = memo(function InputAndLabel(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.usernameInput}></div>
      {props.text?.usernameLabel != null ? (
        props.text?.usernameLabel
      ) : (
        <div className={classes.usernameLabel}>Username</div>
      )}
    </div>
  );
});
