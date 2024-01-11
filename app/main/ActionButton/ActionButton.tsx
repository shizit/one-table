import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ActionButton.module.css';

interface Props {
  className?: string;
  classes?: {
    button?: string;
  };
  text?: {
    buttonText?: ReactNode;
  };
}
/* @figmaId 12:1090 */
export const ActionButton: FC<Props> = memo(function ActionButton(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      <div className={`${props.classes?.button || ''} ${classes.button}`}></div>
      {props.text?.buttonText != null ? props.text?.buttonText : <div className={classes.buttonText}>Add</div>}
    </button>
  );
});
