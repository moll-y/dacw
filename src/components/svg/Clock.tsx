import { FunctionComponent } from 'react';

const ClockSVG: FunctionComponent<{ className: string }> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
      stroke-width="2" stroke="currentColor" fill="none" /* color */ stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <circle cx="12" cy="12" r="9"></circle>
      <polyline points="12 7 12 12 15 15"></polyline>
    </svg>
  );
};

export default ClockSVG;
