import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button } from '../Button/Button';
import { InputAndLabel } from '../InputAndLabel/InputAndLabel';
import classes from './LoginForm.module.css';
import { LoginpanelIcon } from './LoginpanelIcon';

interface Props {
  className?: string;
}
/* @figmaId 10:675 */
export const LoginForm: FC<Props> = memo(function LoginForm(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.loginFormComponent}>
        <div className={classes.loginPanel}>
          <LoginpanelIcon className={classes.icon} />
        </div>
        <div className={classes.login}>Login</div>
        <div className={classes.line1}></div>
        <InputAndLabel className={classes.inputAndLabel} />
        <InputAndLabel className={classes.inputAndLabel2} />
        <InputAndLabel
          className={classes.inputAndLabel3}
          text={{
            usernameLabel: <div className={classes.usernameLabel}>Password</div>,
          }}
        />
        <div className={classes.youDontHaveAccount}>you dont have account? </div>
        <div className={classes.signUpIsHere}>Sign up is here.</div>
      </div>
      <Button
        className={classes.button}
        text={{
          loginButtonText: <div className={classes.loginButtonText}>Login</div>,
        }}
      />
    </div>
  );
});
