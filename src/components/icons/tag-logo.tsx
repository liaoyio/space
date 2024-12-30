'use client';

import { SVGProps } from 'react';

export function VueIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path fill="#41b883" d="M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6l3.22-5.6Z"></path>
      <path fill="#41b883" d="m2 3.925l14 24.15l14-24.15h-5.6L16 18.415L7.53 3.925Z"></path>
      <path fill="#35495e" d="M7.53 3.925L16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6Z"></path>
    </svg>
  );
}

export function VueUseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.93em"
      height="1em"
      viewBox="0 0 256 277"
      {...props}
    >
      <path
        fill="#35495E"
        d="M202.968 0v148.146c0 41.405-33.563 74.967-74.968 74.967s-74.968-33.562-74.968-74.967V0h53.036v148.146a21.932 21.932 0 1 0 43.864 0V0z"
      ></path>
      <path
        fill="#41B883"
        d="M256 0v148.146c0 70.694-57.306 128.019-128 128.019S0 218.84 0 148.145V0h53.032v148.146c0 41.405 33.566 74.967 74.968 74.967s74.968-33.562 74.968-74.967V0z"
      ></path>
    </svg>
  );
}

export function AstroIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path
        fill="url(#vscodeIconsFileTypeLightAstro0)"
        d="M11.025 20.499c-.532 1.75-.154 4.184 1.105 5.331v-.042l.042-.112c.154-.741.756-1.203 1.526-1.175c.713.014 1.12.392 1.217 1.217c.042.308.042.616.056.938v.098c0 .7.196 1.371.588 1.959c.35.56.84.993 1.497 1.287l-.028-.056l-.028-.112c-.49-1.469-.14-2.49 1.147-3.358l.392-.266l.868-.573a4.25 4.25 0 0 0 1.791-3.037c.07-.532 0-1.05-.154-1.553l-.21.14c-1.945 1.035-4.17 1.4-6.325.98c-1.301-.197-2.56-.56-3.498-1.652z"
      ></path>
      <path
        fill="#17191e"
        d="M4.925 20.191s3.736-1.82 7.486-1.82l2.84-8.759c.098-.42.406-.7.756-.7s.644.28.756.714l2.826 8.746c4.45 0 7.487 1.82 7.487 1.82L20.709 2.84c-.168-.518-.49-.84-.896-.84h-7.612c-.406 0-.7.322-.896.84z"
      ></path>
      <defs>
        <linearGradient
          id="vscodeIconsFileTypeLightAstro0"
          x1="8.19"
          x2="16.91"
          y1="23"
          y2="18.89"
          gradientTransform="translate(-.673 -2.198)scale(1.3993)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#D83333"></stop>
          <stop offset="1" stopColor="#F041FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function NextjsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
      {...props}
    >
      <circle cx="64" cy="64" r="64"></circle>
      <path
        fill="url(#deviconNextjs0)"
        d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209"
      ></path>
      <path fill="url(#deviconNextjs1)" d="M81.778 38.4h8.533v51.2h-8.533z"></path>
      <defs>
        <linearGradient
          id="deviconNextjs0"
          x1="109"
          x2="144.5"
          y1="116.5"
          y2="160.5"
          gradientTransform="scale(.71111)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="deviconNextjs1"
          x1="121"
          x2="120.799"
          y1="54"
          y2="106.875"
          gradientTransform="scale(.71111)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ReactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <circle cx="16" cy="15.974" r="2.5" fill="#00d8ff"></circle>
      <path
        fill="#00d8ff"
        d="M16 21.706a28.4 28.4 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.54 3.54 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.8 28.8 0 0 1 16 10.293a28.7 28.7 0 0 1 9.022 1.324a11.4 11.4 0 0 1 3.538 1.866A3.4 3.4 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191m0-10.217a28 28 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.2 27.2 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.33 2.33 0 0 0-1.01-1.573a10.2 10.2 0 0 0-3.161-1.654A27.5 27.5 0 0 0 16 11.489"
      ></path>
      <path
        fill="#00d8ff"
        d="M10.32 28.443a2.64 2.64 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.8 28.8 0 0 1 3.4-8.593a28.7 28.7 0 0 1 5.653-7.154a11.4 11.4 0 0 1 3.384-2.133a3.4 3.4 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.8 28.8 0 0 1-3.316 8.133a28.4 28.4 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.9 4.9 0 0 1-1.624.307m1.773-14.7a28 28 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.2 27.2 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.33 2.33 0 0 0-1.868.089A10.2 10.2 0 0 0 17.5 6.9a27.5 27.5 0 0 0-5.4 6.849Z"
      ></path>
      <path
        fill="#00d8ff"
        d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.8 28.8 0 0 1-5.747-7.237a28.7 28.7 0 0 1-3.374-8.471a11.4 11.4 0 0 1-.158-4A3.4 3.4 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.4 28.4 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.54 3.54 0 0 1-1.494 2.555a2.6 2.6 0 0 1-1.315.324m-9.58-10.2a28 28 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.2 27.2 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.33 2.33 0 0 0-.855 1.662a10.2 10.2 0 0 0 .153 3.565a27.5 27.5 0 0 0 3.236 8.1Z"
      ></path>
    </svg>
  );
}

