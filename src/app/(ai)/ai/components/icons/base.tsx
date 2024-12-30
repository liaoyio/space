import { SVGProps } from 'react';

export const LightModeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      className="size-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        strokeWidth="1.5"
        d="M14.167 10a4.167 4.167 0 1 1-8.334 0 4.167 4.167 0 0 1 8.334 0Z"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M10 1.667v1.25m0 14.167v1.25m5.892-2.44-.884-.885M4.991 4.991l-.884-.884M18.333 10h-1.25M2.917 10h-1.25m14.226-5.892-.884.883M4.99 15.01l-.883.884"
      ></path>
    </svg>
  );
};

export const DarkModeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 21 20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18.25 11.732a7.131 7.131 0 0 1-9.649-9.649 8.022 8.022 0 1 0 9.649 9.649Z"
      ></path>
    </svg>
  );
};

export const SystemModeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12.333 1.667H9c-2.733 0-4.099 0-5.068.678a3.75 3.75 0 0 0-.92.921c-.679.969-.679 2.335-.679 5.068 0 2.732 0 4.099.679 5.067.25.359.562.67.92.921C4.901 15 6.267 15 9 15h3.333c2.733 0 4.1 0 5.068-.678.358-.25.67-.562.92-.92.679-.97.679-2.336.679-5.068 0-2.733 0-4.1-.678-5.068a3.75 3.75 0 0 0-.921-.92c-.969-.679-2.335-.679-5.068-.679Z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.833 12.5H11.5"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m12.75 18.333-.263-.349c-.592-.787-.74-1.989-.365-2.984m-3.539 3.333.263-.349c.593-.787.74-1.989.365-2.984M6.5 18.333h8.334"
      ></path>
    </svg>
  );
};

export const WarningIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M8.635 1.679a4.33 4.33 0 0 1 2.73 0c.883.293 1.577.989 2.274 1.966.694.974 1.462 2.331 2.45 4.082l.04.068c.99 1.751 1.756 3.109 2.235 4.21.48 1.107.72 2.062.529 2.98a4.507 4.507 0 0 1-1.357 2.4c-.69.633-1.627.9-2.808 1.029-1.174.127-2.71.127-4.687.127h-.082c-1.977 0-3.513 0-4.687-.127-1.18-.129-2.119-.396-2.808-1.03a4.506 4.506 0 0 1-1.356-2.4c-.191-.917.048-1.872.528-2.979.479-1.101 1.246-2.459 2.235-4.21l.04-.068c.988-1.75 1.756-3.108 2.45-4.082.697-.977 1.39-1.673 2.274-1.966Zm.532 12.487c0-.46.371-.833.83-.833h.007c.458 0 .83.373.83.833 0 .46-.372.834-.83.834h-.008a.831.831 0 0 1-.83-.834Zm0-3.333a.833.833 0 1 0 1.666 0V7.5a.833.833 0 0 0-1.666 0v3.333Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const UploadIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99996 4.1665V12.4998M9.99996 4.1665C9.41646 4.1665 8.32623 5.82842 7.91663 6.24984M9.99996 4.1665C10.5835 4.1665 11.6737 5.82842 12.0833 6.24984"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M4.16663 15.8335H15.8334"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
export const DingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m2.5 17.5 4.167-4.166M11.049 15.726c-3.12-.708-6.067-3.655-6.775-6.775-.112-.494-.168-.74-.006-1.141.163-.4.36-.525.758-.772.897-.56 1.868-.739 2.876-.65 1.414.125 2.121.188 2.474.004.353-.184.593-.614 1.072-1.473l.607-1.089c.4-.717.6-1.076 1.071-1.245.47-.17.754-.067 1.32.138a4.691 4.691 0 0 1 2.831 2.83c.205.567.307.85.138 1.32-.169.471-.528.672-1.245 1.072l-1.114.621c-.858.478-1.287.718-1.47 1.074-.184.356-.118 1.048.016 2.432.098 1.017-.071 1.995-.639 2.903-.248.396-.372.595-.773.757-.4.162-.647.106-1.141-.006Z"
      ></path>
    </svg>
  );
};
export const CopyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M7.5 12.5c0-2.357 0-3.536.732-4.268C8.964 7.5 10.143 7.5 12.5 7.5h.833c2.357 0 3.536 0 4.268.732.732.732.732 1.911.732 4.268v.833c0 2.357 0 3.536-.732 4.268-.732.732-1.91.732-4.268.732H12.5c-2.357 0-3.536 0-4.268-.732-.732-.732-.732-1.91-.732-4.268V12.5Z"
      ></path>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M14.166 7.5c-.002-2.464-.039-3.74-.756-4.615a3.336 3.336 0 0 0-.462-.462c-.922-.756-2.292-.756-5.031-.756-2.74 0-4.11 0-5.032.756a3.332 3.332 0 0 0-.462.462c-.756.922-.756 2.292-.756 5.032s0 4.109.756 5.03c.139.17.294.324.462.463.874.717 2.15.754 4.615.756"
      ></path>
    </svg>
  );
};
export const DownloadIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M10 12.5V4.166m0 8.334c-.584 0-1.674-1.662-2.083-2.084M10 12.5c.584 0 1.674-1.662 2.083-2.084M4.167 15.834h11.666"
      ></path>
    </svg>
  );
};
