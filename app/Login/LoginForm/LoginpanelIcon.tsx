import { memo, SVGProps } from 'react';

const LoginpanelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 332 408' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H332V408H0V0Z' fill='#F6F6F6' />
  </svg>
);

const Memo = memo(LoginpanelIcon);
export { Memo as LoginpanelIcon };