export function TypescriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <rect width="28" height="28" x="2" y="2" fill="#3178c6" rx="1.312"></rect>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M18.245 23.759v3.068a6.5 6.5 0 0 0 1.764.575a11.6 11.6 0 0 0 2.146.192a10 10 0 0 0 2.088-.211a5.1 5.1 0 0 0 1.735-.7a3.54 3.54 0 0 0 1.181-1.266a4.47 4.47 0 0 0 .186-3.394a3.4 3.4 0 0 0-.717-1.117a5.2 5.2 0 0 0-1.123-.877a12 12 0 0 0-1.477-.734q-.6-.249-1.08-.484a5.5 5.5 0 0 1-.813-.479a2.1 2.1 0 0 1-.516-.518a1.1 1.1 0 0 1-.181-.618a1.04 1.04 0 0 1 .162-.571a1.4 1.4 0 0 1 .459-.436a2.4 2.4 0 0 1 .726-.283a4.2 4.2 0 0 1 .956-.1a6 6 0 0 1 .808.058a6 6 0 0 1 .856.177a6 6 0 0 1 .836.3a4.7 4.7 0 0 1 .751.422V13.9a7.5 7.5 0 0 0-1.525-.4a12.4 12.4 0 0 0-1.9-.129a8.8 8.8 0 0 0-2.064.235a5.2 5.2 0 0 0-1.716.733a3.66 3.66 0 0 0-1.171 1.271a3.73 3.73 0 0 0-.431 1.845a3.6 3.6 0 0 0 .789 2.34a6 6 0 0 0 2.395 1.639q.63.26 1.175.509a6.5 6.5 0 0 1 .942.517a2.5 2.5 0 0 1 .626.585a1.2 1.2 0 0 1 .23.719a1.1 1.1 0 0 1-.144.552a1.3 1.3 0 0 1-.435.441a2.4 2.4 0 0 1-.726.292a4.4 4.4 0 0 1-1.018.105a5.8 5.8 0 0 1-1.969-.35a5.9 5.9 0 0 1-1.805-1.045m-5.154-7.638h4v-2.527H5.938v2.527H9.92v11.254h3.171Z"
      ></path>
    </svg>
  );
}

export function JavascriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#F0DB4F" rx="60"></rect>
        <path
          fill="#323330"
          d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"
        ></path>
      </g>
    </svg>
  );
}

export function DockerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#2396ED" rx="60"></rect>
        <path
          fill="#fff"
          d="M141.187 122.123h20.717v-18.744h-20.717zm-24.662 0h20.716v-18.744h-20.716zm-24.17 0h20.717v-18.744H92.355zm-24.17 0H88.41v-18.744H68.186zm-24.662 0H64.24v-18.744H43.523zm24.663-22.69h20.223V80.69H68.186zm24.17 0h20.716V80.69H92.355zm24.169 0h20.716V80.69h-20.716zm0-22.69h20.716V58h-20.716zM228 113.739s-8.879-8.386-27.129-5.426c-1.973-14.305-17.264-22.69-17.264-22.69s-14.304 17.264-3.946 36.501c-2.959 1.48-7.892 3.453-15.291 3.453H28.726c-2.467 9.372-2.467 71.521 65.602 71.521c48.832 0 85.333-22.689 102.597-64.123C222.574 134.948 228 113.738 228 113.738"
        ></path>
      </g>
    </svg>
  );
}

