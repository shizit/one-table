import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Login.module.css';
import { LoginForm } from './LoginForm/LoginForm';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export default function Home() {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <LoginForm />
    </div>
  );
};
