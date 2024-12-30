import type { SVGProps } from 'react';

export const CloseSiderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1.667 10c0-3.125 0-4.687.796-5.782.257-.354.568-.665.921-.922C4.48 2.5 6.042 2.5 9.167 2.5h1.666c3.125 0 4.688 0 5.783.796.354.257.665.568.922.922.795 1.095.795 2.657.795 5.782s0 4.687-.795 5.782a4.164 4.164 0 0 1-.922.922c-1.095.796-2.658.796-5.783.796H9.167c-3.125 0-4.687 0-5.783-.796a4.165 4.165 0 0 1-.921-.922c-.796-1.095-.796-2.657-.796-5.782ZM7.917 2.917v14.166"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.167 5.833h1.25M4.167 9.167h1.25M14.167 8.333l-1.022.881c-.43.37-.645.556-.645.786 0 .23.215.415.645.786l1.022.88"
      ></path>
    </svg>
  );
};

export const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M11.805 4.195c.26.26.26.683 0 .943l-7.333 7.334a.667.667 0 1 1-.943-.943l7.333-7.334c.26-.26.683-.26.943 0Z"
        clipRule="evenodd"
      ></path>
      <path d="M11.496 3.527c.187.054.442.15.634.343.193.192.289.447.343.634.06.207.1.44.128.676.055.473.069 1.027.065 1.543a28.579 28.579 0 0 1-.076 1.83l-.013.168v.001a.667.667 0 0 1-1.33-.111 31.889 31.889 0 0 0 .04-.578c.02-.355.042-.83.046-1.32.003-.495-.01-.986-.056-1.378a3.498 3.498 0 0 0-.1-.511 3.497 3.497 0 0 0-.512-.1c-.392-.047-.883-.06-1.377-.057a27.253 27.253 0 0 0-1.899.085.667.667 0 0 1-.112-1.329h.002a33.388 33.388 0 0 1 .612-.041c.367-.022.866-.044 1.386-.048.516-.004 1.07.01 1.543.065.235.027.47.067.676.128Z"></path>
    </svg>
  );
};