export function ViteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <g fill="none">
        <path
          fill="url(#vscodeIconsFileTypeVite0)"
          d="m29.884 6.146l-13.142 23.5a.714.714 0 0 1-1.244.005L2.096 6.148a.714.714 0 0 1 .746-1.057l13.156 2.352a.7.7 0 0 0 .253 0l12.881-2.348a.714.714 0 0 1 .752 1.05z"
        ></path>
        <path
          fill="url(#vscodeIconsFileTypeVite1)"
          d="M22.264 2.007L12.54 3.912a.36.36 0 0 0-.288.33l-.598 10.104a.357.357 0 0 0 .437.369l2.707-.625a.357.357 0 0 1 .43.42l-.804 3.939a.357.357 0 0 0 .454.413l1.672-.508a.357.357 0 0 1 .454.414l-1.279 6.187c-.08.387.435.598.65.267l.143-.222l7.925-15.815a.357.357 0 0 0-.387-.51l-2.787.537a.357.357 0 0 1-.41-.45l1.818-6.306a.357.357 0 0 0-.412-.45"
        ></path>
        <defs>
          <linearGradient
            id="vscodeIconsFileTypeVite0"
            x1="6"
            x2="235"
            y1="33"
            y2="344"
            gradientTransform="translate(1.34 1.894)scale(.07142)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#41D1FF"></stop>
            <stop offset="1" stopColor="#BD34FE"></stop>
          </linearGradient>
          <linearGradient
            id="vscodeIconsFileTypeVite1"
            x1="194.651"
            x2="236.076"
            y1="8.818"
            y2="292.989"
            gradientTransform="translate(1.34 1.894)scale(.07142)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFEA83"></stop>
            <stop offset=".083" stopColor="#FFDD35"></stop>
            <stop offset="1" stopColor="#FFA800"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}

export function GitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#F34F29"
        d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.68 9.68 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.7 9.7 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.7 9.7 0 0 1 3.167-2.11V47.333a9.6 9.6 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501"
      ></path>
    </svg>
  );
}

export function TailwindcssIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#38bdf8"
        d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"
      ></path>
    </svg>
  );
}

export function WebpackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#8ed6fb"
        d="M117.29 98.1L66.24 127v-22.51L98 87zm3.5-3.16V34.55l-18.68 10.8v38.81l18.67 10.77zM10.71 98.1l51 28.88v-22.49L29.94 87zm-3.5-3.16V34.55l18.68 10.8v38.81zm2.19-64.3L61.76 1v21.76L28.21 41.21l-.27.15zm109.18 0L66.24 1v21.76L99.79 41.2l.27.15l18.54-10.71z"
      ></path>
      <path
        fill="#1c78c0"
        d="M61.76 99.37L30.37 82.1V47.92L61.76 66zm4.48 0l31.39-17.25v-34.2L66.24 66zM32.5 44L64 26.66L95.5 44L64 62.16z"
      ></path>
    </svg>
  );
}

export function UnocssIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <g strokeWidth=".13">
        <path
          fill="#858585"
          d="M17.007 23.491a6.52 6.52 0 1 1 13.04 0a6.52 6.52 0 0 1-13.04 0"
        ></path>
        <path
          fill="#ccc"
          d="M17.007 8.51a6.52 6.52 0 0 1 13.04 0v5.867c0 .36-.292.652-.652.652H17.659a.65.65 0 0 1-.652-.652z"
        ></path>
        <path
          fill="#4d4d4d"
          d="M14.993 23.491a6.52 6.52 0 1 1-13.04 0v-5.868c0-.36.292-.652.652-.652h11.736c.36 0 .652.292.652.652z"
        ></path>
      </g>
    </svg>
  );
}

export function EslintIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path
        fill="#4b32c3"
        d="m29.832 16.7l-6.354 10.717A1.26 1.26 0 0 1 22.36 28H9.647a1.26 1.26 0 0 1-1.118-.59l-6.356-10.7a1.26 1.26 0 0 1 0-1.272L8.527 4.676A1.34 1.34 0 0 1 9.647 4h12.709a1.34 1.34 0 0 1 1.118.678l6.354 10.786a1.2 1.2 0 0 1 0 1.238Zm-5.262 4.2v-9.614L16 6.466l-8.56 4.82V20.9L16 25.719Z"
      ></path>
      <path
        fill="#8080f2"
        d="m21.802 19.188l-5.747 3.235l-5.742-3.235v-6.47l5.742-3.236l5.747 3.236z"
      ></path>
    </svg>
  );
}

