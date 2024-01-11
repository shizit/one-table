import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './HeaderComponent.module.css';

interface Props {
  className?: string;
}
/* @figmaId 8:249 */
export const HeaderComponent: FC<Props> = memo(function HeaderComponent(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.headerFrame}></div>
      <div className={classes.logoText}>One Table</div>
      <div className={classes.menuIcon}></div>
    </div>
  );
});