export const CodeConverter = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25Zm3.347 9.508a1 1 0 0 1 1.306-1.515l1.226 1.057.037.032c.226.193.465.4.64.597.197.223.444.578.444 1.071s-.247.848-.445 1.071a6.882 6.882 0 0 1-.639.597l-.037.032-1.226 1.058a1 1 0 0 1-1.306-1.515l1.227-1.058c.081-.07.152-.13.214-.185l-.214-.185-1.227-1.057Zm-6.59-1.41a1 1 0 0 1-.104 1.41l-1.227 1.057c-.081.07-.152.13-.214.185l.214.185 1.227 1.058a1 1 0 1 1-1.306 1.514L6.121 13.7l-.037-.032a6.897 6.897 0 0 1-.64-.597C5.248 12.848 5 12.493 5 12s.247-.848.445-1.071c.174-.198.413-.404.639-.597l.037-.032 1.226-1.057a1 1 0 0 1 1.41.104Zm5.192-.032a1 1 0 0 0-1.897-.632l-2 6a1 1 0 0 0 1.897.633l2-6Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
export const CodeExplainer = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M6.742 1A4 4 0 0 0 2.75 5.236v8.82c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h1.113c1.837 0 3.293 0 4.432-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433V10a2.75 2.75 0 0 0-2.75-2.75V6.5a2.5 2.5 0 0 0-2.5-2.5h-8.5a1 1 0 0 0 0 2h8.5a.5.5 0 0 1 .5.5V7H6.742a2 2 0 1 1 0-4h12a1 1 0 1 0 0-2h-12ZM15 13.75a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6ZM12.75 17a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
export const CodeGenerator = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M17.312 1.93c-1.343-.18-3.064-.18-5.255-.18h-.114c-2.19 0-3.912 0-5.255.18-1.377.186-2.469.573-3.327 1.43-.858.86-1.245 1.951-1.43 3.328-.181 1.343-.181 3.064-.181 5.255v.114c0 2.19 0 3.912.18 5.255.186 1.377.573 2.469 1.43 3.327.86.858 1.951 1.245 3.328 1.43 1.343.181 3.064.181 5.255.181h.114c2.19 0 3.912 0 5.255-.18 1.377-.186 2.469-.573 3.327-1.43.858-.86 1.245-1.951 1.43-3.328.181-1.343.181-3.064.181-5.255v-.114c0-2.19 0-3.912-.18-5.255-.186-1.377-.573-2.469-1.43-3.327-.86-.858-1.951-1.245-3.328-1.43ZM16 7.25a.75.75 0 0 0 0 1.5.38.38 0 0 1 .366.393v1.24c0 .497.192.977.54 1.333l.277.284-.277.284c-.348.356-.54.836-.54 1.332v1.241a.38.38 0 0 1-.366.393.75.75 0 0 0 0 1.5c1.047 0 1.866-.865 1.866-1.893v-1.24c0-.11.042-.213.113-.285l.394-.404a1.331 1.331 0 0 0 0-1.856l-.394-.404a.407.407 0 0 1-.113-.284V9.143c0-1.028-.819-1.893-1.866-1.893ZM8.75 8A.75.75 0 0 0 8 7.25c-1.047 0-1.866.865-1.866 1.893v1.24c0 .11-.042.213-.113.285l-.394.404a1.331 1.331 0 0 0 0 1.856l.394.404c.07.072.113.174.113.284v1.241c0 1.028.819 1.893 1.866 1.893a.75.75 0 0 0 0-1.5.38.38 0 0 1-.366-.393v-1.24c0-.497-.192-.977-.54-1.333L6.817 12l.277-.284c.348-.356.54-.836.54-1.332V9.143A.38.38 0 0 1 8 8.75.75.75 0 0 0 8.75 8ZM10 11a1 1 0 1 0 0 2h.009a1 1 0 0 0 0-2H10Zm3.991 0a1 1 0 0 0 0 2H14a1 1 0 1 0 0-2h-.009Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const Pin = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.46426 12.5357C7.78969 12.8612 7.78969 13.3888 7.46426 13.7142L3.29759 17.8809C2.97215 18.2063 2.44452 18.2063 2.11908 17.8809C1.79364 17.5555 1.79364 17.0278 2.11908 16.7024L6.28574 12.5357C6.61118 12.2103 7.13882 12.2103 7.46426 12.5357Z"
      ></path>
      <path d="M14.7577 2.12788C16.214 2.6544 17.3455 3.78587 17.872 5.2422C17.9613 5.48861 18.0664 5.77922 18.1047 6.03471C18.15 6.33653 18.1199 6.62099 18.0066 6.93637C17.7639 7.61173 17.2202 7.91355 16.6209 8.24618L15.4393 8.90508C15.012 9.14341 14.7299 9.3015 14.5289 9.4405C14.3332 9.57575 14.2777 9.65167 14.2546 9.6965C14.2423 9.72008 14.2043 9.83516 14.2143 10.2088C14.2238 10.5618 14.2696 11.0406 14.3352 11.7219C14.4412 12.8204 14.259 13.9087 13.6251 14.9223C13.5181 15.0936 13.3836 15.309 13.2332 15.4692C13.0557 15.6584 12.8512 15.7922 12.5877 15.8989C12.3195 16.0076 12.0755 16.0516 11.8122 16.0398C11.5882 16.0298 11.3311 15.9713 11.1164 15.9225C9.47 15.5487 7.89852 14.5934 6.65246 13.3474C5.4064 12.1013 4.45117 10.5299 4.07737 8.8835C4.02855 8.66891 3.97007 8.41175 3.96009 8.18779C3.94836 7.92451 3.99244 7.68048 4.10118 7.41228C4.20799 7.14883 4.3418 6.94425 4.53114 6.76671C4.6914 6.61645 4.90685 6.482 5.07807 6.37516C6.07762 5.7507 7.15703 5.55806 8.24724 5.65448C8.94333 5.71605 9.43408 5.75912 9.79492 5.76665C9.97325 5.77037 10.1992 5.78584 10.3168 5.72456C10.3604 5.70182 10.4362 5.64608 10.572 5.44907C10.7111 5.2473 10.8697 4.96415 11.1084 4.53618L11.7537 3.37898C12.0863 2.77972 12.3882 2.23598 13.0635 1.99334C13.3789 1.88002 13.6633 1.84991 13.9652 1.89518C14.2207 1.93349 14.5112 2.03869 14.7577 2.12788Z"></path>
    </svg>
  );
};
export const Left = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M21 12a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1Z"
        clipRule="evenodd"
      ></path>
      <path d="M18.972 12a5.216 5.216 0 0 0-.503-.675c-.425-.482-1.012-1.032-1.625-1.564a42.567 42.567 0 0 0-2.437-1.956 1 1 0 0 1 1.186-1.61l.004.003c.144.109.563.425.8.61.477.372 1.116.885 1.759 1.443.637.553 1.3 1.17 1.812 1.75.255.288.494.59.674.89.163.271.358.666.358 1.109 0 .443-.195.838-.358 1.11-.18.298-.419.6-.674.89-.512.578-1.175 1.196-1.812 1.75a44.45 44.45 0 0 1-2.559 2.052l-.004.003a1 1 0 0 1-1.186-1.61 42.48 42.48 0 0 0 2.438-1.956c.612-.532 1.199-1.082 1.625-1.564.213-.242.409-.52.502-.675Z"></path>
    </svg>
  );
};