export function PrettierIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path
        fill="#56b3b4"
        d="M21.714 8.571h1.143a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571h-1.143a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571"
      ></path>
      <path
        fill="#ea5e5e"
        d="M4.571 26.857h5.714a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571H4.571a.57.57 0 0 1-.571-.57a.57.57 0 0 1 .571-.572"
      ></path>
      <path
        fill="#bf85bf"
        d="M18.286 17.714h3.429a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571h-3.429a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571"
      ></path>
      <path
        fill="#ea5e5e"
        d="M11.429 17.714H16a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571h-4.571a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571"
      ></path>
      <path
        fill="#56b3b4"
        d="M4.571 17.714h4.572a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571H4.571a.57.57 0 0 1-.571-.57a.57.57 0 0 1 .571-.572"
      ></path>
      <path
        fill="#bf85bf"
        d="M4.571 22.286h5.714a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571H4.571A.57.57 0 0 1 4 22.857a.57.57 0 0 1 .571-.571m0-9.143h5.714a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571H4.571A.57.57 0 0 1 4 13.714a.57.57 0 0 1 .571-.571"
      ></path>
      <path
        fill="#f7ba3e"
        d="M10.286 6.286h11.428a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571H10.286a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571"
      ></path>
      <path
        fill="#ea5e5e"
        d="M4.571 6.286H8a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.572H4.571A.57.57 0 0 1 4 6.857a.57.57 0 0 1 .571-.571"
      ></path>
      <path
        fill="#f7ba3e"
        d="M9.143 24.571h1.143a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571H9.143a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571"
      ></path>
      <path
        fill="#56b3b4"
        d="M9.143 10.857h1.143a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571H9.143a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571M4.571 24.571h2.286a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571H4.571a.57.57 0 0 1-.571-.57a.57.57 0 0 1 .571-.572"
      ></path>
      <path
        fill="#f7ba3e"
        d="M4.571 10.857h2.286a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.572H4.571A.57.57 0 0 1 4 11.429a.57.57 0 0 1 .571-.572"
      ></path>
      <path
        fill="#d0d4d8"
        d="M19.429 24.571h1.143a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571h-1.143a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571m-6.858 0h4.571a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571h-4.571a.57.57 0 0 1-.571-.57a.57.57 0 0 1 .571-.572m10.286 0h4.571a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571h-4.571a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571"
        opacity=".5"
      ></path>
      <path
        fill="#56b3b4"
        d="M13.714 15.429h9.143a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571h-9.143a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571"
      ></path>
      <path
        fill="#f7ba3e"
        d="M8 15.429h3.429A.57.57 0 0 1 12 16a.57.57 0 0 1-.571.571H8A.57.57 0 0 1 7.429 16A.57.57 0 0 1 8 15.429"
      ></path>
      <path
        fill="#ea5e5e"
        d="M4.571 15.429h1.143a.57.57 0 0 1 .572.571a.57.57 0 0 1-.571.571H4.571A.57.57 0 0 1 4 16a.57.57 0 0 1 .571-.571"
      ></path>
      <path
        fill="#bf85bf"
        d="M14.857 8.571h4.571a.57.57 0 0 1 .572.572a.57.57 0 0 1-.571.571h-4.572a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.572"
      ></path>
      <path
        fill="#56b3b4"
        d="M4.571 8.571h8a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571h-8A.57.57 0 0 1 4 9.143a.57.57 0 0 1 .571-.572"
      ></path>
      <path
        fill="#f7ba3e"
        d="M8 20h10.286a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571H8a.57.57 0 0 1-.571-.571A.57.57 0 0 1 8 20"
      ></path>
      <path
        fill="#bf85bf"
        d="M4.571 20h1.143a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571H4.571A.57.57 0 0 1 4 20.571A.57.57 0 0 1 4.571 20"
      ></path>
      <path
        fill="#ea5e5e"
        d="M18.286 10.857H24a.57.57 0 0 1 .571.571A.57.57 0 0 1 24 12h-5.714a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.572"
      ></path>
      <path
        fill="#f7ba3e"
        d="M18.286 13.143H24a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571h-5.714a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571"
      ></path>
      <path
        fill="#56b3b4"
        d="M4.571 4h13.715a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571H4.571A.57.57 0 0 1 4 4.571A.57.57 0 0 1 4.571 4"
      ></path>
      <path
        fill="#d0d4d8"
        d="M20.571 4h6.857a.57.57 0 0 1 .572.571a.57.57 0 0 1-.571.571h-6.858A.57.57 0 0 1 20 4.571A.57.57 0 0 1 20.571 4m0 16h2.286a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571h-2.286a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571m4.572 0h2.286a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571h-2.286a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571M24 17.714h3.429a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571H24a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571m0-11.428h3.429a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571H24a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571m1.143 9.143h2.286A.57.57 0 0 1 28 16a.57.57 0 0 1-.571.571h-2.286a.57.57 0 0 1-.572-.571a.57.57 0 0 1 .572-.571m0-6.858h2.286a.57.57 0 0 1 .571.572a.57.57 0 0 1-.571.571h-2.286a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.572m1.143 2.286h1.143a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571h-1.143a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571m0 2.286h1.143a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571h-1.143a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571m-9.143 9.143h10.286a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571H17.143a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571m-4.572 0h2.286a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571h-2.286a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571m9.143 4.571h5.714a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571h-5.714a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571m-9.143 0h6.857a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571h-6.857a.57.57 0 0 1-.571-.57a.57.57 0 0 1 .571-.572m0-16H16a.57.57 0 0 1 .571.571A.57.57 0 0 1 16 12h-3.429a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.572m0 2.286H16a.57.57 0 0 1 .571.571a.57.57 0 0 1-.571.571h-3.429a.57.57 0 0 1-.571-.571a.57.57 0 0 1 .571-.571"
        opacity=".5"
      ></path>
    </svg>
  );
}

