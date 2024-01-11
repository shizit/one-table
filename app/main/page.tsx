import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ActionButton } from './ActionButton/ActionButton';
import { HeaderComponent } from './HeaderComponent/HeaderComponent';
import classes from './Main.module.css';
import { Table } from './Table/Table';

interface Props {
  className?: string;
}
/* @figmaId 6:46 */
export default function Home() {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <HeaderComponent />
      <div className={classes.tableActionButtons}>
        <ActionButton />
        <ActionButton
          classes={{ button: classes.button }}
          text={{
            buttonText: <div className={classes.buttonText}>Edit</div>,
          }}
        />
        <ActionButton
          classes={{ button: classes.button2 }}
          text={{
            buttonText: <div className={classes.buttonText2}>Delete</div>,
          }}
        />
      </div>
      <Table />
    </div>
  );
};