export function HuskyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path
        fill="#7f7f7f"
        d="M26.4 20c-.025.939-1.839 1.591-1.1 2.524c1.63.229.889 1.309 1.782 1.677c-1.579 2.57-4.126 2.891-6.549 1.282a2.9 2.9 0 0 0-2.149-.423c-.37.593.181.662.533.748c1.7.339 3.421 2.972 9.185.464c.769-.323.652-1.274.319-2.022c.639-.272.678-.982.772-1.895c.628-2.055-1.431-1.88-2.793-2.355m-9.063-4.467a7.7 7.7 0 0 0-2.422 1.013c.965.567 1.348 1.243 2.422 1.032s1.054-.9.631-1.706a.635.635 0 0 0-.631-.339M21.874 2c-1.312.06-2.44 3.574-3.778 6.065c-3.846 1.6-4.809-.475-6.065-.134C9.892 3.572 6.716-.8 5.858 4.4c.189 3.926-1.378 4.25-1.239 9.853c0 0-2.8 5.626-1.655 10.605A6.65 6.65 0 0 0 8.492 30c.2-1.435 2.449-4.671 1.833-5.426c-1.538-1.884-1.055-6.5 2.84-6.976c.533-3.883 3.174-3.152 2.9-4.275c-.847-3.518 2.806-1.876 3.419-.723c1.1 1.828 1.877 3.625 2.777 4.476a9.3 9.3 0 0 0 2.79 1.709c-.327-.2-3.127-2.573-3.947-4.476a12.6 12.6 0 0 1-.443-3.723c1.421-.223 1.994 2.168 3.537 4.337a.44.44 0 0 1 0 .386c-.212-.112-.286-.394-.542-.428c-.233 0-.421.33-.421.737s.307.553.73.743a3.56 3.56 0 0 0 1.792 1.679l-1.9-5.559c-.07-3.482.3-6.963-1.719-10.445A.8.8 0 0 0 21.874 2m.018 1.11c.105 0 .2.069.289.231c1.053 1.979 1.092 6.625 1.084 8.268c-.5-1.138-1.249-3.052-3.611-3.635c0 0 1.38-4.849 2.238-4.864m-14.149.442c.48 0 1.026.28 1.658 1.434C10.414 6.832 11.14 8.06 11.493 8.7c.722 1.3-.316.272-.641 3.611a1.58 1.58 0 0 1-.8 1.311a10.85 10.85 0 0 1-2.317-5.07c-1.008 1.5.653 3.813.682 5.794a4.26 4.26 0 0 1-2.261.028c-.52-.26-.691-3.43.273-5.891c.8-2.05.421-4.656.778-4.77c.246-.078.248-.159.536-.161"
      ></path>
    </svg>
  );
}

export const tagIcons = {
  astro: <AstroIcon />,
  docker: <DockerIcon />,
  eslint: <EslintIcon />,
  git: <GitIcon />,
  husky: <HuskyIcon />,
  javascript: <JavascriptIcon />,
  nextjs: <NextjsIcon />,
  prettier: <PrettierIcon />,
  react: <ReactIcon />,
  tailwindcss: <TailwindcssIcon />,
  typescript: <TypescriptIcon />,
  unocss: <UnocssIcon />,
  vite: <ViteIcon />,
  vue: <VueIcon />,
  vueuse: <VueUseIcon />,
  webpack: <WebpackIcon />,
};
